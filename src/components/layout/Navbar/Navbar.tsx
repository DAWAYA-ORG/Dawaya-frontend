'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import NavItem from '@/components/layout/Navbar/NavItem';
import Logo from '@/public/images/Logo.svg';
import MobileNavigation from '@/components/layout/Navbar/MobileNavigation';
import { navItems } from '@/components/layout/Navbar/links';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='flex items-center justify-between  px-6 py-[10px] min-h-[80px]'>
      <Link href='/' className='flex items-center space-x-2'>
        <Image src={Logo} alt='DAWAYA Logo' width={53} height={54} />
        <span className='text-2xl font-bold tracking-[0.5rem] text-[#1A3493]'>
          AWAYA
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center space-x-8'>
        {navItems.map((item) => (
          <NavItem key={item.path} item={item} pathname={pathname} />
        ))}
      </div>

      <div className='hidden md:flex items-center space-x-4'>
        <Button variant='outline' className='text-blue-600 border-blue-600'>
          sign in
        </Button>
        <Button className='bg-blue-600 text-white hover:bg-blue-700'>
          sign up
        </Button>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation />
    </nav>
  );
}
