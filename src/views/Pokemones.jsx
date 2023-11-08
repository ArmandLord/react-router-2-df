import { useEffect, useState } from "react";

const Pokemones = () => {
  //Crear estado para almacenar los pokemones
  const [pokemones, setPokemones] = useState([]);
  //Guardar la URL en constante de la API
  const URL_API = "https://pokeapi.co/api/v2/pokemon/";
  //Hacer la consulta a la API , hacer función y usar useEfect
  const getPokemon = async () => {
    const res = await fetch(URL_API);
    const data = await res.json();
    setPokemones(data.results);
  };

  useEffect(() => {
    getPokemon();
  }, []);
  console.log(pokemones);
  return <div>Pokemones</div>;
};

export default Pokemones;
