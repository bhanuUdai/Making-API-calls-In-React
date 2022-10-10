import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    let res = await fetch("https://swapi.dev/api/films"); 
    try {
      let fetchMovies = await res.json(); 

      

      let transformedMovies = fetchMovies.results.map((data) => {
        return {
          id: data.episode_id, 
          title: data.title,
          openingText: data.opening_crawl,
          releaseDate: data.release_date,
        };
      });
      setIsLoading(false);
      setMovies(transformedMovies);
    } catch (err) {
      console.log(err);
    }
  }


  // let loadingMessage = [{
  //   id: "loading",
  //   title: "Your data is Loading..."
  // }];

  // useEffect(()=>
  // {
  //   if(isLoading)
  //   {
  //     setMovies(loadingMessage)
  //   }
  // },[isLoading])

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {! isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
