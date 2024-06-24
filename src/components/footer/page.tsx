'use client';

import { useRouter } from 'next/navigation'
import PrimaryButton from "@/components/atoms/PrimaryButton"
import WhiteLogo from "@/assets/icons/WhiteLogo.png"
import Logos from "@/assets/icons/Logos.png"
import Google from "@/assets/icons/Google.png"
import Apple from "@/assets/icons/Apple.png"
import Image from "next/image";

export default function Footer() {
    const router = useRouter()

    return (
        <div>
            <div className="w-full h-[220px] lg:h-[90px] bg-[#262626] flex justify-center items-center gap-x-[15px] gap-y-[20px] flex-col lg:flex-row text-center">
                <div className="text-white text-[18px] leading-[29px] font-[400]">
                Get notified when we release a new challenge ->
                </div>
                <div className="relative">
                    <input type="text" id="floating_filled" className="rounded-[6px] block px-2.5 pb-[4px] pt-[14px] w-full text-[16px] text-black bg-white appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " />
                    <label for="floating_filled" className="cursor-text absolute text-[16px] text-black duration-300 transform -translate-y-4 scale-75 top-[10px] z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your email address</label>
                </div>
                <PrimaryButton className="bg-[#D7BE69] text-black h-[42px]">Submit</PrimaryButton>
            </div>
            <footer>
                <div className='w-full bg-black text-white'>
                    <div className='w-[90%] md:container justify-center mx-auto border-b-[1px] border-[#9DA1AC33] py-[35px]'>
                        <div className='flex justify-between flex-col lg:flex-row'>
                            <div className='flex lg:block justify-center lg:justify-start'>
                                <Image src={WhiteLogo} className='drop__shadow' />
                            </div>
                            <div className='flex w-[100%] my-[50px] lg:my-[0px] lg:w-[50%] justify-between lg:justify-around flex-col sm:flex-row text-center sm:text-left'>
                                <div className='flex flex-col gap-y-[12px] min-w-[120px]'>
                                    <div className='text-[18px] text-[#D7BE69] leading-[29px] cursor-pointer hover:text-[#CACACA]'>ABOUT</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>About Us</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>Our Causes</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>Blog</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>Media</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>Support Center</div>
                                    <div className='cursor-pointer mx-auto sm:mx-none'><Image src={Logos}/></div>
                                </div>
                                <div className='flex flex-col gap-y-[12px] mt-[35px] sm:mt-[0px] min-w-[120px]'>
                                    <div className='text-[18px] text-[#D7BE69] leading-[29px] cursor-pointer hover:text-[#CACACA]'>THE CONQUEROR OFFERINGS</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>Corporate Wellness</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>My Virtual Mission</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>Virtual Challenges</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>Virtual Walking</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>Virtual Race</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>Virtual Running</div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between max-w-[300px] mx-auto sm:mx-0 text-center sm:text-left'>
                                <div className=''>
                                    <div className='text-[18px] text-[#D7BE69] leading-[29px] cursor-pointer hover:text-[#CACACA] mb-[10px]'>PRIVACY NOTICE</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>To read our privacy notice including our GDPR policy, please click here.</div>
                                </div>
                                <div className=''>
                                    <div className='text-[18px] text-[#D7BE69] leading-[29px] cursor-pointer hover:text-[#CACACA] mb-[10px]'>TERMS OF SERVICE</div>
                                    <div className='text-[14px] text-white leading-[23px] cursor-pointer hover:text-[#CACACA]'>To read our terms of service click here</div>
                                </div>
                                <div className=''>
                                    <div className='text-[18px] text-[#D7BE69] leading-[29px] cursor-pointer hover:text-[#CACACA] mb-[10px]'>DOWNLOAD THE APP</div>
                                    <div className='flex justify-between'>
                                        <Image src={Google} className='cursor-pointer'/>
                                        <Image src={Apple} className='cursor-pointer'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-[25px] text-center'>
                        <div className='text-[14px] leading-[23px] text-white mb-[15px]'>© ACTIONARY LIMITED ALL RIGHTS RESERVED</div>
                        <div className='text-[12px] leading-[16px] text-[#616161]'>THE CONQUEROR and VIRTUAL CHALLENGES are a Trademark of Actionary. THE CONQUEROR Trademark is registered in the US, UK, AU and EU. 
                        VIRTUAL CHALLENGES Trademark is registered in the EU.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
