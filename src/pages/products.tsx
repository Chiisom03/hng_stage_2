
import GalaxyRing from '../assets/img/product_price/galaxy_ring.png';
import WhiteStone from '../assets/img/products/bestsellers.png';
import Kateryna from '../assets/img/product_price/kateryna.png';
import Arabian from '../assets/img/products/arabian.png';
import Sofia from '../assets/img/products/sofia_rings.png';
import Stones from '../assets/img/products/classic_stone.png';
import Estelle from '../assets/img/products/rings.png';
import Oyster from '../assets/img/products/Oyster.png';
import SkyCrown from '../assets/img/products/sky.png';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'WHITE STONE',
      price: 'N2,000,000',
      isLiked: false,
      image: WhiteStone
    },
    {
      id: 2,
      name: 'Galaxy Ring',
      price: 'N1,000,000',
      isLiked: false,
      image: GalaxyRing
    },
    {
      id: 3,
      name: 'Arabian Neckpieces',
      price: 'N500,000',
      isLiked: false,
      image: Arabian
    },
    {
      id: 4,
      name: 'Sky Crown',
      price: 'N1,000,000',
      isLiked: false,
      image: Kateryna
    },
    {
      id: 5,
      name: 'CROWN GOLD',
      price: 'N2,300,000',
      isLiked: false,
      image: SkyCrown
    },
    {
      id: 6,
      name: 'SOFIA RINGS',
      price: 'N450,000',
      isLiked: false,
      image: Sofia
    },
    {
      id: 7,
      name: 'MARQUEE NECKLACE',
      price: 'N1,000,000',
      isLiked: false,
      image: Estelle
    },
    {
      id: 8,
      name: 'ESTEE CLASSIC STONE',
      price: 'N700,000',
      isLiked: false,
      image: Stones
    },
    {
      id: 9,
      name: 'OYSTER DIAMOND SET',
      price: 'N1.500,000',
      isLiked: false,
      image: Oyster
    },
  ]
  return (
    <div className='mb-[176px]'>
      <div className="lg:max-w-[1182px] lg:mx-auto px-4">
        <p className="mt-8">SHOP  /  CATEGORY  /  <span className="text-[#00000080]">DIAMOND JEWELRY</span></p>

        <h2 className="uppercase lg:text-[63px] text-[54px] mt-7 mb-[108px]">Products</h2>
        <div className="flex justify-center items-center">
          <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-x-[29px] gap-x-2 gap-y-16 lg:gap-y-[42px]'>
            {products.map((product) => (
              <div key={product.id} >
                <div className="h-max w-max bg-gray-100 rounded-[10px]'">
                  <img src={product.image} alt={product.name} className='lg:w-[376px] lg:h-[416px] bg-cover w-[170px] h-[250px] rounded-[10px]' />
                </div>
                <div className='lg:ml-4 ml-2'>
                  <p className='lg:mt-[42px] mt-4 lg:text-[28px] text-xl uppercase'>{product.name}</p>
                  <div className='mt-3 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center'>
                    <p className='lg:text-[28px] text-lg'>{product.price}</p>
                    <a href={`/checkout/${product.id}`} className='uppercase lg:normal-case text-xl lg:text-[24px] bg-gray-100 rounded-primary px-2 lg:py-3 py-2'>Add to cart</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}

export default Products;