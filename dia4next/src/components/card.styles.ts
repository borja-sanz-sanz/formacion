import { cva } from "class-variance-authority";

export const CardStyles = cva("border border-black p-4 m-4 flex", {
  variants: {
    direction: {
      vertical: ["flex-col"],
      horizontal: [],
    },
    variant: {
      light: [],
      dark: ["bg-black text-white"],
    },
  },
});
