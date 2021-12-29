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
  
  return (
    <h1 className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </h1>
  )
}
