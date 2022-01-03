import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')
    return (
        <div>
            {id ? (
                <Entrada label="Código"  tipo="text" valor={id}  className="mb-4" somenteLeitura></Entrada>
            ) : false}
            <Entrada label="Nome"  tipo="text" valor={nome} className="mb-4"></Entrada>
            <Entrada label="Idade"  tipo="number" valor={idade}></Entrada>
            <div className="flex justify-end mt-3">
                <Botao cor="green" className="mr-2">
                    {id ? "Alterar" : "Salvar"}
                </Botao>
                <Botao cor="gray">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}