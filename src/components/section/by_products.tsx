import ComeliaBracelets from '../../assets/img/product_price/comelia_bracelets.png'
import BohoEarings from '../../assets/img/product_price/boho_earings.png'
import GalaxyRing from '../../assets/img/product_price/galaxy_ring.png'
import Kateryna from '../../assets/img/product_price/kateryna.png'

const ByProducts = () => {

  const products = [
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
    <div className='lg:mb-[180px]'>
      <h1 className='max-w-[1182px] mx-auto text-lg-text uppercase mb-[68px]'>By Products</h1>

      <div className='flex mt-[68px] mb-[57px]'>
        {products.map((product => (
          <div key={product.name} className='flex flex-col'>
            <img src={product.image} alt="" className='w-[438px] h-[400px]' />
            <p className='text-4xl uppercase'>{product.name}</p>
            <p className='text-md-text'>{product.price}</p>
          </div>
        )))}
      </div>

    </div>
  )
}

export default ByProducts;