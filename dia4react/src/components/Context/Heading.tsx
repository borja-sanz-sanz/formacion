import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export const Heading = () => {
    const level = useContext(LevelContext)
  switch (level) {
    case 1:
      return <h1>Heading 1</h1>;
    case 2:
      return <h2>Heading 2</h2>;
    case 3:
      return <h3>Heading 3</h3>;
    case 4:
      return <h4>Heading 4</h4>;
    case 5:
      return <h5>Heading 5</h5>;
    case 6:
      return <h6>Heading 6</h6>;
  }
};
