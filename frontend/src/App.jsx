import Apps from './page/Apps'
import Books from './page/Books'
import Home from './page/Home'
import Login from './page/Login'
import Movie from './page/Movie'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Riviewpage from './page/Riviewpage'
import Riviewfrom from './page/Riviewfrom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Movie" element={<Movie />}></Route>
        <Route path="/Books" element={<Books />}></Route>
        <Route path="/Apps" element={<Apps />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Riviewpage" element={<Riviewpage />}></Route>
        <Route path="/Riviewfrom" element={<Riviewfrom />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
