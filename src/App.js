import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'



const API_URL = "http://www.omdbapi.com?apikey=5ace3a4"
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
        <h1>App loaded</h1>
    );
}
export default App;

//Variable for api url with key
//variable search movies, async arrow func
    //searches for title
//variable response that awaits the fetch
//useEffect hook, empty brackets [] to do once on page load
