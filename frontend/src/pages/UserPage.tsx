import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

import { IUser } from '../types';

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>({} as IUser);
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:5000/api/user/${id}`)
    .then((response : AxiosResponse) => {
      setUser(response.data);
    })
    .catch((reason : any) => {
      console.log(reason);
      setUser({} as IUser);
    });
    
  }, []);

  if (user) {
    return (
      <div className='page page-user'>
        <div className="user-info">
          <div className="avatar"></div>
          <div className="username">{user.username}</div>
          <div className="email">{user.email}</div>
        </div>
      </div>
    )
  } else {
    return (<h1>There is user with id: {id}</h1>)
  }
  
}
