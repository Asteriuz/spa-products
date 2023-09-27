import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "./Table.module.css";
import { useEffect, useState } from "react";

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

export default function index() {
  document.title = "Produtos";
  const [ListaProdutos, setListaProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/produtos")
      .then((response) => response.json())
      .then((data) => setListaProdutos(data));
  }, []);

  return (
    <>
      <h2>Produtos</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {ListaProdutos.map((produto, indice) => (
            <tr key={indice}>
              {/* <td>{produto.id}</td> */}
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td className={styles.action}>
                <Link to={`/editar/produtos/${produto.id}`}>
                  <AiFillEdit />
                </Link>{" "}
                |{" "}
                <Link to={`/excluir/produtos/${produto.id}`}>
                  <AiFillDelete />
                </Link>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={4}>
              <Link to="/adicionar/produtos">
                <AiFillPlusCircle size={30} />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
