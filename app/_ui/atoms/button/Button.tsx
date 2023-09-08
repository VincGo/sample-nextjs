import {PropsWithChildren, ReactElement} from "react";
import {ButtonInterface} from "@/atoms/button/buttonInterface";
import './buttons.scss';

const Button = ({
  btnClass, onClick,children, ...otherProps
}: PropsWithChildren<ButtonInterface>): ReactElement => {
  return (
    <button className={'btn ' + btnClass} onClick={onClick} {...otherProps}>
      {children}
    </button>
  )
}

export default Button;
