import { Inter, Manrope, Raleway } from 'next/font/google';
import Image from 'next/image'
import React from 'react'



const raleway = Raleway({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
});
const manrope = Manrope({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});


function Tweet({ username, name, desc, }) {
    return (

        // Tweet component
        <div className={`${raleway.className} w-auto flex flex-col justify-center items-center px-20 py-20 rounded-lg bg-gray-100 border-gray-400 shadow-2xl `}>
            <div className='flex justify-start items-center space-x-4'>
                <Image
                    src='/sonny.png'
                    alt="Profile picture"
                    width={100}
                    height={100}
                    className='w-20 h-20 object-contain '
                />
                <div className='flex justify-around items-center flex-col space-y-2'>
                    <h1 className='font-bold text-xl '>{name}</h1>
                    <h1 className='font-normal text-lg '>{username}</h1>
                </div>

            </div>
            <div className='flex justify-center items-center w-[400px] mt-12 '>
                <h1 className={`${inter.className} font-normal text-2xl `}>{desc}</h1>
            </div>
        </div>




    )
}

export default Tweet