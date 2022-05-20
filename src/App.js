import { useEffect, useState } from "react";
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
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([])
    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Batman')
    }, []);
    return (
        <div className="app">
            <h1>-EntertainDB-</h1>

            <div className="search">
                <input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
               movies?.length > 0
               ? (
                <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
               ) : (
               <div className="empty">
                   <h2>No movie found</h2> 
                   </div>
               )
            }
        </div>
    );
}
export default App;

//Variable for api url with key
//variable search movies, async arrow func
    //searches for title
//variable response that awaits the fetch
//useEffect hook, empty brackets [] to do once on page load
