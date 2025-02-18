import React from 'react';
import Image from 'next/image';
export default function Banner() {
    return (
        <div style={{ fontFamily: 'PartialSansKR' }} className='w-full h-full flex justify-center items-center relative my-8 md:my-12 '>
            
            <div className='px-2 py-1 md:p-5 bg-amber-300 text-lg md:text-5xl font-bold' style={{ transform: 'rotate(-5deg)' }}>
                <p>비밀 지원금 <span className=' text-[#1E96FC]'>무료 견적</span>받기</p>
                <img src="/light.png" alt="" className='w-16 h-16 absolute right-[40%] top-[-50%] md:top-[-20%]'/>

            </div>
        </div>
    );
};