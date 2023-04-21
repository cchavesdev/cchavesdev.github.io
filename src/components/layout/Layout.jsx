import React from 'react'
import { Navigation } from '../navigation/Navigation'
import {Outlet} from 'react-router-dom'
export const Layout = () => {
  return (
    <div>
      <Navigation>
       
      </Navigation>
      <div className='content-app mt-3  pb-5'>
      <Outlet></Outlet>
      </div>
    </div>
  )
}
