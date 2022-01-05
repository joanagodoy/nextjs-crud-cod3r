import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente();
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm()

    useEffect(obterTodos, [])

    function obterTodos(){
        console.log("obtertodos")
        repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
        })
    }

    function clienteAlterado(cliente: Cliente){
        setCliente(cliente)
        exibirFormulario()
    }

    function clienteExcluido(cliente: Cliente){
        repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente){
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente(){
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return{
        cliente,
        clientes,
        obterTodos,
        clienteAlterado,
        clienteExcluido,
        salvarCliente,
        novoCliente,
        tabelaVisivel,
        exibirTabela

    }

}