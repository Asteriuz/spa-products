import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// BLOCO DE ROTAS

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.js";
import Produtos from "./routes/Produtos/index.js";
import AdicionarProdutos from "./routes/AdicionarProdutos/AdicionarProdutos.js";
import Error404 from "./routes/Error404/Error404.js";
import EditarProdutos from "./routes/EditarProdutos/index.js";
import ExcluirProdutos from "./routes/ExcluirProdutos/index.js";

// Criando o objeto de rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/editar/produtos/:id", element: <EditarProdutos /> },
      { path: "/excluir/produtos/:id", element: <ExcluirProdutos /> },
      { path: "/adicionar/produtos", element: <AdicionarProdutos /> },
    ],
  },
]);

// BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
