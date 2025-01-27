import { Food } from "../types";
import { AlimentoCard } from "./AlimentoCard";

export const Alimentos = () => {
  const alimentos: Food[] = [
    { nombre: "Manzana", esVegetariano: true },
    { nombre: "Carne de res", esVegetariano: false },
    { nombre: "Zanahoria", esVegetariano: true },
    { nombre: "Pollo", esVegetariano: false },
    { nombre: "Lechuga", esVegetariano: true },
    { nombre: "Pescado", esVegetariano: false },
    { nombre: "Arroz", esVegetariano: true },
    { nombre: "Queso", esVegetariano: true },
    { nombre: "Tofu", esVegetariano: true },
    { nombre: "Tocino", esVegetariano: false },
  ];

  const informarVegetariano = (esVegetariano: boolean) => {
    alert(esVegetariano ? 'Es vegetariano' : 'No es vegetariano');
  }

  const añadirAlimento = () => {
    alert('añadiendo alimento')
    alimentos.push({nombre: 'Naranja', esVegetariano: true})
  }

  return (
    <>
    <button onClick={añadirAlimento}>Añadir alimento</button>
      {alimentos.map((alimento, index) => (
        <AlimentoCard key={`alimento-${index}`} alimento={alimento} informarVegetariano={informarVegetariano}/>
      ))}

      {/* {alimentos[0].nombre} {alimentos[0].esVegetariano ? 'es vegetariano' : 'no es vegetariano'}<br/>
    {alimentos[1].nombre} {alimentos[1].esVegetariano ? 'es vegetariano' : 'no es vegetariano'}<br/>
    {alimentos[2].nombre} {alimentos[2].esVegetariano ? 'es vegetariano' : 'no es vegetariano'}<br/> */}
    </>
  );
};
