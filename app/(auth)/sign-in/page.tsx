import AuthForms from '@/components/AuthForms'
import React from 'react'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
        <AuthForms type='sign-in'/>
    </section>
  )
}

export default SignIn