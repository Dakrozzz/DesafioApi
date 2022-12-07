// Componente de consumo de la api

import React, { useState, useEffect } from "react";
import Header from "./Header"
import Card from "./Card";
import Searcher from "./Searcher";
import Button from "react-bootstrap/Button";
import "./Header.css"
import "./miapi.css"

function MiApi() {

  //Variables de estado

  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState([]);
  const [prev, setPrev] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [stateSearch, setStateSearch] = useState("alive");

  useEffect(() => {
    getData()
  }, []);

  
  const inputFiltro = (e) => {
    setNameSearch(e.target.value);
  };

  const selectFiltro = (e) => {
    setStateSearch(e.target.value);
  };

   //funcion para obtener los datos
   const getData = async () => {
    try {
      const URL = "https://rickandmortyapi.com/api/character";
      const response = await fetch(URL);
      const data = await response.json();
      setCharacters(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
      return;
    } catch (error) {
      alert(error.message);
    }
  };




//Consumo de Api 


  
  //Funcion para filtrar el array desde la api
  const filtrar = async () => {
    try {
      const URL = `https://rickandmortyapi.com/api/character/?name=${nameSearch}&status=${stateSearch}`;
      const response = await fetch(URL);
      const data = await response.json();
      setCharacters(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
    } catch (error) {
      alert(error.message);
    }
  };

  //Funcion para cargar la siguiente pagina de elementos del array
  const nextPage = async () => {
    try {
      const URL = next;
      const response = await fetch(URL);
      const data = await response.json();
      setCharacters(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
    } catch (error) {
      alert('Esta es la ultima pagina');
    }
  };

  //Funcion para cargar la pagina previa de elementos del array
  const prevPage = async () => {
    try {
      const URL = prev;
      const response = await fetch(URL);
      const data = await response.json();
      setCharacters(data.results);
      setNext(data.info.next);
      setPrev(data.info.prev);
    } catch (error) {
      alert('Esta es la primera pagina');
    }
  };

//filtrado de personajes de rick and morty
  return (
    <>
      <Header />
      <Searcher
        inputFilter={inputFiltro}
        filter={filtrar}
        selectFiltro={selectFiltro}
      />
      <div className="paginacion">
        <Button variant="dark" className="boton" onClick={prevPage}>
          Anterior
        </Button>
        <Button variant="dark" className="boton" onClick={nextPage}>
          Siguiente
        </Button>
      </div>
      <div className="tarjeta">
        {characters.map((character) => (
          <div>
            <Card
              image={character.image}
              name={character.name}
              status={
                character.status == "Alive" ? (
                  <span className="vivo">{character.status}</span>
                ) : (
                  <span className="muerto">{character.status}</span>
                )
              }

            />
          </div>
        ))}
      </div>
    </>
  );
}
export default MiApi;