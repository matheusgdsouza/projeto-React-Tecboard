export function CardEvento({ evento }) {
    return (
        <div className="card-evento">
            <img src={evento.capa} alt={evento.titulo} />
            <div className="evento-body">
                <p className="tema-evento">{evento.tema.nome}</p>
                <p className="evento-data">{evento.data.toLocaleDateString('pt-BR')}</p>
                <h4 className="evento-titulo">{evento.titulo}</h4>
                <p className="descricao-evento">{evento.descricao}</p>
            </div>
        </div>
    )
}