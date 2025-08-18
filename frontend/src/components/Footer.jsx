import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*------left side footer------*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="logo" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium veniam pariatur id delectus facilis dolores sequi quidem laudantium, enim officia aspernatur consectetur, quo quod quaerat blanditiis doloribus cumque! Veritatis, mollitia.</p>

            </div>

            {/*------center side footer------*/}
            <div>
                <p className='text-xl font-medium md-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            {/*------right side footer------*/}
            <div>
                <p className='text-xl font-medium md-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>9510459011</li>
                    <li>rb@gmail.com</li>
                </ul>
            </div>

        </div>
        {/*------copyright Text------*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>© 2025 Your Company. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer