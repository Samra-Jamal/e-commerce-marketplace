import React from 'react'
import Common from '@/components/common'
import Image from 'next/image'
interface Chef{
    id:number;
    img:string;
    name:string;
    title:string;
}
const page = () => {
    const chefData:Chef[] = [
        {
            id: 1,
            img: "/images/ch1.jpeg",
            name: "Tahmina Rumi",
            title:"Chef",
        },
        {
            id: 2,
            img: "/images/ch2.jpeg",
            name: "Jorina Begum",
            title:"Chef",
        },
        {
            id: 3,
            img: "/images/ch3.jpeg",
            name: "M.Mohammad",
            title:"Chef",
        },
        {
            id: 4,
            img: "/images/ch4.jpeg",
            name: "Munna Kathy",
            title:"Chef",
        }
        ,{
            id: 5,
            img: "/images/ch5.jpeg",
            name: "Tahmina Rumi",
            title:"Chef",
        },
        {
            id: 6,
            img: "/images/ch6.jpeg",
            name: "Bisnu devgon",
            title:"Chef",
        },
        {
            id: 7,
            img: "/images/ch7.jpeg",
            name: "Motin Molladsf",
            title:"Chef",
        },
        {
            id: 8,
            img: "/images/ch8.jpeg",
            name: "William Rumi",
            title:"Chef",
        },
        {
            id: 9,
            img: "/images/ch9.jpeg",
            name: "Kets william roy",
            title:"Chef",
        },
        {
            id: 10,
            img: "/images/ch10.jpeg",
            name: "Mahmud kholil",
            title:"Chef",
        },
        {
            id: 11,
            img: "/images/ch11.jpeg",
            name: "Ataur Rahman",
            title:"Chef",
        },
        {
            id: 12,
            img: "/images/ch12.jpeg",
            name: "Monalisa holly",
            title:"Chef",
        }
    ]
    return(
        <div className='md:max-w-[1920px] w-full'>
            <Common title='Our CHef' subtitle='Chef' />
            <div className='md:max-w-[1320px] px-8'>
                <div className='grid gap-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center justify-center items-center my-12'>
                    {chefData.map((item, index) =>(
                        <div key={index} className='w-full max-w-[312px] mx-auto p-4 bg-white shadow-lg rounde-lg'>
                            <Image src={item.img} alt={item.title} width={312} height={380} className='w-full'/>
                            <h2 className='text-center font-bold text-[20px] '>{item.name}</h2>
                            <p className='text-center font-[400] text-[14px]'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default page
