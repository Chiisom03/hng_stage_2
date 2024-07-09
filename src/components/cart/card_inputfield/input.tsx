import { CardGroupInputFieldProps, InputFieldProps, BillingAddressInputFieldProps } from "./input_interface"
import VisaIcon from '../../../assets/img/card_type/logo_visa.png';
import MasterCardIcon from '../../../assets/img/card_type/logo_mastercard.png';
import AmexIcon from '../../../assets/img/card_type/logo_amex.png';
import CardIcon from '../../../assets/img/icons/credit card.svg';


export const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange, isCardInput }) => {
  return (
    <div
      className='flex justify-between border border-t-orange h-[60px] rounded-[10px] items-center pl-[14px] pr-4 w-[480px] gap-x-[190px]'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='pt-[11px] pb-[12px] bg-transparent text-sm-text placeholder:text-[16px] outline-none'
      />

      {isCardInput && <img src={CardIcon} alt="card_icon" className='w-[40px] h-[30px]' />}
    </div>
  )
}

export const CardGroupInputField: React.FC<CardGroupInputFieldProps> = ({
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
    <div className="">
      <div
        className='flex justify-between items-center border-t border-x border-t-orange h-max rounded-t-[10px] w-[478.998px] pl-[18px] focus-within:outline-4 pt-[6px] pb-[7.84px] pr-[16.03px]'>
        <input
          type={type1}
          className='bg-transparent text-base pt-[4px] outline-none'
          placeholder='1234 1234 1234 1234'
          value={value1}
          onChange={onChange1}
        />
        <div className='flex gap-x-[16.03px] items-center justify-center'>
          <img src={VisaIcon} alt="visa_icon" className='w-[40.084px] h-[30px]' />
          <img src={MasterCardIcon} alt="mastercard_icon" className='w-[40.084px] h-[30px]' />
          <img src={AmexIcon} alt="amex_icon" className='w-[40.084px] h-[30px]' />
        </div>
      </div>

      <div className='flex w-[478.998px]'>
        <input type={type2}
          placeholder='MM / YY'
          className='border border-t-orange h-[60px] rounded-es-[10px] pl-4 bg-transparent text-[16px] w-[240.5px] pt-[12.52px] pb-[25px]'
          value={value2}
          onChange={onChange2}
        />
        <input type={type3}
          placeholder='CVC'
          className='border-y border-r border-t-orange h-[60px] rounded-ee-[10px] px-4 bg-transparent text-[16px] w-[238.5px] pt-[12.52px] pb-[25px]'
          value={value3}
          onChange={onChange3}
        />
      </div>
    </div>
  )
}

export const BillingAddressInput: React.FC<BillingAddressInputFieldProps> = ({
  label, type, placeholder, value, onChange
}) => {
  return (
    <div>
      <div
        className='flex justify-between items-center border-t border-x border-t-orange h-max rounded-t-[10px] w-[480px] pl-[18px] pb-[12.48px] pr-[16.03px] pt-[13px]'>
        <label htmlFor={label}>{label}</label>
      </div>

      <div className='flex w-[480px]'>
        <input type={type}
          placeholder={placeholder}
          className='border border-t-orange h-[60px] rounded-b-primary pl-4 bg-transparent text-[16px] w-full pt-[12.52px] pb-[25px]'
          value={value}
          onChange={onChange}
        />
      </div>
    </div >
  )
}

