import Button from "./commons/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-black pt-[120px] h-[560px]">
      <div className="max-w-[1182px] mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          <div className="footer_link_container">
            <h1 className="footer_link_title">OUR SERVICES</h1>
            <ul className="footer_links">
              <li><a href="">PREMIUM SALES</a></li>
              <li><a href="">CLASSIC SALES</a></li>
              <li><a href="">PLATNIUM PURCHASE</a></li>
            </ul>
          </div>
          <div className="footer_link_container">
            <h1 className="footer_link_title">PRODUCTS</h1>
            <ul className="footer_links">
              <li>EARRINGS</li>
              <li>WRIST WATCHES</li>
              <li>BRACELETS</li>
              <li>RINGS</li>
            </ul>
          </div>
          <div className="footer_link_container">
            <h1 className="footer_link_title">POLICY</h1>
            <ul className="footer_links">
              <li>REFUNDS</li>
              <li>LEGAL</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="footer_link_container">
            <h1 className="footer_link_title">SIGN UP</h1>
            <ul className="footer_links">
              <li>Get the Latest Update and Offers</li>
              <li className="border-b border-b-t-orange w-full pb-5 pt-8 pl-4 mb-8 text-t-orange"><a href="/">Enter Email</a></li>
              <li>
                <Button btnText="subscribe" hasBorder />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;