import { useEffect, useState } from 'react'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import ClienteRepositorio from '../core/ClienteRepositorio'

export default function Home() {
  
  const repo: ClienteRepositorio = new ColecaoCliente();
  
  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela') 
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(() => {
    obterTodos()
  }, [])

  function obterTodos(){
    console.log("obtertodos")
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteAlterado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('formulario')
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
    setVisivel('formulario')
  }

  return (
    <h1 className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
        {visivel === 'tabela' ? (
          <Tabela clientes={clientes} 
                clienteAlterado={clienteAlterado}
                clienteExcluido={clienteExcluido}
          />
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </h1>
  )
}