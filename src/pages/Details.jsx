// route
import { useParams, useNavigate } from "react-router-dom";

// navbar e rodape
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

// hook
import useFetch from "../hooks/useFetch";

// styles
import "./Details.css";

export const Details = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const url = "http://localhost:3000/celulares/" + id;
  const { data: product, httpConfig } = useFetch(url);

  const handleDelete = () => {
    httpConfig(id, "DELETE");

    navigate("/produtos");
  };

  return (
    <>
      <div className="detalhes">
        <Navbar />
        <h1>Saiba mais detalhes sobre o aparelho</h1>
        {product && (
          <div key={product.id} className="celular">
            <img src={product.imagem} alt="Imagem do Celular" />
            <p className="nomeCelular">
              <strong>Celular:</strong> {product.smartphone}
            </p>
            <h3 className="configs">
              Algumas configurações do celular abaixo:
            </h3>
            <p>
              <strong>Tela:</strong> {product.tela}
            </p>
            <p>
              <strong>Processador:</strong> {product.processador}
            </p>
            <p>
              <strong>Memória RAM:</strong> {product.memoriaRam}
            </p>
            <p>
              <strong>Armazenamento:</strong> {product.armazenamento}
            </p>
            <p>
              <strong>Sistema:</strong> {product.sistema}
            </p>
            <p>
              <strong>Câmera Traseira:</strong> {product.cameraTraseira}
            </p>
            <p>
              <strong>Câmera Frontal:</strong> {product.cameraFrontal}
            </p>
            <p>
              <strong>Bateria:</strong> {product.bateria}
            </p>
            <button
              className="deletarProduto"
              onClick={() => handleDelete(product.id)}
            >
              Deletar este produto
            </button>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};
