import react from "react"
import React from "react"

export default function Usuario() {
    const [nome, setNome] = React.useState("Catana")

    function alterarNome() {
        const novoNome = prompt("Qual nome deseja colocar nesse perfil?")
        setNome(novoNome)

        if(novoNome === "" || novoNome === null) {
            setNome("Catana")
            alert("Nome inválido! Insira um nome válido por favor!")
        }
    }

    let [imagem, setImagem] = React.useState("./img/catanacomics 1 (1).png")
    function alterarImagem() {
        const novaImagemPerfil = prompt("Digite a URL de sua nova imagem de perfi:")
        setImagem(novaImagemPerfil)

        if(!novaImagemPerfil.includes("http") || novaImagemPerfil === "" || novaImagemPerfil === null) {
            setImagem("./img/catanacomics 1 (1).png")
            alert("Imagem inválida! Insira uma imagem válida por favor!")
        }
    }
    
    return (
        <div class="top-menu-right">
            <img src={imagem} alt="imagem de perfil meu usuario" class="catana" onClick={alterarImagem}/>
            <div>
                <p>catanacomics</p> 
                <p>{nome}
                    <span class="iconeEditar" onClick={alterarNome}><ion-icon name="pencil-outline"></ion-icon></span>
                </p>
            </div>
        </div>
    )
} 