import Necklace from '../../assets/img/products/necklace.png';
import Earings from '../../assets/img/products/earings.png';
import Rings from '../../assets/img/products/rings.png';
import Watches from '../../assets/img/products/watches.png';
import Button from '../commons/button';


const ProductsShowcase = () => {

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
    <div className='mt-[200px] container lg:mx-auto mb-[120px] px-4 lg:px-5 xl:px-20'>
      <h1 className='lg:hidden block text-[54px] uppercase mb-[46px]'>By Products</h1>

      <div className='lg:mt-[200px] flex justify-center items-center'>
        <div className="grid grid-cols-2 lg:gap-x-8 lg:gap-y-8 gap-x-4 gap-y-[86px] lg:mr-[101px]">
          {products.map((product) => (
            <a href={`/checkout/${product.id}`} key={product.id} >
              <div className="h-max w-max bg-gray-100 lg:rounded-none rounded-primary'">
                <img src={product.image} alt={product.name}
                  className='lg:w-[376px] lg:h-[416px] bg-cover w-[150px] h-[250px] lg:rounded-none rounded-[10px]' />
              </div>
              <p className='mt-6 lg:hidden text-[28px]'>{product.name}</p>
            </a>

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