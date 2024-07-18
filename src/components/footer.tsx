import { useState } from "react";
import Button from "./commons/button";
import FacebookIcon from '../assets/img/icons/ic_outline-facebook.svg';
import InstagramIcon from '../assets/img/icons/ic_outline-instagram.svg';

const Footer = () => {
  const [subscriptionEmail, setSubscriptionEmail] = useState('');

  return (
    <footer className="bg-primary text-black pt-[120px] h-auto lg:h-[560px]">
      <div className="container mx-auto flex flex-col items-center justify-center lg:px-[160px] w-full px-4">
        <div className="flex flex-col lg:flex-row items-start justify-center w-full">

          <div className="footer_link_container mr-[74px] mb-[56px] lg:mb-0 items-center justify-center lg:items-start lg:justify-start w-full lg:w-auto">
            <div className="flex gap-x-[30px] items-center justify-center lg:justify-start">
              <img src={FacebookIcon} alt="facebook icon" className="w-[50px]" />
              <img src={InstagramIcon} alt="instagram icon" className="w-[50px]" />
            </div>
          </div>

          <div className="lg:flex grid grid-cols-2 gap-x-4 gap-y-[31px] lg:gap-y-0 items-start lg:justify-center justify-between w-full">
            <div className="footer_link_container lg:mr-[29px] mr-0">
              <h1 className="footer_link_title">OUR SERVICES</h1>
              <ul className="footer_links">
                <li><a href="/products">PREMIUM SALES</a></li>
                <li><a href="/products">CLASSIC SALES</a></li>
                <li><a href="/products">PLATINUM PURCHASE</a></li>
              </ul>
            </div>

            <div className="footer_link_container lg:mr-[33px] mr-0 lg:ml-0 ml-6 mt-[31px] lg:mt-0">
              <h1 className="footer_link_title">PRODUCTS</h1>
              <ul className="footer_links">
                <li><a href="/">EARRINGS</a></li>
                <li><a href="/">WRIST WATCHES</a></li>
                <li><a href="/">BRACELETS</a></li>
                <li><a href="/">RINGS</a></li>
              </ul>
            </div>

            <div className="footer_link_container lg:mr-[159px] mr-0">
              <h1 className="footer_link_title">POLICY</h1>
              <ul className="footer_links">
                <li><a href="/">REFUNDS</a></li>
                <li><a href="/">LEGAL</a></li>
                <li><a href="/">ABOUT US</a></li>
                <li><a href="/">CONTACT US</a></li>
              </ul>
            </div>
          </div>

          <div className="footer_link_container order-first lg:order-last w-full lg:w-auto">
            <h1 className="footer_link_title">SIGN UP</h1>
            <form className="text-sm-text mt-6 w-full">
              <p>Get the Latest Update and Offers</p>
              <input
                className="bg-transparent border-b border-b-t-orange pb-5 pt-8 pl-4 mb-8 placeholder:text-t-orange outline-none lg:w-[308px] w-full"
                type="text"
                value={subscriptionEmail}
                placeholder="Enter Email"
                onChange={(e) => setSubscriptionEmail(e.target.value)}
              />
              <div className="mb-[64px] lg:mb-0">
                <Button btnText="subscribe" hasBorder type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
