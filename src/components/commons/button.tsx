import { FC } from "react";

type ButtonProps = {
  btnText: string;
  width?: string;
  onClick?: () => void;
  hasBorder?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({ btnText, width, onClick, hasBorder, type }) => {
  return (
    <>
      {
        hasBorder ? (
          <button
            onClick={onClick} type={type ?? 'button'}
            className={`border duration-300 border-t-orange uppercase text-sm-text h-[72px] bg-transparent text-t-orange ${width ?? 'w-[306px]'}`}>
            {btnText}
          </button>) : (
          <button
            onClick={onClick}
            className={`hover:bg-btn-hover hover:border duration-300 border-t-orange uppercase text-md-text bg-t-orange rounded-[10px] ${width ?? 'w-[167px]'} h-[60px]`}>
            {btnText}
          </button>)
      }
    </>
  )
}

export default Button;