import { conectaApi } from "./conectaApi.js";

async function buscarVideo(evento) {
  evento.preventDefault();
  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscarVideo(dadosDePesquisa);
}

const botaoDePesquisa = document.querySelector("[data-botaoPesquisa]");

botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento));
