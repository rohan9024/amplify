import { Inter, Manrope, Raleway } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import Metrics from './Metrics';
import Tweet from '../components/Tweet';
import sample from "../sample.json"
import Link from 'next/link';


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


function Second() {
    return (

        // Card component
        <div className=' flex flex-col justify-center items-center space-y-12'>
            <div className='flex justify-center items-center'>
                <h1 className={`${inter.className} text-center font-bold text-5xl py-10`}>Twitter Analysis</h1>
            </div>

            <div className='flex justify-around items-center space-x-6 py-14'>
                <div className={`${raleway.className} mt-10  flex flex-col justify-center items-center px-20 py-20 rounded-lg bg-gray-100 border-gray-400 shadow-2xl `}>
                    <Image
                        src='/sonny.jpeg'
                        alt="Profile picture"
                        width={100}
                        height={100}
                        className='w-50 h-50 object-contain rounded-full'
                    />
                    <h1 className='font-bold text-xl mt-6'>Sonny Sangha</h1>

                    <div className='flex justify-around items-center w-[400px] mt-12 '>
                        <div>
                            <h1 className={`${inter.className} font-normal text-2xl `}>Tweets</h1>
                            <h1 className={`${inter.className} font-bold text-2xl `}>120</h1>
                        </div>
                        <div>
                            <h1 className={`${inter.className} font-normal text-2xl `}>Followers</h1>
                            <h1 className={`${inter.className} font-bold text-2xl `}>12M</h1>
                        </div>
                        <div>
                            <h1 className={`${inter.className} font-normal text-2xl `}>Following</h1>
                            <h1 className={`${inter.className} font-bold text-2xl `}>1.3k</h1>
                        </div>
                    </div>
                </div>

                <Metrics />
            </div>

            <h1 className={`${inter.className} font-bold text-5xl `}>Recent Tweets</h1>


            <div className='grid grid-cols-3 gap-4 mx-10'>
                {
                    sample.map(tweet => (
                        <Tweet name={tweet.name} desc={tweet.desc} username={tweet.username} />
                    )
                    )
                }
            </div>




        </div>
    )
}

export default Second