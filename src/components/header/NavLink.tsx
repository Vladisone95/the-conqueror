import Link from "next/link";
import { ReactElement } from "react";

type NavLinkProps = {
  active?: boolean;
  children: ReactElement | string;
  href: string;
  isHeaderTransparent?: boolean;
};
const NavLink = ({
  active = false,
  isHeaderTransparent,
  children,
  href,
  ...props
}: NavLinkProps) => (
  <Link
    href={href}
    {...props}
    className={`inline-flex items-center px-1 pt-1 border-b-2 text-paragraph/medium leading-5 focus:outline-none ${
      active ? "border-tertiary focus:border-tertiary" : "border-transparent"
    } ${isHeaderTransparent ? "text-white" : "text-primary"}`}
  >
    {children}
  </Link>
);

export default NavLink;
