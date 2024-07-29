import HeaderMenu from '@/components/HeaderMenu'
import React from 'react'

export default function CheckOrder() {
  return (
    <>
    <HeaderMenu title="Check Order" />
    <section className='mt-8'>
        <h2 className='text-center text-2xl font-bold'>Silakan cek pesanan Anda:</h2>
        <form className='w-full flex flex-col justify-center'>
            <div className="form-group mt-3 mx-auto">
                <label htmlFor="email"></label>
                <input type="email" name='email' placeholder='Type your email' className='px-4 py-2 border border-slate-200 rounded-md w-full' />
            </div>
            <div className="form-group mt-3 mx-auto">
                <button type='submit' className='bg-blue-300 text-white px-4 py-2 rounded-md text-center w-full'>Submit</button>
            </div>
        </form>
    </section>
    </>
  )
}
