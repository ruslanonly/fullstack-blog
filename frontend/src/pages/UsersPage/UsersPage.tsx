import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import multiavatar from '@multiavatar/multiavatar';

import { Link } from "react-router-dom";
import { Spinner, useBoolean } from '@chakra-ui/react';

import CreateUserDrawer from './CreateUserDrawer';

import { UpdateUsersContext } from './UpdateUsersContext';

import { IUser } from "../../types";

type UserLinkProps = {
  id: number,
  username: string
}

type UserCardProps = {
  username: string 
}

function UserCard(props: UserCardProps) {
  let { username } = props;
  let userAvatarSVG: string  = multiavatar(username);
  return (
    <div className="user-card">
      <div className="avatar">
        <img alt='avatar' src={`data:image/svg+xml;utf8,${encodeURIComponent(userAvatarSVG)}`} />
      </div>
      <div className="username">{username}</div>
    </div>
  )
}

function UserLink(props: UserLinkProps) : JSX.Element {
  let { id, username } = props;
  return (
    <Link to={`/user/${id}`} className="user-link">
      <UserCard username={username}/>
    </Link>
  )
}

export default function UsersPage() {
  let [loaded, setLoaded] = useBoolean(false); 
  let [users, setUsers] = useState<IUser[]>([] as IUser[]);
  const [updateUsers, setUpdateUsers] = useState(true);
  const changeUpdateUsers = (value: boolean) => setUpdateUsers(value);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
    .then((response : AxiosResponse) => {
      setUsers(response.data)
      setLoaded.on();
      setUpdateUsers(false);
    })
    .catch((reason : any) => {
      console.log(reason);
      setUsers([]);
      setUpdateUsers(false);
    })
  }, [updateUsers]);

  if (loaded) {
    return (
      <div className='page page-users'>
        <UpdateUsersContext.Provider value={changeUpdateUsers}>
          <div className="users">
            {
              users.map((user) => (
                <UserLink key={user.id} {...user}/>
              ))
            }
          </div>
          <CreateUserDrawer/>
        </UpdateUsersContext.Provider>
      </div>
    )
  } else {
    return <Spinner/>
  }
  
  
}
