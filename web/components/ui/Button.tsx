import Link from "next/link";
import { ReactNode } from "react";

type Variant = "red" | "blue" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  red: "bg-[#E02020] hover:bg-[#c01a1a] text-white shadow-lg hover:shadow-red-900/30",
  blue: "bg-[#6B8FBF] hover:bg-[#8aafd9] text-white shadow-lg hover:shadow-blue-900/30",
  outline:
    "border border-[#1e2d47] hover:border-[#6B8FBF] text-[#94a3b8] hover:text-white bg-transparent",
  ghost: "text-[#94a3b8] hover:text-white bg-transparent hover:bg-[#141c2e]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#6B8FBF]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

export default function Button({
  children,
  href,
  variant = "red",
  size = "md",
  external = false,
  onClick,
  type = "button",
  disabled,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
