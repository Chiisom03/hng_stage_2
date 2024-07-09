import SearchIcon from '../../assets/img/icons/search_icon.svg';
import CartIcon from '../../assets/img/icons/cart_icon.svg';
import HamIcon from '../../assets/img/icons/hamburger.svg';
import Close from '../../assets/img/icons/close.svg';
import Logo from '../../assets/img/logo.svg';
import Button from '../commons/button';
import { useState } from 'react';

const Navbar = () => {

    const navLinks = [
        {
            title: "Home",
            link: '/'
        },
        {
            title: "About",
            link: '/about'
        },
        {
            title: "Services",
            link: '/services'
        },
        {
            title: "Contact",
            link: '/contact'
        }
    ]

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="w-full lg:border-b border-white bg-primary relative">
            <div className="flex justify-between items-center py-[20px] max-w-[1182px] lg:mx-auto mx-4">
                <img src={Logo} alt="logo" className='h-5 w-[100px]' />
                <div className="flex gap-x-4 items-center">
                    <ul className={`lg:flex lg:relative absolute top-[72px] left-0 w-full flex-col lg:flex-row divide-y-2 divide-primary lg:divide-y-0 bg-[#FBFBFB] lg:bg-transparent ${showMenu ? 'block' : 'hidden'}`}>
                        <button className='lg:hidden absolute icons top-0 right-0' onClick={() => setShowMenu(!showMenu)}>
                            <img src={Close} alt="close" />
                        </button>

                        {navLinks.map((nav) => (
                            <li key={nav.title} className="mr-5 last:mr-[60px] text-md-text uppercase w-full">
                                <a href={nav.link}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>



                    <div className='flex justify-center items-center gap-x-5 lg:gap-x-[25px] lg:mr-8'>
                        <a href="/"><img src={SearchIcon} alt="Search Icon" className='icons' /></a>
                        <a href="/cart"> <img src={CartIcon} alt="Cart Icon" className='icons' /></a>
                        <button className='block lg:hidden h-10 w-10 ' onClick={() => setShowMenu(!showMenu)}>
                            <img src={HamIcon} alt="harmburger_menu" />
                        </button>
                    </div>



                    <div className='lg:block hidden'>
                        <Button btnText='sign in' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;