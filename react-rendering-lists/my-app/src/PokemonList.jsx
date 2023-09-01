export default PokemonList;

const PokemonList = ({ pokedex }) => {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>
          {pokemon.number}: {pokemon.name}
        </li>
      ))}
    </ul>
  );
};
