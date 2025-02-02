import React from 'react'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
  return (
    <nav className='bg-green-300'>
      {/*ห่างจากขอบ*/}
      <div className='mx-auto px-4'>
        <div className='flex justify-between h-16'>

          <div className='flex items-center gap-4'>
            {/* left */}
            <Link to={'/'}
            className='text-2xl font-bold'>LOGO</Link>
            <Link to={'/'}>Home</Link>
            <Link to={'/shop'}>ShopPage</Link>
            <Link to={'/cart'}>Cart</Link>
          </div>

          <div className='flex items-center gap-4'>
            {/* right */}
            <Link to={'/register'}>Register</Link>
            <Link to={'/login'}>Login</Link>

          </div>

        </div>


      </div>

    </nav>
  )
}

export default MainNavbar