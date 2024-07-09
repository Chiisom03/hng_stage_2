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

      <Button onClick={()=>{navigate(`/products`)}} btnText="shop now" width="w-[212px]" />

    </div>
  )
}
const DesktopHero = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:flex hidden bg-primary w-full flex-col justify-center items-center h-[500px] max-w-screen">
      <div className="max-w-[1182px] px-auto w-full flex flex-col lg:flex-row justify-center items-center space-x-[83px]">

        <div className="flex flex-col justify-between mb-[89px]">
          <h1 className="text-[96px] font-bold text-black mt-[51px] mb-[79px] w-max">THE NEW RETRO</h1>

          <div>
            <p className="text-sm-text text-black max-w-[416px] mb-[34px]">GET ALL EXQUISITE AND LUXERY JEWELRY TO YOUR CONFIDENCE GOING</p>
            <Button onClick={()=>{navigate(`/products`)}} btnText="shop now" width="w-[255px] h-[72px]" />
          </div>
        </div>

        <img src={HeroImage} alt="hero_image" className="lg:w-[465px] lg:h-[500px]" />
      </div>
    </div>
  )
}

export default Hero