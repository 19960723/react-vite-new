import React, { Link } from 'react-router-dom';
import './App.css';
import WrapRoutes from '@/routes';

function NavLink() {
  return (
    <nav className="flex list-none">
      <li className="mx-4">
        {' '}
        <Link to="/home">home</Link>{' '}
      </li>
      <li className="mx-4">
        {' '}
        <Link to="/about">about</Link>{' '}
      </li>
      <li className="mx-4">
        {' '}
        <Link to="/user">user</Link>{' '}
      </li>
      <li className="mx-4">
        {' '}
        <Link to="/router">router</Link>{' '}
      </li>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <NavLink />
      <WrapRoutes />
    </div>
  );
}

export default App;
