import CtaImage from '../../assets/img/cta.png';
import Bestsellers from '../../assets/img/products/bestsellers.png'
import Button from '../commons/button';


const CtaSection = () => {
  return (
    <>
      <section className='mb-[200px] lg:block hidden'>
        <div className='flex justify-center items-center max-w-[1182px] mx-auto'>
          <div className='h-[450px] w-full rounded-l-[10px] bg-turquoise pl-[116px] pr-[70px] pt-[114px] pb-[62px]'>
            <h2 className='text-[68px] max-w-[552px] leading-tight mb-9'>RE-IMAGINE CLASS WITH POISE</h2>
            <Button btnText='shop now' width='w-[255px]' />
          </div>

          <img src={CtaImage} alt='girl in fashion' className='w-[454px] h-[720px] shrink-0' />
        </div>
      </section>

      <CtaMobile />
    </>
  )
}

const CtaMobile = () => {
  return (
    <section className='mb-[200px] lg:hidden'>
      <div className='flex flex-col items-center max-w-[1182px] mx-auto'>
        <img src={Bestsellers} alt='necklace' className='w-[397px] h-[256px] shrink-0' />
        <h2 className='text-[28px] max-w-[552px] leading-tight mt-6 mb-[60px] self-start ml-4'>BEST SELLERS</h2>
        <Button btnText='explore' width='w-[255px]' />
      </div>
    </section>
  )
}

export default CtaSection;