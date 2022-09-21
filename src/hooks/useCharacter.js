import { useState } from 'react'

export const useCharacter = () => {

    const [personajes, setPersonaje] = useState(null);
    const [detalle, setDetalle] = useState(null);

    const getPersonajes = async () => {
        try {
          var requestOptions = {
            method: "GET",
            redirect: "follow",
          };
    
          await fetch(
            `https://rickandmortyapi.com/api/character`,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => setPersonaje(result.results))
            // .then((result) => console.log(result.results))
            .catch((error) => console.log("error", error));
        } catch (error) {
          console.log(error);
        }
      };

      const getDetalle = async (id) => {
        try {
          var requestOptions = {
            method: "GET",
            redirect: "follow",
          };
    
          await fetch(
            `https://rickandmortyapi.com/api/character/${id}`,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => setDetalle(result))
            // .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        } catch (error) {
          console.log(error);
        }
      };

      const back = ()=>{
        window.history.go(-1);
      }
    

  return {
    getPersonajes,
    personajes,
    getDetalle,
    detalle,
    back
  }
    
  
}
