import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from './CustomButton'
export const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between  items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image src='/logo.svg' alt='Car-shop' className='object-contain' width={118} height={18} />
        </Link>
        <div className="flex items-center gap-2 ml-10 justify-end">
          <CustomButton title='Sign In' containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' btnType='button' />
          <CustomButton title='Sign Up' containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' btnType='button' />
        </div>
      </nav>
    </header>
  )
}
