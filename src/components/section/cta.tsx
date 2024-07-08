import CtaImage from '../../assets/img/cta.png';
import Button from '../commons/button';


const CtaSection = () => {
  return (
    <section className=''>
      <div className='flex justify-center items-center max-w-[1182px] mx-auto'>
        <div className='h-[450px] w-full rounded-l-[10px] bg-turquoise pl-[116px] pr-[70px] pt-[114px] pb-[62px]'>
          <h2 className='text-[68px] max-w-[552px] leading-tight mb-9'>RE-IMAGINE CLASS WITH POISE</h2>
          <Button btnText='shop now' width='w-[255px]' />
        </div>

        <img src={CtaImage} alt='girl in fashion' className='w-[454px] h-[720px] shrink-0' />
      </div>
    </section>
  )
}

export default CtaSection;