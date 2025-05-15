import { SwitchLanguage } from '@/components/feature/website/button/SwitchLanguage'
import Image from 'next/image'
import React from 'react'

export const HeaderLayout = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-10">
            <div className="px-5 pt-2 flex w-full justify-between items-center">
                <Image src="/logo.png" className="h-[80px] w-[80px] object-cover" width={80} height={80} alt="Logo" />
                <SwitchLanguage />
            </div>
        </div>
    )
}
