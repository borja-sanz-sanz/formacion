import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyles } from "./button.styles";
import { VariantProps } from "class-variance-authority";
import { cn } from "./utilstailwind";

export interface ButtonProps extends VariantProps<typeof ButtonStyles> {
  children: ReactNode;
  className: string;
}

export const Button = ({ variant, size, children, className }: ButtonProps) => {
  return (
    <button className={cn(ButtonStyles({ variant, size }), className)}>
      {children}
    </button>
  );
};
