import BillingCardForm from '../components/cart/billingcard_form';
import OrderSummary from '../components/cart/order_summary';



const CheckOutPage: React.FC = () => {
  return (
    <div className='max-w-[1052px] mx-auto flex items-center'>
      <BillingCardForm />
      <OrderSummary />
    </div>
  );
}


export default CheckOutPage;