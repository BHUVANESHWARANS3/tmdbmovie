import { useContext } from "react";
import { Link } from "react-router-dom";
import { watchcontext } from "./Context";
function Header() {
    const { watchlist } = useContext(watchcontext);
    return (
        <div className="bg-gray-900 flex text-white justify-between  items-center p-2 sticky top-0 z-10">
            <h1 className="text-2xl font-bold">Movie App</h1>
            <ul className="flex items-center  gap-2 text-blue-400 ">
                <li> 
                    <Link to={"/"} className="underline">Home</Link>
                </li>
                <li>
                    <Link to={"/watchlist"} className="underline">Watchlist<span className="text-red-500 "> {watchlist.length}</span></Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;