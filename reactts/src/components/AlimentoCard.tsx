import { Food } from "../types";

type AlimentoCardProps = {
  alimento: Food;
  informarVegetariano: (esVegetariano: boolean) => void;
};

export const AlimentoCard = ({
  alimento,
  informarVegetariano,
}: AlimentoCardProps) => (
  <div>
    <div>
      Nombre: {alimento.nombre} {/* es vegetariano:{" "} */}
      {/* {alimento.esVegetariano ? "Si" : "No"} */}
      <button onClick={() => informarVegetariano(alimento.esVegetariano)}>
        Saber si es vegetariano
      </button>
    </div>
    <br />
    <br />
  </div>
);
