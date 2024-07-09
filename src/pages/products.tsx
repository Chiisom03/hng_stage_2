
import GalaxyRing from '../assets/img/product_price/galaxy_ring.png';
import WhiteStone from '../assets/img/products/bestsellers.png';
import Kateryna from '../assets/img/product_price/kateryna.png';
import Arabian from '../assets/img/products/arabian.png';
import Sofia from '../assets/img/products/sofia_rings.png';
import Stones from '../assets/img/products/classic_stone.png';
import Estelle from '../assets/img/products/rings.png';
import Oyster from '../assets/img/products/Oyster.png';
import SkyCrown from '../assets/img/products/sky.png';

const Products = () => {

  const products = [
    {
      name: 'WHITE STONE',
      price: 'N2,000,000',
      isLiked: false,
      image: WhiteStone
    },
    {
      name: 'Galaxy Ring',
      price: 'N1,000,000',
      isLiked: false,
      image: GalaxyRing
    },
    {
      name: 'Arabian Neckpieces',
      price: 'N500,000',
      isLiked: false,
      image: Arabian
    },
    {
      name: 'Sky Crown',
      price: 'N1,000,000',
      isLiked: false,
      image: Kateryna
    },
    {
      name: 'CROWN GOLD',
      price: 'N2,300,000',
      isLiked: false,
      image: SkyCrown
    },
    {
      name: 'SOFIA RINGS',
      price: 'N450,000',
      isLiked: false,
      image: Sofia
    },
    {
      name: 'MARQUEE NECKLACE',
      price: 'N1,000,000',
      isLiked: false,
      image: Estelle
    },
    {
      name: 'ESTEE CLASSIC STONE',
      price: 'N700,000',
      isLiked: false,
      image: Stones
    },
    {
      name: 'OYSTER DIAMOND SET',
      price: 'N1.500,000',
      isLiked: false,
      image: Oyster
    },
  ]
  return (
    <div className='mb-[176px]'>
      <div className="lg:max-w-[1182px] lg:mx-auto mx-4">
        <p className="mt-8">SHOP  /  CATEGORY  /  <span className="text-[#00000080]">DIAMOND JEWELRY</span></p>

        <h2 className="uppercase text-[63px] mt-7 mb-[108px]">Products</h2>

        <div className='grid lg:grid-cols-3 grid-cols-2 gap-x-[29px] gap-y-2 lg:gap-y-[42px]'>
          {products.map((product) => (
            <div key={product.name} >
              <div className="h-max w-max bg-gray-100 rounded-[10px]'">
                <img src={product.image} alt={product.name} className='lg:w-[376px] lg:h-[416px] bg-cover w-[190px] h-[280px] rounded-[10px]' />
              </div>
              <div className='lg:ml-4 ml-2'>
                <p className='lg:mt-[42px] mt-4 text-[28px]'>{product.name}</p>
                <div className='mt-3 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center'>
                  <p className='text-[28px]'>{product.price}</p>
                  <button className='text-xl lg:text-[24px] bg-gray-100 rounded-primary px-2 py-3'>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Products;