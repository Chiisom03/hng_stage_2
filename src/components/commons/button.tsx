import { FC } from "react";

type ButtonProps = {
  btnText: string;
  width?: string;
}

const Button: FC<ButtonProps> = ({ btnText, width }) => {
  return (
    <button className={`uppercase text-md-text bg-t-orange h-[60px] ${width ?? 'w-[167px] rounded-[10px]'}`}>{btnText}</button>
  )
}

export default Button;