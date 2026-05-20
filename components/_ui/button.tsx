import { clsx } from "clsx";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "font-bold leading-[140%] whitespace-nowrap transition-all active:scale-98 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "border border-[#202020] bg-[#202020] text-white",
        secondary: "border-2 border-[#202020]",
        ghost: "bg-[#ECECEC] border-2 border-black/10 text-black/60",
        brand: "bg-[#635BFF] border-2 border-[#ACA8FF] text-white",
      },
      size: {
        sm: "px-2 py-1 sm:px-4 sm:py-2 text-[13px] sm:text-[14px]",
        md: "px-2 py-1 sm:px-4 sm:py-2 text-[14px] sm:text-base",
        lg: "px-2 py-1 sm:px-4 sm:py-2 text-[15px] sm:text-lg",
        navbar: "px-8 py-4 text-[18px] tracking-[0.18px]",
      },
      rounded: {
        full: "rounded-full",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
      rounded: "full",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export default function Button({
  variant,
  size,
  rounded,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(buttonVariants({ variant, size, rounded }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
