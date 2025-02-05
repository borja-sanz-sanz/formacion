import { Character } from "../../shared/types";
import { useFetch } from "../../shared/useFetch";
import { CharacterCard } from "./CharacterCard";
import { CharacterProvider } from "./CharactersProvider";

export const CharactersList = () => {
  const { data, isLoading, hasErrors } = useFetch<Character[] | undefined>(
    "https://dragonball-api.com/api/characters"
  );
  return (
    <>
    <CharacterProvider>
      <h1>CharactersList</h1>
      {!hasErrors && isLoading
        ? "Loading..."
        : data?.map((character) => (
            <CharacterCard
              character={character}
              key={`character-${character.id}`}
            />
          ))}
      {hasErrors && "Se ha producido un error vuelva a intentarlo"}
    </CharacterProvider>
    </>
  );
};
