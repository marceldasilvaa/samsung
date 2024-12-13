// navbar e footer
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/Button";

// hooks
import useFetch from "../hooks/useFetch";

// styles
import "./Products.css";

// pages
import { NavLink } from "react-router-dom";

export const Products = () => {
  const url = "http://localhost:3000/celulares";
  const { data: products } = useFetch(url);

  return (
    <>
      <div className="produtos">
        <Navbar />
        <h1 className="tituloProdutos">Produtos</h1>
        <section className="listaProdutos">
          {products &&
            products.map((product) => (
              <aside key={product.id} id="celulares">
                <img
                  id={product.id}
                  src={product.imagem}
                  alt="Celulares correspondentes"
                  className="imagemCelular"
                />
                <span id={product.id} className="nome">
                  {product.smartphone}
                </span>
                <span id={product.id} className="info">
                  {product.resumo}
                </span>
                <span id={product.id}>
                  Este produto ainda é fabricado?{" "}
                  <strong>{product.fabricando}</strong>
                </span>
                <NavLink to={`/celulares/${product.id}`}>Detalhes</NavLink>
              </aside>
            ))}
        </section>
        <h1 className="tituloCadastro">Você deseja cadastrar um celular Samsung?</h1>
        <NavLink to="/registrar">
          <Button />
        </NavLink>
        <Footer />
      </div>
    </>
  );
};
