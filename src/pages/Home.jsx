import { use, useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { watchcontext } from "../Components/Context";
function Home() {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("");
    const { watchlist, togglelist } = useContext(watchcontext);
    // const  =useContext(watchcontext);
    // Fetching popular movies from the API
    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}&api_key=2995831eb42e3156f5e196d784de1e49`;

        if (search !== "") {
            url = `https://api.themoviedb.org/3/search/movie?language=en-US&query=${search}&api_key=2995831eb42e3156f5e196d784de1e49`
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
            });


    }, [page, watchlist, search]);

    return (
        <div>

            <input type="text" value={search} onChange={(e) => {
                setSearch(e.target.value);
            }} placeholder="Enter the movie name" className="mt-5 border w-3/4 md:w-1/2 bg-gray-800 bg-opacity-60 text-white p-2 z-10 fixed top-8 left-1/2 -translate-x-1/2 backdrop-blur-md placeholder:text-black rounded-md"></input>

            <div>

                <h1 className="text-3xl text-center mt-10 text-white">Popular Movies</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 relative">
                    {movies.map((movie) => (
                        <div key={movie.id} className="bg-gray-800 bg-opacity-60 rounded-lg p-4 relative">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-11/12 mx-auto  rounded-lg mb-2" />
                            <h2 className="text-lg text-white">{movie.title}</h2>
                            <p className="text-gray-700">{movie.release_date}</p>
                            <button className="text-2xl absolute top-1 right-1  text-red-600" onClick={() => {
                                togglelist(movie);

                            }}>{watchlist.some((item) => item.id === movie.id) ? <FaHeart /> : <FaRegHeart />}</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination buttons */}
            <div className="mt-2 mx-3 flex justify-between items-center p-2">
                <button disabled={page == 1} className="text-white bg-gray-800 px-4 py-2 rounded-lg " onClick={() => {
                    setPage(prev => prev > 1 ? prev - 1 : 1);
                }} >PREV</button>
                <button className="text-white bg-gray-800 px-4 py-2 rounded-lg" onClick={() => {
                    setPage(prev => prev + 1);
                }}>NEXT</button>
            </div>
            <div>

            </div>
        </div>
    )
}
export default Home;