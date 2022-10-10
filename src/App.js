import React ,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies,setMovies]=useState([])

  const fetchMoviesHandler=()=>
  {
    fetch('https://swapi.dev/api/films')
    .then((response)=>
    {
      return response.json()
    })
    .then((data)=>
    {
      console.log(data.results)

      let transformedMovies=data.results.map((data)=>
      {
        return({
          id: data.episode_id,
          title: data.title,
          openingText: data.opening_crawl,
          releaseDate: data.release_date,

        })
      })

      setMovies(transformedMovies)

    })
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
