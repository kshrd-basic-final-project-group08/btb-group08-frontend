import React from 'react'
import { LoginForm } from '../components/Login';
import Image from 'next/image';
import { HeaderLayout } from '../components/Header';


export default function LoginPage() {
    return (
        <div className="relative w-full min-h-screen p-6 flex items-center justify-between">
            <HeaderLayout />
            <LoginForm />
            <div className="absolute bottom-0 left-0">
                <Image src="/auth/Apsara.svg" className="object-cover w-[20rem]" width={680} height={680} alt="Apsara" />
            </div>
            <div className="absolute bottom-0 right-0 w-fit h-fit">
                <Image src="/auth/Angkor.svg" className="object-cover ml-auto w-4/5 h-auto" width={813} height={462} alt="Angkor" />
            </div>
            <div className="absolute top-1/6 -left-12 w-fit h-fit">
                <Image src="/auth/romdol.svg" className="object-cover" width={160} height={160} alt="Romdom" />
            </div>
            <div className="absolute top-1/7 right-5 w-fit h-fit">
                <Image src="/auth/romdol.svg" className="object-cover rotate-10" width={140} height={140} alt="Romdom" />
            </div>
            <div className="absolute top-4/7 right-1/7 w-fit h-fit">
                <Image src="/auth/romdol.svg" className="object-cover rotate-10" width={140} height={140} alt="Romdom" />
            </div>
        </div>
    );
}
