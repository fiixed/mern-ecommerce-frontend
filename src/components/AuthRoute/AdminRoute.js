import React from 'react'

const AdminRoute = ({children}) => {
  //get user from localstorage
  const user = JSON.parse(localStorage.getItem('userInfo'));
  const isAdmin = user?.userFound?.isAdmin ? true : false;
  console.log(user?.userFound);
  if (!isAdmin) return <h1>Access Denied for non admins</h1>;
  return <>{children}</>;
}

export default AdminRoute