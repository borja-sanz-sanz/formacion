import { Planet } from "../../shared/types";
import { useFetch } from "../../shared/useFetch";
import { PlanetCard } from "./PlanetCard";

export const PlanetsList = () => {
  const { data, hasErrors, isLoading } = useFetch<Planet[] | undefined>(
    "https://dragonball-api.com/api/planets"
  );

  return (
    <>
      <h1>PlanetsList</h1>
      {!hasErrors && isLoading
        ? "Loading..."
        : data?.map((planet) => (
            <PlanetCard planet={planet} key={`planet-${planet.id}`} />
          ))}
      {hasErrors && "Se ha producido un error vuelva a intentarlo"}
    </>
  );
};
