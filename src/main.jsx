import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BodyWrapper } from './App';
import { HomePage, SuccessPage } from './Components/Pages';
import { Suces } from './Components/Pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BodyWrapper>
        <HomePage />
      </BodyWrapper>
    )
  },
  {
    path: "/success",
    element: (

      <Suces
        gsmWidth="100%"
        mobWidth="50%"
        width="34%"
        color="hsl(235, 18%, 26%)"
        bg="hsl(0, 0%, 100%)"
        className='active'><SuccessPage /></Suces>

    )
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
