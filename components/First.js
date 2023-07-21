import Image from 'next/image'
import React from 'react'

function First() {
    return (
        <div>
            <div className='w-screen'>
                <Image
                    src='/left.avif'
                    alt="left side image"
                    width={500}
                    height={500}
                    className='w-screen h-96 object-cover '
                />
            </div>
            <div className='w-1/2'>
                <input type="text" />
            </div>
        </div>
    )
}

export default First