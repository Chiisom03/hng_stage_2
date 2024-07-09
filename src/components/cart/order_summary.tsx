import Necklace from '../../assets/img/products/necklace.png';


const OrderSummary =()=>{
  return(
    <div className='rounded-primary bg-primary pt-6 pb-[87px] px-[32px] w-[440px] h-[684px] mb-[136px]'>
          <div className='flex gap-x-7 items-center mb-[22px]'>
            <h2 className='text-sm-text'>ORDER SUMMARY</h2>
            <p className='text-[#00000080]'>1 Item</p>
          </div>

          <img src={Necklace} alt="" className='h-[330px] w-[376px] mb-[18px]' />

          <div className='pb-8 border-b-[1px] border-t-orange flex gap-[67px] items-center justify-center mb-11'>
            <div className='flex gap-x-[17px] items-center justify-center'>
              <p className='text-sm-text'>GALAXY EARRINGS</p>
              <p className='text-[#00000080]'>1 x</p>
            </div>
            <p className='text-[20px]'>N950,000</p>
          </div>

          <div className='flex items-center gap-x-[244px] mb-[18px]'>
            <p className='text-[22px]'>SHIPPING</p>
            <p className='text-[20px] text-[#00000080]'>Free</p>
          </div>
          <div className='flex justify-between mb-[18px]'>
            <p className='font-medium text-[22px]'>TOTAL</p>
            <p className='text-[20px] font-medium'>N950,000</p>
          </div>

        </div>
  )
}

export default OrderSummary;