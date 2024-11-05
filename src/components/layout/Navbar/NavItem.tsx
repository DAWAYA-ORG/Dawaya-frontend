import Link from 'next/link';
import { motion } from 'framer-motion';
export default function NavItem({
  item,
  pathname,
}: {
  item: { name: string; path: string };
  pathname: string;
}) {
  return (
    <Link href={item.path} className='relative text-[#656565]'>
      {item.name}
      {pathname === item.path && (
        <motion.div
          className='absolute left-0 right-0 h-0.5 bg-blue-600 '
          layoutId='underline'
          initial={false}
        />
      )}
    </Link>
  );
}
