
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
        <nav className="flex justify-end items-center">
            <ul className="flex">
                {navLinks.map((nav) => (
                    <li key={nav.title} className="mr-5 last:mr-0 text-md-text">
                        <a href={nav.link}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;