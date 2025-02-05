import { useParams } from "react-router";
import { Planet as PlanetType } from "../../shared/types";
import { useFetch } from "../../shared/useFetch";

export const Planet = () => {
    const {id} = useParams()
  const { data, hasErrors, isLoading } = useFetch<PlanetType | undefined>(
    `https://dragonball-api.com/api/planets/${id}`,
    false
  );
  return (
    <>
      <h1>Planet</h1>
      {!hasErrors && isLoading ? 'Loading...' : <div>
        <h2>{data?.name}</h2>
        <img src={data?.image} width={200}/>
        <p>{data?.description}</p>
        </div>}
        {hasErrors && 'Se ha producido un error vuelva a intentarlo'}
    </>
  );
};
