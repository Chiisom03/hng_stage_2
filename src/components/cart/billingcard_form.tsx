import { useState } from 'react';
import { InputField, CardGroupInputField, BillingAddressInput } from './card_inputfield/input';
import Button from '../commons/button';
import BackArrowIcon from '../../assets/img/icons/bx_arrow-back.svg';
import { useNavigate } from 'react-router-dom';



const BillingCardForm = () => {
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvc, setCvc] = useState('')
  const [cardName, setCardName] = useState('')
  const [billingAddress, setBillingAddress] = useState('')

  const navigate = useNavigate()

  const handleBackClick = () => navigate(-1)



  return (
    <div
      className='max-w-[1110px] mx-auto pt-[50px] mb-[136px] border-r border-primary pr-[64px] mr-[69px]'>
      <img
        src={BackArrowIcon}
        alt="back_arrow"
        width={50}
        height={50}
        className='icons cursor-pointer'
        onClick={handleBackClick}
      />
      <form className='mt-8 pl-[70px]'>
        <h2 className="uppercase text-[28px] mb-8">Pay with card</h2>
        <InputField type='email' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <h3 className='text-[20px] uppercase my-5 font-medium'>Card Information</h3>
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

        <h3 className='text-base mt-5 mb-4 uppercase font-medium'>Cardholder name</h3>
        <InputField type='text' placeholder='Full name on card' value={cardName} isCardInput onChange={(e) => { setCardName(e.target.value) }} />


        <h3 className='text-base mt-5 mb-4 uppercase font-medium'>Billing Address</h3>
        <BillingAddressInput label={'Nigeria'} type='text' placeholder='Address' value={billingAddress} onChange={(e) => { setBillingAddress(e.target.value); }} />

        <div className='mt-5 flex gap-x-4 mb-[38px]'>
          <input type="checkbox" name='save_info' id='save_info' className='appearance-none checked:bg-t-orange border border-t-orange h-5 w-5 flex justify-center' />
          <label htmlFor="save_info">Securely save my information for 1-click checkout </label>
        </div>

        <Button btnText='purchase' width='w-[480px] h-[72px]' />
      </form>
    </div>
  );
}

export default BillingCardForm;