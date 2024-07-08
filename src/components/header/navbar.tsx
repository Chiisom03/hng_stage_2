import SearchIcon from '../../assets/img/icons/search_icon.svg';
import CartIcon from '../../assets/img/icons/cart_icon.svg';
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
                    <ul className="flex">
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

                    <Button btnText='sign in' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;