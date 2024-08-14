import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='max-w-7xl px-5 z-50 mx-auto flex items-center flex-wrap md:justify-between justify-center md:space-y-0 space-y-3'>
            <Image
                src="/logo-black.svg"
                alt='logo'
                width={130}
                height={130}
                className='dark:hidden'
            />
            <Image
                src="/logo-white.svg"
                alt='logo'
                width={130}
                height={130}
                className='dark:block hidden'
            />
            <div className='flex items-center flex-wrap gap-2'>
                <Button variant={"link"}>
                    Privacy Policy
                </Button>
                <Button variant={"link"}>
                    Teams of Service 
                </Button>
            </div>
        </footer>
    )
}

export default Footer