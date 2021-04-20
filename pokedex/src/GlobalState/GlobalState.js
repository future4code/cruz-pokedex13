import { useEffect, useState } from "react";
import axios from "axios"
import { BASE_URL } from "../constants/api";
import GlobalStateContext from "../GlobalState/GlobalContaxt"

const GlobalState = (props) => {
    const [pokemonNames, setPokemonNames] = useState([]); 
    const [pokemons, setPokemons] = useState([]); 
    const [pokedex, setPokedex] = useState([])
  
  console.log(pokemons, "poke") 
  console.log(pokemonNames, "nomes") 
  
  useEffect(() => {
    getPokemonNames()
  }, [])
  const getPokemonNames = () => {
    axios.get(`${BASE_URL}/pokemon`)
    .then((response) => {
      setPokemonNames(response.data.results)
    } )
    .catch((error) => {
      console.log(error.message)
    })
  }
  
    useEffect(() => {
      const newList = []; 
      pokemonNames.forEach((item) => {
        axios
          .get(item.url)
          .then((response) => {
            newList.push(response.data); 
            if (newList.length === 20) { 
              const orderedList = newList.sort((a, b) => {
                return a.id - b.id; 
              });
              setPokemons(orderedList); 
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    }, [pokemonNames]);
  
  
    return(
  
      <GlobalStateContext.Provider value={ {pokemons, setPokemons, pokedex, setPokedex} }>
          {props.children}
     
      </GlobalStateContext.Provider>
    ) 
  };

export default GlobalState;