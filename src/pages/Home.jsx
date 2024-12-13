// styles
import "./Home.css";
import SamsungLogo from "../images/samsung-logo.png";

// pages
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <div className="home">
        <div
          className="container"
          style={{
            backgroundImage: `url("https://www.thesun.co.uk/wp-content/uploads/2020/06/NINTCHDBPICT000447193819.jpg?strip=all&quality=100&w=1920&h=1080&crop=1")`,
          }}
        >
          <img src={SamsungLogo} alt="Logo Samsung" className="logo" />
          <h1>O que você deseja saber sobre a Samsung?</h1>
          <p>Saiba mais sobre a História / Curiosidades / Lojas, Samsung.</p>
          <Search />
          <p>
            <a
              href="https://marceldasilva.github.io/portfolio/"
              target="_blank"
            >
              Marcel Silva
            </a>{" "}
            © Copyright 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
