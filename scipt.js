const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Golf GTI é um carro esportivo que oferece um equilíbrio excepcional entre desempenho e conforto?",
        alternativas: [
            {
                texto: "O Golf GTI combina um motor potente com uma suspensão ajustada, proporcionando uma experiência de direção dinâmica sem comprometer o conforto no dia a dia.",
                afirmacao: "afirmacao1"
            },
            {
                texto: "Embora seja ágil e divertido de dirigir, alguns podem achar que o Golf GTI é mais voltado para a esportividade em detrimento do conforto, especialmente em trajetos mais longos.",
                afirmacao: "afirmacao2"
            }

        ]
    },
    {
        enunciado: "Como você pode ajudar a combater a disseminação de fake news, especialmente as que perpetuam o racismo?",
        alternativas: [
            {
                texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.",
                afirmacao: "afirmacao3"
            },
            {
                texto: "Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.",
                afirmacao: "afirmacao4"
            }

        ]
    },
    {
        enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
        alternativas: [
            {
                texto: "Defendendo políticas públicas que subsidiem a energia solar para famílias de baixa renda.",
                afirmacao: "afirmacao5"
            },
            {
                texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.",
                afirmacao: "afirmacao6"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraReultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    motraAlternativas();
}

function motraAlternativas (){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () =>
respostaelecionada(alternativa));
        caixaAlternativas.appendChild (botaoAlternativa);
    }
}
function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual ++
    mostraPergunta();
}
function motraResultado(){
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}
mostraPergunta();
