import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IProduto from "../../interfaces/IProduto";

export default function index() {
  document.title = "Editar Produtos";

  //Recuperando o ID com o HOOK useParams()
  const { id } = useParams();

  const navigate = useNavigate();

  // const produtoRecuperadoPorId = ListaProdutos.filter((produto)=>{
  //   if(produto.id == parseInt(id)){
  //           return produto;
  //       }
  //     });

  const [produto, setProduto] = useState<IProduto>({
    id: "",
    nome: "",
    preco: 0,
  });

  useEffect(() => {
    fetch(`http://localhost:8080/produtos/${id}`)
      .then((response) => response.json())
      .then((data) => setProduto(data));
  }, []);

  const handleChangeProduto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoProduto = { ...produto, [event.target.name]: event.target.value };
    setProduto(novoProduto);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`http://localhost:8080/produtos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    }).then(() => navigate("/produtos"));
    alert("Produto alterado com sucesso!");
    navigate("/produtos");
  };

  return (
    <>
      <h1>EditarProdutos</h1>
      <div>
        <form id="form-task" onSubmit={handleSubmit}>
          <div>
            <input type="hidden" name="id" />
          </div>
          <div className="input">
            <input
              className="input-field"
              type="text"
              name="nome"
              id="idNome"
              value={produto.nome}
              onChange={handleChangeProduto}
              required
            />
            <label className="input-label" htmlFor="idNome">
              Nome
            </label>
          </div>
          <div className="input">
            <input
              className="input-field"
              type="number"
              name="preco"
              id="idPreco"
              value={produto.preco}
              onChange={handleChangeProduto}
              required
            />
            <label className="input-label" htmlFor="idPreco">
              Preço
            </label>
          </div>
          <div className="action">
            <button type="submit">EDITAR</button>
          </div>
        </form>
      </div>
    </>
  );
}
