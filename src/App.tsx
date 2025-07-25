import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Item from "./pages/Item"
import Categories from "./pages/Categories"

function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/item" element={<Item />} />
      <Route path="/categoria/:id" element={<Categories />} />
      <Route path="*" element={<Home />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
