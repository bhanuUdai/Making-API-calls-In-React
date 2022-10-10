import React ,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies]=useState([])

  async function fetchMoviesHandler()   // making function async function
  {
    let res=await fetch('https://swapi.dev/api/films')  // the response from fetching server will store in res here 
    try{
      let fetchMovies=await res.json();  //.json() also async function, it will convert json fromat into readable js , but it is also a callback (i.e) promise therefore using await with it also

      let transformedMovies=fetchMovies.results.map((data)=>
      {
        return({
          id: data.episode_id,   // here we are giving values to the id, in server id is not like id: 1, but episode_id:1, therefor we are assign that values to understand by movies.js component
          title: data.title,
          openingText: data.opening_crawl,
          releaseDate: data.release_date,

        })
      })

      setMovies(transformedMovies)


    }
    catch (err)
    {
      console.log(err)
    }


    // fetch('https://swapi.dev/api/films')
    // .then((response)=>
    // {
    //   return response.json()
    // })
    // .then((data)=>
    // {
    //   console.log(data.results)

    //   let transformedMovies=data.results.map((data)=>
    //   {
    //     return({
    //       id: data.episode_id,
    //       title: data.title,
    //       openingText: data.opening_crawl,
    //       releaseDate: data.release_date,

    //     })
    //   })

    //   setMovies(transformedMovies)

    // })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler} >Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
