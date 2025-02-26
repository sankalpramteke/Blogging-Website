import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

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

  const { theme, toggleTheme } = useTheme();

  return (
    <header className='sticky top-0 z-50 dark:bg-dark-bg/80 bg-white/80 backdrop-blur-md border-b dark:border-dark-border border-gray-100'>
      <Container>
        <nav className='flex items-center justify-between h-16'>
          <Link to='/' className='flex items-center space-x-2'>
            <Logo width='48px' />
            <span className='text-xl font-semibold dark:text-dark-text text-gray-900'>BlogHub</span>
          </Link>
          
          <ul className='flex items-center gap-4'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='px-4 py-2 text-sm font-medium dark:text-dark-text text-gray-600 transition-all hover:text-blue-600 dark:hover:text-blue-400 dark:hover:bg-dark-hover hover:bg-gray-50 rounded-lg'
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
            <li>
              <button
                onClick={toggleTheme}
                className='p-2 text-gray-600 dark:text-dark-text hover:bg-gray-50 dark:hover:bg-dark-hover rounded-lg transition-colors'
                aria-label='Toggle theme'
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header