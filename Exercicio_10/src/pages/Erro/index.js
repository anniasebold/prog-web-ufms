import { Link } from "react-router-dom";

function Erro() {
  return (
    <div>
      <h1>404</h1> <br /> <br />
      <h2>Página não encontrada</h2> <br />
      <Link to="/">Pagina Home</Link> <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Erro;
