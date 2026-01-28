import AuthForms from '@/components/AuthForms'
import React from 'react'

const SignUp = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
        <AuthForms type='sign-up'/>
    </section>
  )
}

export default SignUp