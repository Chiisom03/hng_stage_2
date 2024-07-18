import BillingCardForm from '../components/cart/billingcard_form';
import OrderSummary from '../components/cart/order_summary';
import BackArrowIcon from '../assets/img/icons/bx_arrow-back.svg';
import { useNavigate } from 'react-router-dom';


const CheckOutPage: React.FC = () => {


  const navigate = useNavigate()

  const handleBackClick = () => navigate(-1)
  return (
    <div className='container w-full mx-auto lg:pt-[50px]'>
      <img
        src={BackArrowIcon}
        alt="back_arrow"
        width={50}
        height={50}
        className='icons cursor-pointer lg:block hidden'
        onClick={handleBackClick}
      />
      <div className=' flex flex-col lg:flex-row items-center'>
        <BillingCardForm />
        <OrderSummary />
      </div>
    </div>
  );
}


export default CheckOutPage;