import { NavLink } from "react-router-dom";

// styles
import meuLogo from "../images/meu-logo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img src={meuLogo} alt="Logo" />
        </NavLink>
        <ul>
          <NavLink to="/história">História</NavLink>
          <NavLink to="/curiosidades">Curiosidades</NavLink>
          <NavLink to="/lojas">Lojas</NavLink>
          <NavLink to="/produtos">Produtos</NavLink>
        </ul>
      </nav>
    </header>
  );
};
