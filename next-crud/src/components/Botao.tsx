interface BotaoProps{
    children: any
    className?: string
    cor?: 'green' | 'gray' | 'blue'
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'gray'
    return (
        <div className="flex justify-end">
            <button className={`
                bg-gradient-to-r from-${cor}-400 to-${cor}-700
                text-white px-4 py-2 rounded-t-md
                ${props.className}
            `}>
                {props.children}
            </button>
        </div>
    )
}