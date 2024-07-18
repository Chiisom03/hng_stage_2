import Button from "../commons/button"
import HeroImage from "../../assets/img/hero_image.png"
import MobileHeroImage from "../../assets/img/mobile_hero_img.png"
import { useNavigate } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <DesktopHero />
      <MobileHero />
    </>
  )
}
const MobileHero = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:hidden bg-primary h-max flex flex-col justify-center items-center w-full px-4 mb-[px]">

      <h1 className="text-[60px] leading-[72.9px] font-semibold text-black mb-4 ">
        STRIDE DOWN<br /> YOUR MUSE
      </h1>

      <img src={MobileHeroImage} alt="hero_image" className="w-[396px] h-[448px]" />

      <p className="text-[22px] text-black mb-[43px] mt-[60px]">GET ALL EXQUISITE AND LUXERY JEWELRY<br />TO YOUR CONFIDENCE GOING</p>

      <Button onClick={() => { navigate(`/products`) }} btnText="shop now" width="w-[212px]" />

    </div>
  )
}
const DesktopHero = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:flex hidden bg-primary w-full flex-col justify-center items-center h-[424px]">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-5 xl:px-20">
        <div className="flex flex-col justify-between">
          <h1 className="lg:text-[80px] font-bold text-black mt-[10px] mb-[60px] w-max">THE NEW RETRO</h1>
          <div>
            <p className="text-sm-text text-black max-w-[416px] mb-[34px]">GET ALL EXQUISITE AND LUXURY JEWELRY TO KEEP YOUR CONFIDENCE GOING</p>
            <Button onClick={() => { navigate(`/products`) }} btnText="shop now" width="w-[255px] h-[72px]" />
          </div>
        </div>
        <img src={HeroImage} alt="hero_image" className="lg:w-[395px] lg:h-[424px]" />
      </div>
    </div>
  )
}



export default Hero