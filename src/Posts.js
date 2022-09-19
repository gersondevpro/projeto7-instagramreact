import React from "react"

function Post(props) {
    const curtidas = props.numeroCurtidas
    let [contador, setContador] = React.useState(props.numeroCurtidas)
    let [classeCurtida, setClasseCurtida] = React.useState("")

    function acrescentarCurtida() {
        if (contador === curtidas) {
            setContador(contador + 1)
            setClasseCurtida('red')
        } else {
            setContador(contador - 1)
        }
    }

    function salvarPost() {

    }

    return (
        <div class="post">

            <div class="header-main-post">
                <div class="header-post">
                    <img src={props.icone} class="icon-post" alt="Imagem do ícone" />
                    <p>{props.nome}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>

            <img src={props.imagem} class="img-principal" alt="Imagem postada" />

            <div class="footer-post">
                <div class="icones-img-principal">
                    <div>
                        <ion-icon name="heart-outline" onClick={acrescentarCurtida}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon class="salvar branco" name="bookmark-outline" onClick={salvarPost}></ion-icon>
                </div>
                <div class="likes">
                    <img src={props.iconeCurtida} alt="um perfil de quem curtiu" />
                    <p>Curtido por <span>{props.quemCurtiu}</span> e <span>outras {contador} pessoas</span></p>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {

    const posts = [
        {
            icone: "../img/meowed 1.png",
            nome: "meowed",
            imagem: "../img/gato-telefone 1.png",
            iconeCurtida: "../img/respondeai 1.png",
            quemCurtiu: "respondeai",
            numeroCurtidas: 101523
        },

        {
            icone: "../img/ports-logo.jpg",
            nome: "portstaubate",
            imagem: "../img/cheeseburger.jpg",
            iconeCurtida: "../img/filomoderna 1.png",
            quemCurtiu: "filomoderna",
            numeroCurtidas: 152407
        },

        {
            icone: "../img/barked 1.png",
            nome: "barked",
            imagem: "../img/dog 1.png",
            iconeCurtida: "../img/adorableanimals 1.png",
            quemCurtiu: "adorable_animals",
            numeroCurtidas: 99159
        }
    ]

    return (
        <>
            {posts.map((p) => <Post
                icone={p.icone}
                nome={p.nome}
                imagem={p.imagem}
                iconeCurtida={p.iconeCurtida}
                quemCurtiu={p.quemCurtiu}
                numeroCurtidas={p.numeroCurtidas}
            />)}
        </>
    )
}