import React from 'react'
import Image from 'next/image'
interface Data{
    id:number;
    img:string;
    title:string;
    date:string;
}
const Footer = () => {
    const data:Data[] = [
        {
            id: 1,
            img:"/images/1.png",
            title: "Is fastfood good for your body?",
            date:"February 28,2022",
        },
        {
            id: 2,
            img:"/images/1.png",
            title: "Change your food habit With organic food",
            date:"February 28,2022",
        },
        {
            id: 3,
            img:"/images/1.png",
            title: "Do you like fastfood for your life?",
            date:"February 28,2022",
        }
    ]
    return(
        <div className='md:max-w-[1920px] h-[720px] bg-[#000000]'>
            <div className='md:max-w-[1169px] pt-4 justify-between flex flex-col md:flex-row h-[112px] border-b-2 border-[#FF9F0D] ml-11'>
                <div className='space-y-3 w-1/2'>
                    <h2 className='font-bold text-[32px] text-white'><span className='font-bold text-[32px] text-[#FF9F0D]'>St</span>ill You Need Our Support ?</h2>
                <p className='text-white text-[16px] font-[400]'>Don't wait make a start & logical quote here. Its pretty easy.</p>
                </div>
                    <span className='w-[459px] mt-6 flex gap h-[55px]'><input type="text" placeholder="Enter Your Email" className='text-[#FFFFFF] bg-[#FF9F0D] w-[304px] rounded-sm p-4' /><button className='w-[163px] text-[#FF9F0D] bg-white p-4 rounded-msm'>Subscribe Now</button></span>
                    
            </div>     
            <div className='md:max-w-[1320px] mt-12 h-[331px] flex flex-col md:flex-row justify-evenly'>
                <div className='w-[396px] h-[262px] space-y-6'>
                <h2 className='w-[106px] h-[28px] text-[#ffffff] font-bold'>About Us.</h2>
                <p className='w-[396px] h-[104px] text-[18px] text-[#ffffff] font-[400]'>orporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.</p>
                <div className='w-[264px] h-[74px] gap-3 flex flex-wrap'>
                    <button className='w-[78px] h-[71px] rounded-[6px] bg-[#FF9F0D] p-4 text-[#ffffff]'><Image src="/images/icon.png" alt="icon" width={40} height={40} /></button>
                    <p className='w-[149px] h[26px] text-[18px] font-[400] text-[#ffffff]'>
                        Opening Hours <br />
                        <span className='w-[205px] h-[22px] text-[14px] font-[400]'>Mon - Sat(8.00 - 6.00) <br />
                        Sunday - Closed</span>
                    </p>
                </div>
                </div>
                <div>
                    <ul className='w-[121px] h-[276px] space-y-4'>
                        <li className='text-[20px] font-[700] text-[#ffffff] '>Useful Links</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>About</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>News</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>Patners</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>Team</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>Menu</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>Contact</li>
                    </ul>       
                </div>
                <div>
                <ul className='w-[157px] h-[276px] space-y-4'>
                        <li className='text-[20px] font-[700] text-[#ffffff] '>Help?</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>FAQ</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>Term and Conditions</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>Reporting</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>Documentation</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>Support Policy</li>
                        <li className='text-[16px] font-[400] text-[#ffffff] '>Privacy</li>
                    </ul>
                </div>
                <div className='w-[274px] h-[371px] space-y-6'>
                    <h2 className='font-bold text-[20px] text-[#ffffff]'>Recent Post</h2>
                    {data.map((item) => (
                        <div className='w-[274px] h-[80px] flex flex-col md:flex-row gap-3' key={item.id}>
                            <Image src={item.img} alt={item.title} width={380} height={380}  className='w-[80px] h-[80px]'/>
                            <div>
                                <h2 className='text-[16px] mb-2 text-[400] text-[#ffffff]'>{item.title}</h2>
                                <p className='text-[14px] mb-2 opacity-[49%] text-[400] text-[#ffffff]'>{item.date}</p>
                            </div>
                        </div>

                    ))}
                </div>
         </div>   
        </div>
    )
}
export default Footer

