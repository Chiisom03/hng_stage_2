import { FC } from "react";

type ButtonProps = {
  btnText: string;
  width?: string;
}

const Button: FC<ButtonProps> = ({ btnText, width }) => {
  return (
    <button className={`hover:bg-white hover:border duration-300 border-t-orange uppercase text-md-text bg-t-orange h-[60px] rounded-[10px] ${width ?? 'w-[167px]'}`}>
      {btnText}
    </button>
  )
}

export default Button;