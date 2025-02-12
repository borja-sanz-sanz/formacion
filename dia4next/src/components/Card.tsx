import { VariantProps } from "class-variance-authority";
import { CardStyles } from "./card.styles";

export interface CardProps extends VariantProps<typeof CardStyles> {}

export const Card = ({ variant, direction }: CardProps) => {
  return (
    <div className={CardStyles({ variant, direction })}>
      <div>
        <img src="https://picsum.photos/600/400" width="600" />
      </div>
      <div>
        <h2 className="font-bold text-lg"> Titulo de la card</h2>
        <p className="text-sm ">Descripcion de la card</p>
      </div>
    </div>
  );
};
