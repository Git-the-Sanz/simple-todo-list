'use client'

import { signIn, signOut } from 'next-auth/react'

export const LoginButton = () => {
  return <button onClick={() => signIn()} className='flex-no-shrink p-2 border-2 rounded text-green border-green text-white bg-green'>Sign in</button>
}

export const LogoutButton = () => {
  return <button onClick={() => signOut()} className='flex-no-shrink p-2 border-2 rounded text-red border-red text-white bg-red'>Sign Out</button>
}
