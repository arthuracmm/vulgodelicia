import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Item from "./pages/Item"
import CategoriaPage from "./pages/CategoriaPage"

function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/item/:id" element={<Item />} />
      <Route path="/categoria/:nome" element={<CategoriaPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
