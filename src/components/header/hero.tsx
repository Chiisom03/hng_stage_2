import Button from "../commons/button"
import HeroImage from "../../assets/img/hero_image.png"

const Hero = () => {
  return (
    <div className="bg-primary w-full flex flex-col justify-center items-center h-[500px]">
      <div className="lg:max-w-[1182px] mx-auto w-full flex justify-center items-center space-x-[83px]">
        <div className="flex flex-col justify-between mb-[89px]">
          <h1 className="lg:text-[92px] font-bold text-black mt-[51px] mb-[79px]">THE NEW RETRO</h1>
          <div>
            <p className="text-sm-text text-black max-w-[416px] mb-[34px]">GET ALL EXQUISITE AND LUXERY JEWELRY TO YOUR CONFIDENCE GOING</p>
            <Button btnText="shop now" width="lg:w-[255px]" />
          </div>
        </div>

        <img src={HeroImage} alt="hero_image" className="lg:w-[465px] lg:h-[500px]" />
      </div>
    </div>
  )
}

export default Hero