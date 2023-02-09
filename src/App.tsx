import { useState } from 'react'
import { Routes,Route, Link, Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/features/counterSlice';
import WrapRoutes from '@/routes';

function DemoTest() {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>{count} hello</h2>
      <button onClick={ () => dispatch(decrement()) }>-</button>
      <button onClick={ () => dispatch(increment()) }>+</button>
      <button onClick={ () => dispatch(incrementByAmount(2)) }>+2</button>
    </div>
  )
}

function UserInfo() {
  const username = useSelector((state: any) => state.user.username)
  const password = useSelector((state: any) => state.user.password)
  return (
    <>
      <p>username: {username}   password: {password}</p>
    </>
  )
}

function NavLink() {
  return (
    <nav className='flex list-none'>
      <li className='mx-4'> <Link to="/home">home</Link> </li>
      <li className='mx-4'> <Link to="/about">about</Link> </li>
      <li className='mx-4'> <Link to="/user">user</Link> </li>
      <li className='mx-4'> <Link to="/router">router</Link> </li>
    </nav>
  )
}


function Home() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='flex'>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function About() {
  return (
    <>
      <DemoTest />
    </>
  )
}

function Users() {
  return (
    <>
      <UserInfo />
    </>
  )
}


function RouterPage() {
  return (
    <>
      <h3>子路由跳转</h3>
      <nav className='flex list-none'>
        <li className='mx-4'><Link to='/router/test1'>test1</Link></li>
        <li className='mx-4'><Link to='/router/test2'>test2</Link></li>
      </nav>
      <Outlet></Outlet>
      {/* <Routes>
        <Route path='/router/test1' element={<About />}></Route>
        <Route path='/router/test2' element={<Users />}></Route>
      </Routes> */}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <NavLink />
      <WrapRoutes />
      {/* <Routes>
        <Route path='/' element={<Home />}></Route> 
        <Route path='/about' element={<About />}></Route>
        <Route path='/user' element={<Users />}></Route>
        <Route path='/router' element={<RouterPage />}>
          <Route path='/router/test1' element={<h3>test1</h3>}></Route>
          <Route path='/router/test2' element={<h3>test2</h3>}></Route>
        </Route>
      </Routes> */}
    </div>
  )
}

export default App
