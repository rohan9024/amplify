'use client';


import { Inter } from 'next/font/google';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
});


function First() {

    return (
        <div>
            <div className='w-screen'>
                <Image
                    src='/left.jpg'
                    alt="left side image"
                    width={500}
                    height={500}
                    className='w-screen h-72 object-cover '
                />
            </div>
            <div className='flex flex-col justify-center  items-center  mt-20 space-y-6 '>
                <div className='flex flex-col justify-center  items-center  space-y-10 w-[700px]'>
                    <h1 className={`${inter.className} font-bold text-4xl text-center `}>Explore the Twitterverse with our powerful profile analysis tool!</h1>
                    <h1 className={`${inter.className} font-bold text-sm text-left text-gray-700`}>Please provide the Twitter username for which you would like to conduct the analysis.</h1>
                    <div className='flex justify-center items-center mt-5 '>
                        <input type="text" placeholder='iamsonny' className={`${inter.className} border outline-none border-gray-100 shadow-lg bg-gray-200 px-4 w-[400px] py-2 `} />
                       <Link href="/second">
                        <div className='flex justify-center items-center px-4 py-2 rounded-lg bg-green-600 font-bold text-lg text-center'>
                            <h1 className={`${inter.className}  `} >Submit</h1>
                        </div>
                       </Link>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default First