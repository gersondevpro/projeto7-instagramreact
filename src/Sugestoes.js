function Sugestao(props) {
    return (
        <div class="perfil">
            <div class="perfil-individual">
                <img src={props.imagem} alt="imagem de perfil"/>
                <div class="text-right">
                    <p>{props.nomePerfil}</p>
                    <p>Segue você</p>
                </div>
            </div>
            <p class="follow">Seguir</p>
        </div>
    )
}

export default function Sugestoes() {

    const perfis = [
        {imagem: "./img/badvibesmemes 1.png", nomePerfil: "bad.vibes.memes"},
        {imagem: "./img/chibirdart 1.png", nomePerfil: "chibirdart"},
        {imagem: "./img/razoesparaacreditar 1.png", nomePerfil: "razoesparaacreditar"},
        {imagem: "./img/adorableanimals 1.png", nomePerfil: "adorable_animals"},
        {imagem: "./img/smallcutecats 1.png", nomePerfil: "smallcutecats"}
    ]

    return (
        <div>
            <div class="sugestions">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
            <div class="perfis">
                {perfis.map((p) => <Sugestao
                    imagem={p.imagem}
                    nomePerfil={p.nomePerfil}
                />)}
            </div>
        </div>
    )
} 