import { useState } from 'react';
import { InputField, CardGroupInputField, BillingAddressInput } from './card_inputfield/input';
import Button from '../commons/button';



const BillingCardForm = () => {
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvc, setCvc] = useState('')
  const [cardName, setCardName] = useState('')
  const [billingAddress, setBillingAddress] = useState('')




  return (
    <div className='lg:order-first order-last w-full mb-[136px] lg:border-r border-primary lg:pr-[64p]'>
      <form className='lg:mt-8 mt-12 lg:ml-[70px] w-full lg:w-0 lg:px-0 px-4'>
        <h2 className="uppercase lg:text-[28px] mb-8 text-[24px] font-semibold lg:w-max">Pay with card</h2>
        <InputField type='email' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <h3 className='text-[20px] uppercase my-5 font-medium lg:w-max'>Card Information</h3>
        <CardGroupInputField
          type1='text'
          value1={cardNumber}
          onChange1={(e) => { setCardNumber(e.target.value) }}

          type2='text'
          value2={expiryDate}
          onChange2={(e) => { setExpiryDate(e.target.value) }}

          type3='text'
          value3={cvc}
          onChange3={(e) => { setCvc(e.target.value) }}
        />

        <h3 className='text-base mt-5 mb-4 uppercase font-medium lg:w-max'>Cardholder name</h3>
        <InputField type='text' placeholder='Full name on card' value={cardName} isCardInput onChange={(e) => { setCardName(e.target.value) }} />


        <h3 className='text-base mt-5 mb-4 uppercase font-medium lg:w-max'>Billing Address</h3>
        <BillingAddressInput label={'Nigeria'} type='text' placeholder='Address' value={billingAddress} onChange={(e) => { setBillingAddress(e.target.value); }} />

        <div className='lg:mt-5 lg:mb-[38px] flex gap-x-4 lg:w-max items-center mt-[29px] mb-[36px]'>
          <input type="checkbox" name='save_info' id='save_info' className='appearance-none checked:bg-t-orange checked:content-[✓] border border-t-orange h-5 w-5 flex justify-center' />
          <label htmlFor="save_info"> Securely save my information for 1-click checkout </label>
        </div>

        <div className='w-full lg:w-0 flex lg:block justify-center items-center'>
          <Button btnText='purchase' width='w-[480px] h-[72px]' />
        </div>
      </form>
    </div>
  );
}

export default BillingCardForm;