import React, { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';

import { Link } from "react-router-dom";

import { IUser } from "../types";

type UserLinkProps = {
  id: number,
  username: string
}

function UserLink(props: UserLinkProps) : JSX.Element {
  let pathname = `/user/${props.id}`;
  return (
    <Link to={pathname}>{props.username}</Link>
  )
}

export default function UsersPage() {
  const [users, setUsers] = useState<IUser[]>([] as IUser[]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
    .then((response : AxiosResponse) => {
      setUsers(response.data)
    })
    .catch((reason : any) => {
      console.log(reason);
      setUsers([]);
    })
  }, []);

  return (
    <div className='page page-users'>
      {
        users.map((user) => (
          <UserLink key={user.id} id={user.id} username={user.username}/>
        ))
      }
    </div>
  )
}
