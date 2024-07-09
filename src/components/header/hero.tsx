import Button from "../commons/button"
import HeroImage from "../../assets/img/hero_image.png"
import MobileHeroImage from "../../assets/img/mobile_hero_img.png"

const Hero = () => {
  return (
    <>
      <DesktopHero />
      <MobileHero />
    </>
  )
}
const MobileHero = () => {
  return (
    <div className="lg:hidden bg-primary w-full h-max">
      <div className="mx-auto w-full flex flex-col lg:flex-row justify-center items-center">

        <div className="mb-[px] flex flex-col justify-center items-center">
          <h1 className="text-[60px] leading-normal font-semibold text-black mt-[51px] w-[387px]">
            STRIDE DOWN YOUR MUSE
          </h1>

          {/* <img src={MobileHeroImage} alt="hero_image" className="block lg:hidden w-[396px] h-[448px]" /> */}

          <p className="text-[22px] text-black max-w-[416px] mb-[34px]">
            GET ALL EXQUISITE AND LUXERY JEWELRY TO YOUR CONFIDENCE GOING
          </p>

          <Button btnText="shop now" width="w-[212px]" />

        </div>

      </div>
    </div>
  )
}
const DesktopHero = () => {
  return (
    <div className="lg:flex hidden bg-primary w-full flex-col justify-center items-center h-[500px]">
      <div className="max-w-[1182px] mx-auto w-full flex flex-col lg:flex-row justify-center items-center space-x-[83px]">

        <div className="flex flex-col justify-between mb-[89px]">
          <h1 className="text-[92px] font-bold text-black mt-[51px] mb-[79px]">THE NEW RETRO</h1>

          <div>
            <p className="hidden lg:block text-sm-text text-black max-w-[416px] mb-[34px]">GET ALL EXQUISITE AND LUXERY JEWELRY TO YOUR CONFIDENCE GOING</p>
            <Button btnText="shop now" width="lg:w-[255px]" />
          </div>
        </div>

        <img src={HeroImage} alt="hero_image" className="hidden lg:block lg:w-[465px] lg:h-[500px]" />
        <img src={MobileHeroImage} alt="hero_image" className="block lg:hidden w-[396px] h-[] lg:w-[465px] lg:h-[500px]" />
      </div>
    </div>
  )
}

export default Hero