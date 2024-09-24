import PlainLayout from '@/components/master/Plain-Layout'
import LoginForm from '@/components/user/LoginForm'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import React from 'react'

export default function LoginPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")
  if(typeof token !== undefined){
    // redirect('/')
  }
  return (
    <div className='w-full'>
        <LoginForm/>
    </div>
  )
}
