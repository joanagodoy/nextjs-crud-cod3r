import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'

export default function Home() {
  
  const { 
    novoCliente, 
    clienteAlterado, 
    clienteExcluido, 
    salvarCliente,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela
  
  } = useClientes();
  
  return (
    <h1 className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
        {tabelaVisivel ? (
          <Tabela clientes={clientes} 
                clienteAlterado={clienteAlterado}
                clienteExcluido={clienteExcluido}
          />
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </h1>
  )
}