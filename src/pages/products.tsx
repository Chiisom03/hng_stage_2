import { Item, useProduct } from '../core/useCases/useProducts';
import { useEffect } from 'react';

const Products = () => {

  const { products } = useProduct();
  useEffect(() => {
    console.log(products)
  } )

  return (
    <div className='mb-[176px]'>
      <div className="container lg:mx-auto px-4">
        <p className="mt-8">SHOP  /  CATEGORY  /  <span className="text-[#00000080]">DIAMOND JEWELRY</span></p>

        <h2 className="uppercase lg:text-[63px] text-[54px] mt-7 mb-[108px]">Products</h2>
        <div className="flex justify-center items-center">
          <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-x-[29px] gap-x-2 gap-y-16 lg:gap-y-[42px]'>
            {/* {products.map((product:Item) => (
              <div key={product.id} >
                <div className="h-max w-max bg-gray-100 rounded-[10px]'">
                  <img src={product.photos[0].url} alt={product.photos[0].filename} className='lg:w-[376px] lg:h-[416px] bg-cover w-[170px] h-[250px] rounded-[10px]' />
                </div>
                <div className='lg:ml-4 ml-2'>
                  <p className='lg:mt-[42px] mt-4 lg:text-[28px] text-xl uppercase'>{product.name}</p>
                  <div className='mt-3 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center'>
                    <p className='lg:text-[28px] text-lg'>{product.current_price[0].NGN}</p>
                    <a href={`/checkout/${product.id}`} className='uppercase lg:normal-case text-xl lg:text-[24px] bg-gray-100 rounded-primary px-2 lg:py-3 py-2'>Add to cart</a>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>


      </div>
    </div>
  );
}

export default Products;