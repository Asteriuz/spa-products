import { useNavigate, useParams } from "react-router-dom";
import styles from "./Remove.module.css";
import IProduto from "../../interfaces/IProduto";
import { useEffect, useState } from "react";

export default function index() {
  document.title = "Excluir Produtos";

  const { id } = useParams();
  const [produto, setProduto] = useState<IProduto>();

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:8080/produtos/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/produtos"));
    alert("Produto excluído com sucesso!");
    navigate("/produtos");
  };

  useEffect(() => {
    fetch(`http://localhost:8080/produtos/${id}`)
      .then((response) => response.json())
      .then((data) => setProduto(data));
  }, []);

  return (
    <div>
      <div>
        <h2>Excluir Produtos</h2>
        <div>
          <h3>Você tem certeza que deseja excluir o produto abaixo?</h3>
          <p>Nome do Produto : {produto?.nome}</p>
          <p>Preço do Produto : {produto?.preco}</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleDelete}>EXCLUIR</button>
          <button onClick={() => navigate("/produtos")}>CANCELAR</button>
        </div>
      </div>
    </div>
  );
}
