import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
      className='px-4 py-2 text-sm font-medium text-red-600 transition-all hover:bg-red-50 rounded-lg'
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn