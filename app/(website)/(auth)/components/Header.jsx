'use client'

import React from 'react'
import Image from 'next/image'
import { SwitchLanguage } from '@/components/feature/website/button/SwitchLanguage'

export const HeaderLayout = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-10">
            <div className="px-5 pt-2 flex w-full justify-between items-center">
                <Image src="/logo.png" width={79} height={92} alt="Logo" />
                <SwitchLanguage />
            </div>
        </div>
    )
}
