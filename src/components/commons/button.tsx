import { FC } from "react";

type ButtonProps = {
  btnText: string;
  width?: string;
  onClick?: () => void;
  hasBorder?: boolean;
}

const Button: FC<ButtonProps> = ({ btnText, width, onClick, hasBorder }) => {
  return (
    <>
      {
        hasBorder ? (
          <button
            onClick={onClick}
            className={`border duration-300 border-t-orange uppercase text-sm-text h-[72px] bg-transparent text-t-orange ${width ?? 'w-[306px]'}`}>
            {btnText}
          </button>) : (
          <button
            onClick={onClick}
            className={`hover:bg-btn-hover hover:border duration-300 border-t-orange uppercase text-md-text bg-t-orange h-[60px] rounded-[10px] ${width ?? 'w-[167px]'}`}>
            {btnText}
          </button>)
      }
    </>
  )
}

export default Button;