import { useParams } from "react-router";
import { Character as CharacterType } from "../../shared/types";
import { useFetch } from "../../shared/useFetch";

export const Character = () => {
    const {id} = useParams()
  const { data, hasErrors, isLoading } = useFetch<CharacterType | undefined>(
    `https://dragonball-api.com/api/characters/${id}`,
    false
  );
  return (
    <>
      <h1>Character</h1>
      {!hasErrors && isLoading ? 'Loading...' : <div>
        <h2>{data?.name}</h2>
        <img src={data?.image} width={200}/>
        <p>{data?.description}</p>
        </div>}
        {hasErrors && 'Se ha producido un error vuelva a intentarlo'}
    </>
  );
};
