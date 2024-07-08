import { useState } from "react";
import Button from "./commons/button";
import FacebookIcon from '../assets/img/icons/ic_outline-facebook.svg'
import InstagramIcon from '../assets/img/icons/ic_outline-instagram.svg'


const Footer = () => {

  const [subscriptionEmail, setSubscriptionEmail] = useState('');
  return (
    <footer className="bg-primary text-black pt-[120px] h-[560px]">
      <div className="max-w-[1182px] mx-auto flex flex-col items-center justify-center px-[160px]">
        <div className="flex flex-col md:flex-row items-start justify-center w-full">

          <div className="footer_link_container mr-[74px]">
            <div className="flex gap-x-[30px] items-center justify-center">
              <img src={FacebookIcon} alt="facebook icon" className="w-[50px]" />
              <img src={InstagramIcon} alt="instagram icon" className="w-[50px]" />
            </div>
          </div>

          <div className="footer_link_container mr-[29px]">
            <h1 className="footer_link_title">OUR SERVICES</h1>
            <ul className="footer_links">
              <li><a href="">PREMIUM SALES</a></li>
              <li><a href="">CLASSIC SALES</a></li>
              <li><a href="">PLATNIUM PURCHASE</a></li>
            </ul>
          </div>

          <div className="footer_link_container mr-[33px]">
            <h1 className="footer_link_title">PRODUCTS</h1>
            <ul className="footer_links">
              <li><a href="/">EARRINGS</a></li>
              <li><a href="/">WRIST WATCHES</a></li>
              <li><a href="/">BRACELETS</a></li>
              <li><a href="/">RINGS</a></li>
            </ul>
          </div>

          <div className="footer_link_container mr-[159px]">
            <h1 className="footer_link_title">POLICY</h1>
            <ul className="footer_links">
              <li><a href="">REFUNDS</a></li>
              <li><a href="">LEGAL</a></li>
              <li><a href="">ABOUT US</a></li>
              <li><a href="">CONTACT US</a></li>
            </ul>
          </div>
          <div className="footer_link_container">
            <h1 className="footer_link_title">SIGN UP</h1>
            <form className="text-sm-text mt-6">
              <p>Get the Latest Update and Offers</p>

              <input className='bg-transparent border-b border-b-t-orange pb-5 pt-8 pl-4 mb-8 placeholder:text-t-orange outline-none w-[308px]'
                type="text"
                value={subscriptionEmail}
                placeholder="Enter Email"
                onChange={(e) => setSubscriptionEmail(e.target.value)} />

              <Button btnText="subscribe" hasBorder type="submit" />

            </form>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer;