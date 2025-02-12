import { cva } from "class-variance-authority";

export const ButtonStyles = cva("bg-blue-500", {
  variants: {
    variant: {
      primary: "bg-green-600 text-white",
      secondary: "bg-transparent text-green-800 border border-green-800",
    },
    size: {
      sm: ["text-sm", "p-2"],
      md: ["text-md", "p-4"],
      lg: ["text-lg", "p-6"],
    },
  },
});
