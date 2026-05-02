import type { ReactNode } from "react";
import style from "./button.module.css";

// menerima beberapa props
interface PropTypes {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  color?: "primary" | "secondary";
}

const Button = (props: PropTypes) => {
  const { type = "button", children, color = "primary", className } = props;
  return (
    <button //dibagian style[`button-${color}`] itu agar stylenya dinamis nantinya
      className={`${style.button} ${style[`button-${color}`]} ${className}`}
      type={type}
      {...props} //buat props lagi kali aja besok ada props lainnya dan bisa langsung masuk kedalam code button-nya tampa ada di bagian interface ini hanya untuk jaga2
    >
      {children}
    </button>
  );
};

export default Button;
