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
      id: 3,
      name: "Wrist Watches",
      image: Watches
    }
  ];

  return (
    <div className='mt-[200px] max-w-[1146px] mx-auto mb-[120px] flex'>
      <div className="grid lg:grid-cols-2 gap-8 mr-[101px]">
        {products.map((product) => (
          <div key={product.id} className="h-max w-max bg-gray-100">
            <img src={product.image} alt={product.name} className='w-[376px] h-[416px] bg-cover' />
          </div>
        ))}
      </div>

      <div className='text-md-text uppercase'>
        {products.map((product) => (
          <div key={product.id} className="">
            <p>{product.name}</p>
          </div>
        ))}
        <p className='mb-[246px]'>More...</p>

        <Button btnText={'explore'} />
      </div>
    </div>
  )
}

export default ProductsShowcase