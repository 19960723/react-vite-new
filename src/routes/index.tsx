import React, { lazy, Suspense } from "react";
import { useRoutes, Navigate } from 'react-router-dom';
const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));
const User = lazy(() => import('@/pages/user'));
const RouterCom = lazy(() => import('@/pages/routerCom'));
const NoFound = lazy(() => import('@/pages/NoFound'));

const SuspenseComponent = (Component: any) => {
  return (
    <Suspense fallback={<>加载中...</>}>
      <Component />
    </Suspense>
  );
};

export default function WrapRoutes() {
  const routes = [
    {
      path: '/',
      exact: true,
      element: <Navigate  to="/home" />
    },
    {
      path: '/home',
      name: 'home',
      element: SuspenseComponent(Home)
    },
    {
      path: '/about',
      name: 'about',
      element: SuspenseComponent(About)
    },
    {
      path: '/user',
      name: 'user',
      element: SuspenseComponent(User)
    },
    {
      path: '/router',
      name: 'router',
      element: SuspenseComponent(RouterCom),
      // children: [
      //   {
      //     path: 'test1',
      //     name: 'test1',
      //     element: ''
      //   },
      //   {
      //     path: 'test2',
      //     name: 'test2',
      //     element: ''
      //   }
      // ]
    },
    {
      path: '*',
      name: '404',
      element: SuspenseComponent(NoFound),
    },
  ]
  return useRoutes(routes)
}