import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./pages/Home"
import Watchlist from "./pages/Watchlist"
import { watchcontext, Watchcontextprovider } from "./Components/Context"
import { useContext } from "react"
function App() {
  return (
    <Watchcontextprovider >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
        </Routes>
    
      </BrowserRouter>
    </Watchcontextprovider>

  )
}

export default App
