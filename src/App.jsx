// styles
import "./App.css";

// routes
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";

// pages
import Home from "./pages/Home";
import { History } from "./pages/History";
import { Products } from "./pages/Products";
import { Stores } from "./pages/Stores";
import { Curiosities } from "./pages/Curiosities";
import { PageError } from "./pages/PageError";
import { PageGordo } from "./pages/PageGordo";
import { Details } from "./pages/Details";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/história" element={<History />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/celulares/:id" element={<Details />} />
            <Route path="/lojas" element={<Stores />} />
            <Route path="/curiosidades" element={<Curiosities />} />
            <Route path="/registrar" element={<Register />} />
            <Route path="/gordo" element={<PageGordo />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
