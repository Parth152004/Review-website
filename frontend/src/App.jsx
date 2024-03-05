import Apps from './page/Apps'
import Books from './page/Books'
import Home from './page/Home'
import Login from './page/Login'
import Movie from './page/Movie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Riviewpage from './page/Riviewpage'
import Riviewfrom from './page/Riviewfrom'
import Signup from './page/Signup'
import Addmovie from './page/Addmovie'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Movie" element={<Movie />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Riviewpage" element={<Riviewpage />}></Route>
        <Route path="/Riviewfrom" element={<Riviewfrom />}></Route>
        <Route path="/Addmovie" element={<Addmovie />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
