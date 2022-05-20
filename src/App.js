import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'

import MovieCard from "./MovieCard";


const API_URL = "http://www.omdbapi.com?apikey=5ace3a4"
const movie1 = {
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();
        
        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Batman')
    }, []);
    return (
        <div className="app">
            <h1>Movie DB</h1>

            <div className="search">
                <input
                placeholder="Search..."
                value="Batman"
                onChange={() => {}}
                />
                <img src={SearchIcon}
                alt="search"
                onClick={() => {}}
                />
            </div>
            <div className="container">
               <MovieCard movie1={movie1}/> 
            </div>
        </div>
    );
}
export default App;

//Variable for api url with key
//variable search movies, async arrow func
    //searches for title
//variable response that awaits the fetch
//useEffect hook, empty brackets [] to do once on page load
