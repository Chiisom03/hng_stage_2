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
            title: "Shop",
            link: '/products'
        },
        {
            title: "Collection",
            link: '/collection'
        },
        {
            title: "Contact Us",
            link: '/contact-us'
        }
    ]

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="w-full lg:border-b border-white bg-primary relative">
            <div className="flex bg-primary justify-between items-center py-[20px] lg:container lg:mx-auto mx-4 lg:px-5">

                <img src={Logo} alt="logo" className='h-5 w-[100px]' />

                <div className="flex gap-x-4 items-center">
                    <ul className={`lg:flex lg:relative lg:top-0 absolute top-[72px] left-0 h-screen lg:h-min w-full flex-col lg:flex-row bg-[#FBFBFB] lg:bg-transparent lg:px-0 px-4 ${showMenu ? 'block' : 'hidden'}`}>
                        {navLinks.map((nav) => (
                            <li key={nav.title} className="py-[19px] mr-5 border-b lg:border-none border-t-orange last:mr-0 text-md-text uppercase lg:w-max w-full">
                                <a href={nav.link}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>



                    <div className='flex justify-center items-center gap-x-5 lg:gap-x-[25px] lg:mr-8 z-50'>
                        <a className='icons' href="/"><img src={SearchIcon} alt="Search Icon" className='icons' /></a>
                        <a href="/cart" className='relative'>
                            <img src={CartIcon} alt="Cart Icon" className='icons' />
                            <span className={`absolute top-[2px] -right-1 text-red-500 text-xl`}>●</span>
                        </a>
                        <div className='lg:hidden'>
                            <button className={`${!showMenu ? 'block' : 'hidden'} icons`} onClick={() => setShowMenu(!showMenu)}>
                                <img src={HamIcon} alt="harmburger_menu" />
                            </button>
                            <button className={`${showMenu ? 'block' : 'hidden'} icons`} onClick={() => setShowMenu(!showMenu)}>
                                <img src={Close} alt="close" />
                            </button>
                        </div>
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