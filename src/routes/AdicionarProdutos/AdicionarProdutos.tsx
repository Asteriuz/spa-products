import React from "react";
import { useNavigate } from "react-router-dom";
import IProduto from "../../interfaces/IProduto";
import { v4 as uuidv4 } from "uuid";

export default function AdicionarProdutos() {
  document.title = "Adicionar Produtos";

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const novoProduto: IProduto = {
      id: uuidv4(),
      nome: event.currentTarget.nome.value,
      preco: Number(event.currentTarget.preco.value),
    };

    fetch("http://localhost:8080/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoProduto),
    }).then(() => navigate("/produtos"));

    navigate("/produtos");
  };

  return (
    <>
      <h2>Adicionar Produtos</h2>
      <form id="form-task" onSubmit={handleSubmit}>
        <div className="input">
          <input
            className="input-field"
            type="text"
            name="nome"
            id="nome"
            required
          />
          <label className="input-label" htmlFor="nome">
            Nome
          </label>
        </div>
        <div className="input">
          <input
            className="input-field"
            type="number"
            name="preco"
            id="preco"
            required
          />
          <label className="input-label" htmlFor="preco">
            Preço
          </label>
        </div>
        <div className="action">
          <button type="submit">Adicionar</button>
        </div>
      </form>
    </>
  );
}
