import { createContext, useEffect, useState } from "react";

export const watchcontext = createContext(null);

export function Watchcontextprovider({children}){
    const [watchlist, setWatchlist] = useState([]);
    const [genre,setGenre] = useState([]);

    const togglelist = (movie) => {
        const index = watchlist.findIndex((item) => item.id === movie.id);
        if(index === -1){
            setWatchlist([...watchlist, movie]);
        }
        else {
            setWatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)]);
        }
    }

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=2995831eb42e3156f5e196d784de1e49`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setGenre(data.genres || [] );
            })
    }, []);
        
    return (
        <watchcontext.Provider value={{watchlist, togglelist,genre}}>
            {children}
        </watchcontext.Provider>
    )
}