import Botao from '../components/Botao'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Joana', 26, '1'),
    new Cliente('Shalom', 30, '2'),
    new Cliente('Leo', 35, '3'),
    new Cliente('Vivi', 26, '4')
  ]

  function clienteAlterado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluido... ${cliente.nome}`)
  }
  
  return (
    <h1 className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Botao cor="green" className="mb-4" >Novo Cliente</Botao>
        <Tabela clientes={clientes} 
                clienteAlterado={clienteAlterado}
                clienteExcluido={clienteExcluido}
        />
      </Layout>
    </h1>
  )
}