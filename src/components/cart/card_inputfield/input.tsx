import { CardGroupInputFieldProps, InputFieldProps, BillingAddressInputFieldProps } from "./input_interface"
import VisaIcon from '../../../assets/img/card_type/logo_visa.png';
import MasterCardIcon from '../../../assets/img/card_type/logo_mastercard.png';
import AmexIcon from '../../../assets/img/card_type/logo_amex.png';
import CardIcon from '../../../assets/img/icons/credit card.svg';


export const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange, isCardInput }) => {
  return (
    <div
      className='flex justify-between border border-t-orange h-[60px] rounded-[10px] items-center pl-[14px] pr-4 w-full lg:w-[480px] ld:gap-x-[190px]'>
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
    <div className="w-full">
      <div
        className='flex justify-between items-center border-t border-x border-t-orange h-max rounded-t-[10px] lg:w-[478.998px] w-full pl-[18px] pt-[6px] pb-[7.84px] lg:pr-[16.03px] pr-[12.24px]'>
        <input
          type={type1}
          className='bg-transparent text-base pt-[4px] outline-none'
          placeholder='1234 1234 1234 1234'
          value={value1}
          onChange={onChange1}
        />
        <div className='flex lg:gap-x-[16.03px] gap-x-[14px] items-center justify-center w-full'>
          <img src={VisaIcon} alt="visa_icon" className='lg:w-[40.084px] lg:h-[30px] w-[30px] h-5' />
          <img src={MasterCardIcon} alt="mastercard_icon" className='lg:w-[40.084px] lg:h-[30px] w-[30px] h-5' />
          <img src={AmexIcon} alt="amex_icon" className='lg:w-[40.084px] lg:h-[30px] w-[30px] h-5' />
        </div>
      </div>

      <div className='flex lg:w-[478.998px] w-full'>
        <input type={type2}
          placeholder='MM / YY'
          className='border border-t-orange h-[60px] rounded-es-[10px] pl-4 bg-transparent text-[16px] lg:w-[240.5px] w-full pt-[12.52px] pb-[25px]'
          value={value2}
          onChange={onChange2}
        />
        <input type={type3}
          placeholder='CVC'
          className='border-y border-r border-t-orange h-[60px] rounded-ee-[10px] px-4 bg-transparent text-[16px] lg:w-[238.5px] w-full pt-[12.52px] pb-[25px]'
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
        className='flex justify-between items-center border-t border-x border-t-orange h-max rounded-t-[10px] lg:w-[480px] w-full pl-[18px] pb-[12.48px] pr-[16.03px] pt-[13px]'>
        <label htmlFor={label}>{label}</label>
      </div>

      <div className='flex lg:w-[480px] w-full'>
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

