import React, { ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import ChevronDown from "@/assets/icons/Chevron-Down.svg";
import Image from "next/image";

type DropdownProps = {
  align?: "left" | "top" | "right" | "bottom" | "center";
  width?: number | string;
  contentClasses?: string;
  containerClasses?: string;
  extraClasses?: string;
  trigger?: ReactNode;
  children: ReactNode;
  hideChevron?: boolean;
};

const Dropdown = ({
  align,
  width,
  contentClasses,
  containerClasses,
  trigger,
  children,
  extraClasses,
  hideChevron,
}: DropdownProps) => {
  let alignmentClasses;

  switch (width) {
    case "48":
      width = "w-48";
      break;
    case "15":
      width = "w-[15rem]";
      break;
    case "20":
      width = "w-[20rem]";
      break;
    default:
      width = "w-48";
      break;
  }

  switch (align) {
    case "left":
      alignmentClasses = "origin-top-left left-0";
      break;
    case "top":
      alignmentClasses = "origin-top";
      break;
    case "center":
      alignmentClasses = "left-[50%] translate-x-[-50%]";
      break;
    case "right":
    default:
      alignmentClasses = "origin-top-right right-0";
      break;
  }

  return (
    <Menu as="div" className={`relative ${containerClasses}`}>
      {({ open }) => (
        <>
          <Menu.Button as={React.Fragment}>
            <div className="flex gap-x-[3px] cursor-pointer">
              {trigger}{" "}
              {!hideChevron && (
                <Image
                  className={`transition-all ${open ? "rotate-180" : "rotate-0"}`}
                  src={ChevronDown}
                />
              )}
            </div>
          </Menu.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div
              className={`absolute z-50 mt-2 ${width} rounded-md shadow-lg ${alignmentClasses} ${extraClasses}`}
            >
              <Menu.Items
                className={`rounded-md overflow-hidden focus:outline-none ring-1 ring-black ring-opacity-5 ${contentClasses ?? "bg-white"}`}
                static
              >
                {children}
              </Menu.Items>
            </div>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
