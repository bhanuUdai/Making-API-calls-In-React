import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error,setError]=useState(null)

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null)
    let res = await fetch("https://swapi.dev/api/film"); 
    try {
     
      if(!res.ok)
      {
        throw new Error('Something Went Wrong...Retrying')
      }

      let fetchMovies = await res.json(); 

      let transformedMovies = fetchMovies.results.map((data) => {
        return {
          id: data.episode_id, 
          title: data.title,
          openingText: data.opening_crawl,
          releaseDate: data.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (err) {
      console.log(err);
      setError(err.message)
    }
    setIsLoading(false);
  }


 


  let content=<p>No Movies</p>


  if(isLoading)
  {
    content=<p>Loading...</p>
  }

  if(!isLoading && movies.length>0 )
  {
    content=  <MoviesList movies={movies} />
  }

  if(!isLoading && movies.length===0)
  {
    content=<p>Found no movies</p>
  }
  if(!isLoading && error)
  {
    content=<p>{error}<button onClick={clearIntervalHandler}>Cancel</button></p>
   let ID= setTimeout(()=>
    {
      fetchMoviesHandler()
    },5000);

  function clearIntervalHandler()
  {
    clearInterval(ID)
    
  }
  }
 

 


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {! isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
