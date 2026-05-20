"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/_ui/button";

function DfndrLogo() {
  return (
    <svg
      width="103"
      height="24"
      viewBox="0 0 103 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 w-[88px] h-[20px] sm:w-[103px] sm:h-[24px]"
    >
      <g clipPath="url(#clip0_476_13205)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M87.9579 9.15086V0.536385H91.3954V22.789H87.9579V20.5005C86.6635 22.302 84.8061 23.2022 82.3877 23.2022C80.202 23.2022 78.3343 22.3967 76.7845 20.7857C75.2347 19.1747 74.4608 17.1938 74.4608 14.8407C74.4608 12.4888 75.2347 10.5068 76.7845 8.89577C78.3343 7.28469 80.2006 6.48029 82.3877 6.48029C84.8075 6.48029 86.6635 7.37047 87.9579 9.15086ZM79.3313 18.4962C80.2865 19.4499 81.4861 19.9267 82.9288 19.9267C84.3708 19.9267 85.5704 19.4499 86.5255 18.4962C87.4807 17.5214 87.9579 16.3024 87.9579 14.8407C87.9579 13.379 87.4807 12.1702 86.5255 11.2165C85.5704 10.2416 84.3708 9.7536 82.9288 9.7536C81.4847 9.7536 80.2865 10.2416 79.3313 11.2165C78.3762 12.1702 77.8989 13.3779 77.8989 14.8407C77.8989 16.2813 78.3762 17.5002 79.3313 18.4962Z"
          fill="#635BFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.4271 9.15086V0.536385H45.8645V22.789H42.4271V20.5005C41.1329 22.302 39.2753 23.2022 36.8565 23.2022C34.6709 23.2022 32.8032 22.3967 31.2536 20.7857C29.7039 19.1747 28.9296 17.1938 28.9296 14.8407C28.9296 12.4888 29.7039 10.5068 31.2536 8.89577C32.8032 7.28469 34.6698 6.48029 36.8565 6.48029C39.2764 6.48029 41.1329 7.37047 42.4271 9.15086ZM33.8007 18.4962C34.7557 19.4499 35.955 19.9267 37.3976 19.9267C38.8402 19.9267 40.0395 19.4499 40.9946 18.4962C41.9496 17.5214 42.4271 16.3024 42.4271 14.8407C42.4271 13.379 41.9496 12.1702 40.9946 11.2165C40.0395 10.2416 38.8402 9.7536 37.3976 9.7536C35.9539 9.7536 34.7557 10.2416 33.8007 11.2165C32.8457 12.1702 32.3682 13.3779 32.3682 14.8407C32.3682 16.2813 32.8457 17.5002 33.8007 18.4962Z"
          fill="#635BFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M97.4659 6.89375V9.56433C98.3366 7.59345 99.9708 6.60742 102.369 6.60742V10.313H101.949H101.948C100.824 10.3164 99.8177 10.6384 98.9299 11.2801C97.9534 11.9798 97.4652 13.1451 97.4652 14.7773V22.788H94.0264V6.89375H97.4659Z"
          fill="#635BFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M66.5996 6.48022C68.446 6.48022 69.9263 7.06847 71.0401 8.24502C72.1545 9.4215 72.7114 11.0159 72.7114 13.0291V22.7878H69.2739V13.3778C69.2739 12.1913 68.956 11.2799 68.3189 10.6437C67.6818 10.0076 66.8116 9.69003 65.7082 9.69003C64.4564 9.69003 63.469 10.0766 62.7472 10.8498C62.0253 11.6231 61.6649 12.7628 61.6649 14.2669V22.7866H58.2275V6.89355H61.6649V8.92799C62.7271 7.29579 64.3716 6.48022 66.5996 6.48022Z"
          fill="#635BFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.2994 6.89362V5.16896C53.2994 4.42026 53.913 3.80751 54.6628 3.80751H57.0559V0.536385H54.6103C51.9985 0.536385 49.862 2.66995 49.862 5.27813V6.89362H48.6526H47.4432V10.1992H49.862V22.7879H53.3005V10.1992H57.057V6.89362H53.2994Z"
          fill="#635BFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2193 23.181L12.1925 23.1944L12.1892 23.1966L12.1859 23.1989L12.1725 23.2044C12.0096 23.279 11.8389 23.3169 11.6693 23.3225H11.6648H11.6414H11.628H11.6146H11.5911H11.5867C11.4171 23.3169 11.2464 23.279 11.0836 23.2044L11.0702 23.1989L11.0668 23.1966L11.0634 23.1944L11.0367 23.181C10.1018 22.7086 9.21589 22.1683 8.38584 21.5667C7.53905 20.9539 6.74801 20.2798 6.01947 19.5534C4.21877 17.7552 2.76392 15.5983 1.76651 13.195C0.80814 10.8843 0.279297 8.35857 0.279297 5.717C0.279297 5.6546 0.283772 5.47302 0.291581 5.18C0.29716 4.96274 0.304963 4.78113 0.312773 4.63741C0.336202 4.18507 0.586108 3.79738 0.948708 3.58013C1.80554 3.02418 2.70256 2.53838 3.6308 2.12392C4.58917 1.69721 5.56874 1.34959 6.55946 1.08443C8.16268 0.655487 9.83066 0.430463 11.522 0.419321C13.1364 0.409294 14.7642 0.59978 16.3674 1.00087C16.8583 1.08443 17.28 1.4443 17.4172 1.9568C17.5757 2.54841 17.6995 3.17008 17.7843 3.81851C17.8691 4.46248 17.9126 5.09645 17.9126 5.71813C17.9126 6.10808 17.897 6.49576 17.8658 6.8779C19.3775 7.59653 20.742 8.5625 21.9034 9.72231C21.9759 9.79473 22.0384 9.87386 22.0908 9.95854C22.2827 10.2616 22.3508 10.6426 22.2459 11.0147C21.7918 12.6324 21.1302 14.1699 20.2913 15.5982C19.4355 17.0555 18.4069 18.3847 17.2354 19.5545C16.5079 20.2809 15.717 20.955 14.869 21.5678C14.0412 22.1671 13.1543 22.7075 12.2193 23.181ZM17.3893 9.57639C17.2298 10.1524 17.0357 10.7139 16.8092 11.2609C16.0695 13.0458 14.9906 14.6446 13.6563 15.9771C13.5102 16.123 13.3127 16.3079 13.0639 16.5285C12.8798 16.6934 12.6801 16.8617 12.4659 17.0333L12.4648 17.0344L12.4636 17.0355C12.3877 17.0979 12.3075 17.1513 12.2216 17.1947L12.1948 17.2082L12.1925 17.2093L12.1657 17.2216C12.0107 17.2917 11.8466 17.3296 11.6816 17.3363H11.6771L11.6492 17.3374H11.6459H11.6269H11.6079H11.6045L11.5766 17.3363H11.5722C11.4071 17.3296 11.2431 17.2917 11.088 17.2216L11.0612 17.2093L11.059 17.2082L11.0322 17.1947C10.9463 17.1513 10.8648 17.0979 10.789 17.0355L10.7879 17.0344C10.5737 16.8628 10.3739 16.6946 10.1899 16.5297C9.94217 16.308 9.74469 16.1241 9.59747 15.9771C8.51638 14.8975 7.60153 13.6408 6.89866 12.2514C6.21472 10.9 5.73609 9.42931 5.50291 7.87953C5.41031 7.24558 5.78852 6.65067 6.37425 6.44902C7.18761 6.13371 8.04107 5.88971 8.92584 5.7226C9.81164 5.55659 10.7154 5.46855 11.6257 5.46855C12.8843 5.46855 14.107 5.63009 15.2752 5.93313C15.2763 5.86071 15.2774 5.78718 15.2774 5.71476C15.2774 5.16327 15.2439 4.64297 15.1803 4.15498C15.1468 3.89873 15.1033 3.64137 15.052 3.38401C13.885 3.14336 12.7046 3.02859 11.5298 3.03639C10.085 3.0453 8.64135 3.2425 7.23554 3.61907C6.35865 3.85416 5.50961 4.15386 4.6974 4.51484C4.08601 4.78781 3.48911 5.09754 2.91007 5.44292V5.71591C2.91007 8.01879 3.36639 10.2081 4.19199 12.1979C5.04772 14.2624 6.30956 16.1263 7.87929 17.6939C8.51974 18.3334 9.20359 18.9173 9.92659 19.4409C10.4732 19.8364 11.0411 20.1995 11.6269 20.526C12.2126 20.1995 12.7805 19.8364 13.3272 19.4409C14.0502 18.9173 14.734 18.3334 15.3745 17.6939C16.4054 16.6645 17.3001 15.5147 18.0286 14.2713C18.6188 13.2653 19.1097 12.189 19.4846 11.0571C18.8431 10.49 18.1402 9.99303 17.3893 9.57639ZM8.31779 8.56023C8.53306 9.44042 8.8477 10.2805 9.24713 11.0693C9.81727 12.1957 10.5681 13.2241 11.4629 14.1176C11.522 14.1766 11.5778 14.2312 11.6291 14.2824C11.6816 14.2312 11.7362 14.1766 11.7953 14.1176C12.8977 13.0168 13.7835 11.7088 14.3826 10.2638C14.6102 9.71676 14.7965 9.14741 14.9404 8.56023C13.8917 8.25941 12.7816 8.09793 11.6291 8.09793C10.8593 8.09793 10.1196 8.16698 9.41227 8.29959C9.04188 8.36974 8.67699 8.45662 8.31779 8.56023Z"
          fill="#635BFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_476_13205">
          <rect width="103" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {open ? (
        <path
          d="M6 6L18 18M6 18L18 6"
          stroke="#202020"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7H20M4 12H20M4 17H20"
          stroke="#202020"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="w-full relative z-50">
      <div className="px-global py-5 sm:py-7">
        <div className="max-w-global mx-auto flex items-center justify-between gap-3">
          <Link href="/" aria-label="dfndr home" onClick={closeMenu}>
            <DfndrLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="font-display font-medium text-[20px] text-black hover:opacity-70 transition-opacity"
            >
              About
            </a>
            <a
              href="#features"
              className="font-display font-medium text-[20px] text-black hover:opacity-70 transition-opacity"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="font-display font-medium text-[20px] text-black hover:opacity-70 transition-opacity"
            >
              Pricing
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="navbar" rounded="xl">
              Log In
            </Button>
            <Button variant="brand" size="navbar" rounded="xl">
              Start Free Trial
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 active:scale-95 transition-transform"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-full px-global">
          <div className="max-w-global mx-auto rounded-2xl border border-black/10 bg-white shadow-lg p-5 flex flex-col gap-4">
            <nav className="flex flex-col">
              <a
                href="#about"
                onClick={closeMenu}
                className="font-display font-medium text-[18px] text-black py-3 border-b border-black/5"
              >
                About
              </a>
              <a
                href="#features"
                onClick={closeMenu}
                className="font-display font-medium text-[18px] text-black py-3 border-b border-black/5"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={closeMenu}
                className="font-display font-medium text-[18px] text-black py-3"
              >
                Pricing
              </a>
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              <Button
                variant="ghost"
                size="navbar"
                rounded="xl"
                className="w-full !py-3 !text-base"
                onClick={closeMenu}
              >
                Log In
              </Button>
              <Button
                variant="brand"
                size="navbar"
                rounded="xl"
                className="w-full !py-3 !text-base"
                onClick={closeMenu}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
