import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
      <Container>
        <nav className='flex items-center justify-between h-16'>
          <Link to='/' className='flex items-center space-x-2'>
            <Logo width='48px' />
            <span className='text-xl font-semibold text-gray-900'>BlogHub</span>
          </Link>
          
          <ul className='flex items-center gap-4'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:text-blue-600 hover:bg-gray-50 rounded-lg'
                >
                  {item.name}
                </button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header