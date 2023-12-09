import "./index.css";
import Search from "./components/Search.tsx";
import Main from "./components/Main.tsx";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter.tsx";
import { CharacterType } from "./interface/Character.ts";
import { CharacterStatusType } from "./interface/Character.ts";

function App() {
  //appi and main fetch logic
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [characters, setCharacters] = useState<CharacterType[] | []>([]); // Original array of characters
  const [filtered, setFiltered] = useState<CharacterType[] | []>([]); //Filtered array of characters
  const [status, setStatus] = useState<CharacterStatusType>(""); //Status - alive, dead, unknown
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(null); //Get total pages from API

  const api = `https://rickandmortyapi.com/api/character/?name=${searchTerm}&status=${status}&page=${pageNumber}`;

  const fetchCharacters = async () => {
    const data = await fetch(api);
    const res = await data.json();

    //Number of total pages
    setTotalPages(res?.info?.pages || 0);

    setCharacters(res.results);
    setFiltered(res.results);
  };
  console.log(totalPages);

  //Fetch first time and when character status or search term is changed
  useEffect(() => {
    fetchCharacters();
  }, [status, searchTerm]);

  //Fetch next page
  let fetchMoreCharacters = async () => {
    const data = await fetch(api);
    const res = await data.json();
    const resArr = res.results;

    // Setting old + new data
    setCharacters((prevCharacters) => [...prevCharacters, ...resArr]);
    setFiltered((prevCharacters) => [...prevCharacters, ...resArr]);
    setPageNumber((prev) => prev + 1);

  };

  
  return (
    <div className="app">
      <Search setSearchTerm={setSearchTerm}/>

      <Filter setPageNumber={setPageNumber} characters={characters} setFiltered={setFiltered} status={status} setStatus={setStatus}/>

      <Main pageNumber={pageNumber} totalPages={totalPages} characters={filtered} fetchMoreCharacters={fetchMoreCharacters}/>
    </div>
  );
}

export default App;
