import React, { memo } from 'react';
import { useSelector } from 'react-redux';
const User = memo(() => {
  const { username, password } = useSelector((state: any) => state.user);
  return (
    <>
      <p>
        username: {username} password: {password}
      </p>
    </>
  );
});

export default User;
