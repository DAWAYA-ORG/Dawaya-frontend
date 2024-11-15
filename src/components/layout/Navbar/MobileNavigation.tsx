import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/components/layout/Navbar/links';
const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      {/* To Display Mobile Navigation */}
      <SheetTrigger asChild className='md:hidden'>
        <Button variant='ghost' size='icon'>
          <Menu className='h-6 w-6' />
        </Button>
      </SheetTrigger>

      <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
        <aside className='flex flex-col space-y-4 mt-8'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-lg ${
                pathname === item.path
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className='flex flex-col space-y-4 mt-4'>
            <Button
              variant='outline'
              className='text-blue-600 border-[#2642CF]'
            >
              sign in
            </Button>
            <Button className='bg-[#2642CF] text-white hover:bg-blue-700'>
              sign up
            </Button>
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
