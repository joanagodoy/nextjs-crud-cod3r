import { Props } from "next/script"
import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icons"

interface TabelaProps{
    clientes: Cliente[],
    clienteAlterado?: (cliente: Cliente) => void,
    clienteExcluido?: (cliente: Cliente) => void
    onClick?: () => void
}

export default function Tabela(props: TabelaProps){

    const mostrarAcoes = props.clienteAlterado || props.clienteExcluido

    function renderizarCabecalho(){
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {mostrarAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarConteudo(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="p-4">{cliente.id}</td>
                    <td className="p-4">{cliente.nome}</td>
                    <td className="p-4">{cliente.idade}</td>
                    {mostrarAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente){
        return (
            <td className="flex justify-center">
                {props.clienteAlterado ? 
                    <button onClick={() => props.clienteAlterado?.(cliente)} className={`flex justify-center items-center
                                        text-green-600 rounded-full p-2 m-1
                                        hover:bg-purple-50
                    `}>
                        {IconeEdicao}
                    </button>
                : false}
                {props.clienteExcluido ? 
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`flex justify-center items-center
                                        text-red-600 rounded-full p-2 m-1
                                        hover:bg-purple-50
                    `}>
                        {IconeLixo}
                    </button>
                : false}
            </td>
        )        
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarConteudo()}
            </tbody>
        </table>
    )
}