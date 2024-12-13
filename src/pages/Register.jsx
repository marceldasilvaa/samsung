// styles
import styles from "./Register.module.css";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/Button";

// rotes
import { useNavigate } from "react-router-dom";

// hook
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const url = "http://localhost:3000/celulares/";

export const Register = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [made, setMade] = useState("");
  const [resume, setResume] = useState("");
  const [screen, setScreen] = useState("");
  const [processor, setProcessor] = useState("");
  const [memory, setMemory] = useState("");
  const [storage, setStorage] = useState("");
  const [system, setSystem] = useState("");
  const [cameraT, setCameraT] = useState("");
  const [cameraF, setCameraF] = useState("");
  const [batery, setBatery] = useState("");
  const [error, setError] = useState(null);

  const { httpConfig } = useFetch(url);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const products = {
      smartphone: name,
      imagem: image,
      fabricando: made,
      resumo: resume,
      tela: screen,
      processador: processor,
      memoriaRAM: memory,
      armazenamento: storage,
      sistema: system,
      cameraTraseira: cameraT,
      cameraFrontal: cameraF,
      bateria: batery,
    };

    try {
      new URL(image);
    } catch (error) {
      return setError("A imagem precisa ser uma URL.");
    }

    httpConfig(products, "POST");

    navigate("/produtos");
  };

  return (
    <>
      <div className={styles.registrar}>
        <Navbar />
        <h1>Cadastre aqui</h1>
        <p>
          Cadastre seu produto preferido da Samsung aqui!
        </p>
        <form onSubmit={handleSubmit} className={styles.containerRegistrar}>
          <label>
            Nome do modelo:
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Digite o modelo"
              maxLength={20}
            />
          </label>
          <label>
            Imagem (Link!):
            <input
              type="text"
              required
              onChange={(e) => setImage(e.target.value)}
              value={image}
              placeholder="Cole o link aqui"
            />
          </label>
          <label>
            Produto ainda é fabricado:
            <input
              type="text"
              required
              onChange={(e) => setMade(e.target.value)}
              value={made}
              placeholder="Sim / Não"
            />
          </label>
          <label>
            Resumo sobre o produto:
            <input
              type="text"
              required
              onChange={(e) => setResume(e.target.value)}
              value={resume}
              placeholder="Breve resumo"
              maxLength={270}
            />
          </label>
          <label>
            Expecificações de tela:
            <input
              type="text"
              required
              onChange={(e) => setScreen(e.target.value)}
              value={screen}
              placeholder="Expecificações"
            />
          </label>
          <label>
            Processador:
            <input
              type="text"
              required
              onChange={(e) => setProcessor(e.target.value)}
              value={processor}
              placeholder="Processador"
            />
          </label>
          <label>
            Memória RAM:
            <input
              type="text"
              required
              onChange={(e) => setMemory(e.target.value)}
              value={memory}
              placeholder="RAM"
            />
          </label>
          <label>
            Armazenamento:
            <input
              type="text"
              required
              onChange={(e) => setStorage(e.target.value)}
              value={storage}
              placeholder="Armazenamento"
            />
          </label>
          <label>
            Sistema:
            <input
              type="text"
              required
              onChange={(e) => setSystem(e.target.value)}
              value={system}
              placeholder="Sistema"
            />
          </label>
          <label>
            Câmera Traseira:
            <input
              type="text"
              required
              onChange={(e) => setCameraT(e.target.value)}
              value={cameraT}
              placeholder="Expecificações"
            />
          </label>
          <label>
            Câmera Frontal:
            <input
              type="text"
              required
              onChange={(e) => setCameraF(e.target.value)}
              value={cameraF}
              placeholder="Expecificações"
            />
          </label>
          <label>
            Bateria:
            <input
              type="text"
              required
              onChange={(e) => setBatery(e.target.value)}
              value={batery}
              placeholder="Bateria"
            />
          </label>
          <Button />
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};
