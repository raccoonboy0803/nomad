import React from 'react';
import { useOutletContext } from 'react-router-dom';

interface IFollwersContext {
  nameOfMyUser: string;
}
const Followers = () => {
  const { nameOfMyUser } = useOutletContext<IFollwersContext>();

  return <h1>Here are {nameOfMyUser}의 followers</h1>;
};
export default Followers;
