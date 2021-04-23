import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import GlobalStateContext from "../GlobalState/GlobalContext";

const GlobalState = (props) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(`${BASE_URL}`);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [count, setCount] = useState(0);
  // const [chamou, setChamou]=useState(20)
  
  useEffect(() => {
    getPokemonNames();
  }, [currentPageUrl]);
  const getPokemonNames = () => {
    axios
      .get(currentPageUrl)
      .then((response) => {
        setPokemonNames(response.data.results);
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
        // setChamou(chamou+20)
        // setCount (Math.ceil((response.data.count)/20))
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const newList = [];
    pokemonNames.forEach((item) => {
      axios
        .get(item.url)
        .then((response) => {
          newList.push(response.data);
          if (newList.length === 20 ) {
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

  return (
    <GlobalStateContext.Provider
      value={{
        pokemonNames,
        pokemons,
        setPokemons,
        pokedex,
        setPokedex,
        currentPageUrl,
        setCurrentPageUrl,
        nextPageUrl,
        setNextPageUrl,
        prevPageUrl,
        setPrevPageUrl,
        count,
        setCount
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
