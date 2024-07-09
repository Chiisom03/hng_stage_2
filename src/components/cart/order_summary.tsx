// import Necklace from '../../assets/img/products/necklace.png';
import GalaxyRing from '../../assets/img/product_price/galaxy_ring.png';
import WhiteStone from '../../assets/img/products/bestsellers.png';
import Kateryna from '../../assets/img/product_price/kateryna.png';
import Arabian from '../../assets/img/products/arabian.png';
import Sofia from '../../assets/img/products/sofia_rings.png';
import Stones from '../../assets/img/products/classic_stone.png';
import Estelle from '../../assets/img/products/rings.png';
import Oyster from '../../assets/img/products/Oyster.png';
import SkyCrown from '../../assets/img/products/sky.png';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}


const OrderSummary = () => {
  const { id } = useParams();

  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();


  const products: Product[] = [
    {
      id: 1,
      name: 'WHITE STONE',
      price: 'N2,000,000',
      image: WhiteStone
    },
    {
      id: 2,
      name: 'Galaxy Ring',
      price: 'N1,000,000',
      image: GalaxyRing
    },
    {
      id: 3,
      name: 'Arabian Neckpieces',
      price: 'N500,000',
      image: Arabian
    },
    {
      id: 4,
      name: 'Sky Crown',
      price: 'N1,000,000',
      image: Kateryna
    },
    {
      id: 5,
      name: 'CROWN GOLD',
      price: 'N2,300,000',
      image: SkyCrown
    },
    {
      id: 6,
      name: 'SOFIA RINGS',
      price: 'N450,000',
      image: Sofia
    },
    {
      id: 7,
      name: 'MARQUEE NECKLACE',
      price: 'N1,000,000',
      image: Estelle
    },
    {
      id: 8,
      name: 'ESTEE CLASSIC STONE',
      price: 'N700,000',
      image: Stones
    },
    {
      id: 9,
      name: 'OYSTER DIAMOND SET',
      price: 'N1.500,000',
      image: Oyster
    },
  ]


  useEffect(() => {
    const foundProduct = products.find((product: Product) => product.id === parseInt((id ?? 1).toString()));
    setSelectedProduct(foundProduct);
  }, [id]);


  return (
    <div className='rounded-primary bg-primary pt-6  pb-[87px] px-[32px] w-[440px] h-[684px] mb-[136px] order-first lg:order-last'>
      <div className='flex gap-x-7 items-center mb-[22px]'>
        <h2 className='text-sm-text'>ORDER SUMMARY</h2>
        <p className='text-[#00000080]'>1 Item</p>
      </div>  

      <img src={selectedProduct?.image} alt="" className='h-[330px] w-[376px] mb-[18px]' />

      <div className='pb-8 border-b-[1px] border-t-orange flex gap-[67px] items-center justify-center mb-11'>
        <div className='flex gap-x-[17px] items-center justify-center'>
          <p className='text-sm-text'>{selectedProduct?.name}</p>
          <p className='text-[#00000080]'>1 x</p>
        </div>
        <p className='text-[20px]'>{selectedProduct?.price}</p>
      </div>

      <div className='flex items-center gap-x-[244px] mb-[18px]'>
        <p className='text-[22px]'>SHIPPING</p>
        <p className='text-[20px] text-[#00000080]'>Free</p>
      </div>
      <div className='flex justify-between mb-[18px]'>
        <p className='font-medium text-[22px]'>TOTAL</p>
        <p className='text-[20px] font-medium'>{selectedProduct?.price}</p>
      </div>

    </div>
  )
}

export default OrderSummary;