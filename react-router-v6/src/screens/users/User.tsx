import React from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { users } from '../../db';

const User = () => {
  const { userId } = useParams();
  const user = users.filter((user) => user.id === Number(userId))[0];

  return (
    <div>
      <h1>{user.name}</h1>
      <hr />
      <Link to={'followers'}>follwers</Link>
      <Outlet context={{ nameOfMyUser: user.name }} />
    </div>
  );
};

export default User;
