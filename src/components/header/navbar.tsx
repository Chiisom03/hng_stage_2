import SearchIcon from '../../assets/img/icons/search_icon.svg';
import CartIcon from '../../assets/img/icons/cart_icon.svg';
import HamIcon from '../../assets/img/icons/hamburger.svg';
import Logo from '../../assets/img/logo.svg';
import Button from '../commons/button';

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

    return (
        <nav className="w-full border-b border-white bg-primary">
            <div className="flex justify-end py-[20px] max-w-[1182px] mx-auto">
                <div className="flex gap-x-4 items-center">
                    <ul className="flex flex-col lg:flex-row divide-y-2 divide-primary lg:divide-y-0 bg-[#FBFBFB] lg:bg-transparent hidden">
                        {navLinks.map((nav) => (
                            <li key={nav.title} className="mr-5 last:mr-[60px] text-md-text uppercase">
                                <a href={nav.link}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>



                    <div className='flex justify-center items-center gap-x-[25px] mr-8'>
                        <a href="/"><img src={SearchIcon} alt="Search Icon" width={50} height={50} className='icons' /></a>
                        <a href="/cart"> <img src={CartIcon} alt="Cart Icon" className='icons' /></a>
                    </div>

                    <div className='block lg:hidden h-10 w-10 '>
                        <img src={HamIcon} alt="harmburger_menu" />
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