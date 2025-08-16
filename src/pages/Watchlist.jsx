import { useContext, useEffect, useState } from "react";
import { watchcontext } from "../Components/Context";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Watchlist() {
    const { watchlist, genre,togglelist } = useContext(watchcontext);
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");

    const filterdata = watchlist.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
    }).filter((movie) => {
        return !selectedGenre || movie.genre_ids.includes(parseInt(selectedGenre));
    });


    return (
        <div>
            <input type="text" value={search} onChange={(e) => {
                setSearch(e.target.value);
            }} placeholder="Enter the movie name" className="mt-6 border w-3/4 md:w-1/2 bg-gray-800 bg-opacity-60 text-white p-2 z-10 fixed top-8 left-1/2 -translate-x-1/2 backdrop-blur-md placeholder:text-black rounded-md"></input>

            <div className="mt-16 flex justify-center ">
                <select className="bg-gray-200 mb-4 bg-opacity-60 p-2 backdrop-blur-md  border-2 border-solid border-black rounded "
                    onChange={(e) => {
                        setSelectedGenre(e.target.value);
                    }}
                >
                    <option value="" className="text-black">Select Genre</option>
                    {
                        genre.map((gen) => (
                            <option key={gen.id} value={gen.id} className="text-black">{gen.name}</option>
                        ))
                    }
                </select>
            </div>

            {<div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                {filterdata.map((movie) => (
                    <div key={movie.id} className="bg-gray-800 bg-opacity-60 rounded-lg p-4 relative">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full mx-auto  rounded-lg mb-2" />
                        <h2 className="text-lg text-white">{movie.title}</h2>
                        <p className="text-gray-700">{movie.release_date}</p>
                        <button className="text-xl absolute top-1 right-1  text-red-600" onClick={() => {
                            togglelist(movie);

                        }}>{watchlist.some((item) => item.id === movie.id) ? <FaHeart /> : <FaRegHeart />}</button>
                    </div>
                ))}
            </div>}
        </div>
    )
}
export default Watchlist;