import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'       
import PostList from './pages/PostList'
import Register from './pages/Register'
import SinglePost from './pages/SinglePost'
import Write from './pages/Write'
import MainLayout from './layouts/MainLayout'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  // We will always keep seeing navbar above each page bz of thid page layout
  {element: <MainLayout/>,
  children:[
    {path: "/", element: <Home/>},
    {path: "/login", element: <Login/>},
    {path: "/posts", element: <PostList/>},
    {path: "/register", element: <Register/>},
    {path: "/:slug", element: <SinglePost/>},
    {path: "/write", element: <Write/>},
  ]}
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
);