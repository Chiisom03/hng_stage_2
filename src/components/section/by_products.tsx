import ComeliaBracelets from '../../assets/img/product_price/comelia_bracelets.png'
import BohoEarings from '../../assets/img/product_price/boho_earings.png'
import GalaxyRing from '../../assets/img/product_price/galaxy_ring.png'
import Kateryna from '../../assets/img/product_price/kateryna.png'

import HeartIcon from '../../assets/img/icons/heart_icon.svg'

const ByProducts = () => {


  return (
    <>
      <MobileByProduct />
      <DesktopByProduct />
    </>
  )
}

const MobileByProduct = () => {
  const mobileProducts = [
    {
      name: 'COMELIA BRACLETS',
      price: 'N2,300,000',
      isLiked: false,
      image: ComeliaBracelets
    },
    {
      name: 'Boho Earings',
      price: 'N800,000',
      isLiked: false,
      image: BohoEarings
    },
    {
      name: 'Galaxy Ring',
      price: 'N1,000,000',
      isLiked: false,
      image: GalaxyRing
    },
    {
      name: 'Kateryna',
      price: 'N1,000,000',
      isLiked: false,
      image: Kateryna
    },
    {
      name: 'COMELIA BRACLETS',
      price: 'N2,300,000',
      isLiked: false,
      image: ComeliaBracelets
    },
    {
      name: 'Boho Earings',
      price: 'N800,000',
      isLiked: false,
      image: BohoEarings
    },
    {
      name: 'Galaxy Ring',
      price: 'N1,000,000',
      isLiked: false,
      image: GalaxyRing
    },
    {
      name: 'Kateryna',
      price: 'N1,000,000',
      isLiked: false,
      image: Kateryna
    },
  ]
  return (
    <div className='lg:hidden block lg:mb-[180px] mx-auto max-w-[1512px]'>
      <h1 className='mx-4 uppercase mb-[68px] text-[54px]'>ARRIVALS</h1>

      <div className="w-full mt-[68px] mb-[57px] overflow-x-scroll">
        <div className='flex w-max h-max pb-8'>
          {mobileProducts.map((product => (
            <div key={product.name} className='flex flex-col mr-[18px] first:ml-4'>
              <img src={product.image} alt="" className='w-[293px] h-[256px] rounded-primary' />
              <div className='flex items-start justify-between mt-[24px]'>
                <div>
                  <p className='text-[26px] uppercase'>{product.name}</p>
                  <p className='text-[22px] font-semibold'>{product.price}</p>
                </div>
                <div className='rounded-full py-[8px] pl-[8px] pr-[12px] bg-gray-100'>
                  <img src={HeartIcon} alt="heart_icon" className='w-[42.86px] h-[42.86px]' />
                </div>
              </div>
            </div>
          )))}
        </div>
      </div>

    </div>
  )
}
const DesktopByProduct = () => {

  const desktopProducts = [
    {
      name: 'COMELIA BRACLETS',
      price: 'N2,300,000',
      isLiked: false,
      image: ComeliaBracelets
    },
    {
      name: 'Boho Earings',
      price: 'N800,000',
      isLiked: false,
      image: BohoEarings
    },
    {
      name: 'Galaxy Ring',
      price: 'N1,000,000',
      isLiked: false,
      image: GalaxyRing
    },
    {
      name: 'Kateryna',
      price: 'N1,000,000',
      isLiked: false,
      image: Kateryna
    },
    {
      name: 'COMELIA BRACLETS',
      price: 'N2,300,000',
      isLiked: false,
      image: ComeliaBracelets
    },
    {
      name: 'Boho Earings',
      price: 'N800,000',
      isLiked: false,
      image: BohoEarings
    },
    {
      name: 'Galaxy Ring',
      price: 'N1,000,000',
      isLiked: false,
      image: GalaxyRing
    },
    {
      name: 'Kateryna',
      price: 'N1,000,000',
      isLiked: false,
      image: Kateryna
    },
  ]
  return (
    <div className='hidden lg:block lg:mb-[180px] mx-auto max-w-[1512px]'>
      <h1 className='lg:block hidden max-w-[1182px] mx-auto text-lg-text uppercase mb-[68px]'>By Products</h1>
      <h1 className='lg:hidden block max-w-[1182px] lg:mx-auto mx-4 uppercase mb-[68px] text-[54px]'>ARRIVALS</h1>

      <div className="w-full mt-[68px] mb-[57px] overflow-x-scroll">
        <div className='flex w-max h-max pb-8'>
          {desktopProducts.map((product => (
            <div key={product.name} className='flex flex-col'>
              <img src={product.image} alt="" className='w-[438px] h-[400px]' />
              <div className='flex items-start justify-between mt-[42px] ml-8'>
                <div>
                  <p className='text-4xl uppercase'>{product.name}</p>
                  <p className='text-md-text'>{product.price}</p>
                </div>
                <div className='rounded-full py-[8px] pl-[8px] pr-[12px] bg-gray-100'>
                  <img src={HeartIcon} alt="heart_icon" className='w-[50px] h-[50px]' />
                </div>
              </div>
            </div>
          )))}
        </div>
      </div>

    </div>
  )
}

export default ByProducts;