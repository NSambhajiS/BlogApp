import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open,setOpen]=useState(false);

  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <div className='flex items-center gap-4 text-2xl font-bold'>
            <img src="/logo.png" className='w-8 h-8' alt="logo img" />
            <span>DailyBlog</span>
        </div>
        {/* MOBILE MENUE */}
        <div className='md:hidden' >
            <div className='cursor-pointer text-4xl' onClick={()=>setOpen((prev)=>!prev)}>
                {open? "X":"="}
            </div>
            {/* MOBILE LINKED LIST */}
            <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-#e6e6ff transition-all ease-in-out ${open ? "-right-0":"-right-[100%]"}`}>
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <Link to="/login">
                <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
            </Link>
            </div>
        </div>
        {/* DESKTOP MENUE */}
        <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'> 
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>
            <SignedOut>
                <Link to="/login">
                    <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login 👋</button>
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar