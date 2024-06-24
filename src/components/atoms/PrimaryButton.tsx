import { ReactElement } from "react";

type ButtonPros = {
  children: ReactElement;
  className: string;
  onClick?: () => void;
  disabled?: boolean;
  type: "submit" | "reset" | "button" | undefined;
};
const PrimaryButton = ({
  type = "submit",
  className,
  children,
  ...props
}: ButtonPros) => (
  <button
    type={type}
    className={`cursor-pointer font-[700] inline-flex justify-center items-center px-[32px] py-[0.75rem] rounded-[6px] disabled:shadow-none shadow-custom text-[16px] text-label/medium text-white bg-black hover:bg-[#EF3440] active:bg-[#EF3440] focus:outline-none disabled:text-[#CACACA] transition ease-in-out duration-150 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default PrimaryButton;
