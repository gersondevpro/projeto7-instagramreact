function Story(props) {
    return(
        <div class="story">
            <img src="img/stories_background.jpg" alt="borda stories" class="border"/>
            <p>{props.nome}</p>
            <img src={props.icone} alt="imagem ícone" class="img-story"/>
        </div>
    )
}

export default function Stories() {

    const stories = [
        {nome: "9gag", icone: "../img/9gag 1.png"},
        {nome: "meowed", icone: "../img/meowed 1.png"},
        {nome: "barked", icone: "../img/barked 1.png"},
        {nome: "nathanwpyl", icone: "../img/nathanwpylestrangeplanet 1.png"},
        {nome: "wawawiwa", icone: "../img/wawawiwacomicsa 1.png"},
        {nome: "respondeai", icone: "../img/respondeai 1.png"},
        {nome: "filomoderna", icone: "../img/filomoderna 1.png"},
        {nome: "memeriago", icone: "../img/memeriagourmet 1.png"},
    ]

    return(
        <div class="stories">
            {stories.map((s) => <Story nome={s.nome} icone={s.icone} />)}
        </div>
    )
}