import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
  
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Crypto />} />
        </Route>
        <Route path="/trending" element={<Trending />} />
        <Route path="/saved" element={<Saved />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
