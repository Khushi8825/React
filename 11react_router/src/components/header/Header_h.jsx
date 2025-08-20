import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-black-700 '>
      <nav>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Link to='/'>
            <img src='https://images.pexels.com/photos/30506033/pexels-photo-30506033.jpeg'
            alt='Logo' className='h-10 w-15'/>
          </Link>
          <div className='flex flex-wrap lg: order-2'>
            <Link 
              to='#'
              className='text-gray-800 font-medium rounded-lg mr-5'>
            Login
          </Link>
          <Link 
            to="#"
            className='text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg px-2 mr-2 lg:px-5'>
              Get Started
          </Link>
          </div>
          <div 
            className='lg:order-1 justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
              <ul className="flex space-x-4">
                <li>
                  <NavLink 
                    to='/'
                    className = {({isActive})=>
                       `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700': 'text-gray-700' }`}>
                        Home
                       </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/about'
                    className = {({isActive})=>
                       `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700': 'text-gray-700' }`}>
                        About
                       </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/user'
                    className = {({isActive})=>
                       `block py-2 pr-4 pl-3 duration-200 ${isActive ? 'text-orange-700': 'text-gray-700' }`}>
                        User
                       </NavLink>
                </li>                                
              </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header