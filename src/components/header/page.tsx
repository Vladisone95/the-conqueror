"use client";

import Image from "next/image";
import Dropdown from "@/components/atoms/Dropdown";
import { ResponsiveNavButton } from "@/components/ResponsiveNavLink";
import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "@/assets/images/Logo.png";
import { useRouter } from "next/navigation";
import Burger from "@/assets/icons/BurgerWhite.png";
import Cart from "@/assets/icons/Cart.svg";
import { useUsedCardsContext } from "@/lib/context/usedCardsProvider";

export default function Home() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { usedCards } = useUsedCardsContext();

  useEffect(() => {
    window.addEventListener("resize", () => {
      const { innerWidth } = window;

      if (innerWidth >= 640 && open) {
        setOpen(false);
      }
    });

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("resize", () => {});
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <nav
      className={`border-b w-full left-[50%] translate-x-[-50%] fixed z-[100]`}
    >
      <div className="bg-black box__shadow">
        <div className="text-black w-full flex justify-center items-center h-[35px] bg-[#E0C26B]">
          <div className="text-[14px] leading-[14px] font-[500] text-center">
            THE LORD OF THE RINGS Virtual Challenges are HERE!
          </div>
        </div>
        <div className="flex justify-between h-[65px] w-[90%] md:container mx-auto">
          {open && <div className="md:hidden" />}
          <div className={`${open ? "hidden md:flex" : "flex"}`}>
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center absolute md:translate-y-[-35px]">
              <Link href="/">
                <div className="flex gap-x-[0.5rem]">
                  <Image
                    className="drop__shadow"
                    src={Logo}
                    alt="Logo"
                    width={79}
                    height={120}
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Settings Dropdown */}
          <div className="hidden md:flex md:items-center gap-x-[24px] lg:gap-x-[32px]">
            <Dropdown
              align="right"
              width="15"
              trigger={
                <div className="text-[16px] font-[400] leading-[23px] text-white">
                  Challenges
                </div>
              }
            >
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Challenge 1
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Challenge 2
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Challenge 3
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Challenge 4
              </ResponsiveNavButton>
            </Dropdown>
            <Dropdown
              align="right"
              width="15"
              trigger={
                <div className="text-[16px] font-[400] leading-[23px] text-white">
                  LOTR
                </div>
              }
            >
              <ResponsiveNavButton onClick={() => router.push("/")}>
                The Fellowship of the Ring
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                The Two Towers
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                The Return of the King
              </ResponsiveNavButton>
            </Dropdown>
            <Dropdown
              align="right"
              width="15"
              trigger={
                <div className="text-[16px] font-[400] leading-[23px] text-white">
                  Merch
                </div>
              }
            >
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Merch 1
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Merch 2
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Merch 3
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Merch 4
              </ResponsiveNavButton>
            </Dropdown>
            <Dropdown
              align="right"
              width="15"
              trigger={
                <div className="text-[16px] font-[400] leading-[23px] text-white">
                  More
                </div>
              }
            >
              <ResponsiveNavButton onClick={() => router.push("/")}>
                More 1
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                More 2
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                More 3
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                More 4
              </ResponsiveNavButton>
            </Dropdown>
            <div className="text-[16px] font-[400] leading-[23px] text-white cursor-pointer">
              Corporate
            </div>
            <div className="text-[16px] font-[400] leading-[23px] text-white cursor-pointer">
              Shop
            </div>
            <Link href="/cart">
              <div className="cursor-pointer flex gap-x-[2px] text-white">
                <Image src={Cart} />
                {usedCards.length > 0 ? `(${usedCards.length})` : ""}
              </div>
            </Link>
          </div>

          {/* Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen((open) => !open)}
              className="flex gap-x-[0.5rem] items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out p-[0.5rem]"
            >
              <Image src={Burger} alt="Burger menu" />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Navigation Menu */}
      {open && (
        <div className="block md:hidden h-[100vh] bg-white">
          {/* Responsive Settings Options */}
          <div className="pt-4 pb-1">
            <div className="mt-3 px-[1.5rem]">
              <ResponsiveNavButton
                onClick={() => router.push("/")}
                additionalClassNames="font-extrabold"
              >
                The Conqueror
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Challenges
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                LOTR
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Merch
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                More
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Corporate
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/")}>
                Shop
              </ResponsiveNavButton>
              <ResponsiveNavButton onClick={() => router.push("/cart")}>
                Cart
              </ResponsiveNavButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
