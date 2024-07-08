import {useState } from 'react';
import BackArrowIcon from '../assets/img/icons/bx_arrow-back.svg'


const CartPage: React.FC = () => {
  const [email, setEmail] = useState('')
  return (
    <div className='max-w-[1110px] mx-auto'>

      <img src={BackArrowIcon} alt="back_arrow" width={50} height={50} className='icons' />
      <div className='max-w-[1052px] mx-auto mt-8'>
        <h2 className="uppercase text-[28px] mb-8">Pay with card</h2>
        <InputField label='Email' type='email' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <h3 className='text-[20px] uppercase my-5'>Card Information</h3>
        <CardGroupInputField
          type1='text'
          value1={''}
          onChange1={() => { }}

          type2='text'
          value2={''}
          onChange2={() => { }}

          type3='text'
          value3={''}
          onChange3={() => { }}
        />
      </div>
    </div>
  );
}

type InputFieldProps = {
  label?: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, value, onChange, }) => {
  return (
    <div className='flex flex-col w-[478px]'>
      <label className='hidden' htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='border border-t-orange h-[60px] rounded-[10px] px-4 mb-4 bg-transparent text-sm-text'
      />
    </div>
  )
}

type CardGroupInputFieldProps = {
  label1?: string;
  label2?: string;
  label3?: string;
  type1: string;
  type2: string;
  type3: string;
  placeholder1?: string;
  placeholder2?: string;
  placeholder3?: string;
  value1: string;
  value2: string;
  value3: string;
  onChange1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange2: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange3: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const CardGroupInputField: React.FC<CardGroupInputFieldProps> = ({
  type1,
  type2,
  type3,
  value1,
  value2,
  value3,
  onChange1,
  onChange2,
  onChange3,
}) => {
  return (
    <div className="grid">
      <input
        type={type1}
        className='border-t border-x border-t-orange h-[60px] rounded-t-[10px] px-4 bg-transparent text-sm-text w-[479px]'
        placeholder='1234 1234 1234 1234'
        value={value1}
        onChange={onChange1}
      />

      <div className='flex mt-0'>
        <input type={type2}
          placeholder='MM / YY'
          className='border border-t-orange h-[60px] rounded-es-[10px] px-4 bg-transparent text-sm-text w-[240.5px]'
          value={value2}
          onChange={onChange2}
        />
        <input type={type3}
          placeholder='CVC'
          className='border-y border-r border-t-orange h-[60px] rounded-ee-[10px] px-4 bg-transparent text-sm-text w-[238.5px]'
          value={value3}
          onChange={onChange3}
        />
      </div>
    </div>
  )
}

export default CartPage;