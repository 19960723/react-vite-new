import React, { memo } from 'react';
import { Link, Outlet } from 'react-router-dom';

const index = memo(() => {
  return (
    <>
      <h3>子路由跳转</h3>
      <nav className="flex list-none">
        <li className="mx-4">
          <Link to="/router/test1">test1</Link>
        </li>
        <li className="mx-4">
          <Link to="/router/test2">test2</Link>
        </li>
      </nav>
      <Outlet></Outlet>
    </>
  );
});

export default index;
