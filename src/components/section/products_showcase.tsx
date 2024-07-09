import Necklace from '../../assets/img/products/necklace.png';
import Earings from '../../assets/img/products/earings.png';
import Rings from '../../assets/img/products/rings.png';
import Watches from '../../assets/img/products/watches.png';
import Button from '../commons/button';
import { useNavigate } from 'react-router-dom';


const ProductsShowcase = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Necklace",
      image: Necklace
    },
    {
      id: 2,
      name: "Earings",
      image: Earings
    },
    {
      id: 3,
      name: "Rings",
      image: Rings
    },
    {
      id: 4,
      name: "Wrist Watches",
      image: Watches
    }
  ];

  return (
    <div className='mt-[200px] max-w-[1146px] lg:mx-auto mb-[120px] mx-4'>
      <h1 className='lg:hidden block max-w-[1182px] mx-auto text-lg-text uppercase mb-[46px]'>By Products</h1>

      <div className='lg:mt-[200px] flex'>
        <div className="grid grid-cols-2 lg:gap-8 gap-4 lg:mr-[101px]">
          {products.map((product) => (
            <div onClick={()=>{navigate(`/checkout/${product.id}`)}} key={product.id} >
              <div className="h-max w-max bg-gray-100 lg:rounded-none rounded-[10px]'">
                <img src={product.image} alt={product.name} className='lg:w-[376px] lg:h-[416px] bg-cover w-[190px] h-[280px] lg:rounded-none rounded-[10px]' />
              </div>
              <p className='mt-6 lg:hidden text-[28px]'>{product.name}</p>
            </div>

          ))}
        </div>

        <div className='hidden lg:block text-md-text uppercase'>
          {products.map((product) => (
            <div key={product.id} className="">
              <p>{product.name}</p>
            </div>
          ))}
          <p className='mb-[246px]'>More...</p>

          <Button btnText={'explore'} />
        </div>
      </div>
    </div>
  )
}

export default ProductsShowcase