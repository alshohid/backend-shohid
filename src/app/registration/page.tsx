
import RegistrationForm from '@/components/user/RegistrationForm'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

export default function RegistrationFromPage() {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    if (typeof token !== undefined) {
      // redirect("/");
    }
  return (
    <div className='w-full'>
        <RegistrationForm/>
    </div>
  )
}
