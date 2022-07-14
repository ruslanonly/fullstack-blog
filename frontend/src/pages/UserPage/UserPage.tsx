import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import multiavatar from '@multiavatar/multiavatar';

import { useBoolean, Spinner } from '@chakra-ui/react';

import { IUser } from '../../types';

function UserInfo(props: IUser) {
  let {username, email} = props;
  let userAvatarSVG: string  = multiavatar(username);
  return (
    <div className="user-info">
      <div className="avatar">
        <img alt='avatar' src={`data:image/svg+xml;utf8,${encodeURIComponent(userAvatarSVG)}`} />
      </div>
      <div className="username info-item">
        <span className="label">Username</span>
        <span className="value">{username}</span>
      </div>
      <div className="email info-item">
        <span className="label">Email</span>
        <span className="value">{email}</span>
      </div>
    </div>
  )
}

export default function UserPage() {
  let [loaded, setLoaded] = useBoolean(false);
  const { id } = useParams();
  const [user, setUser] = useState<IUser>({} as IUser);
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${id}`)
    .then((response : AxiosResponse) => {
      setUser(response.data);
      setLoaded.on();
    })
    .catch((reason : any) => {
      console.log(reason);
      setUser({} as IUser);
    });
    
  }, []);
  
  if (loaded) {
    if (user) {
      return (
        <div className='page page-user'>
          <UserInfo {...user}/>
        </div>
      )
    } else {
      return (<h1>There is user with id: {id}</h1>)
    }
  } else return <Spinner/>
  
  
}
