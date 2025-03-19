const synth = window.speechSynthesis;
let isSpeaking = false; 

const reply = (text) => {
    if (isSpeaking) {
        synth.cancel(); 
        isSpeaking = false;
        return;
    }

    const say = new SpeechSynthesisUtterance(text);
    say.voice = synth.getVoices().find(voice => voice.lang === "pt-BR");
    say.rate = 1.1;
    say.pitch = 1;

    synth.speak(say);
    isSpeaking = true;

    say.onend = () => {
        isSpeaking = false;
    };
};

const text = "Este site contém informações sobre um evento de web acessível. No topo da página, há um menu com links para as seções principais: Sobre, Programação e Inscrição. Na seção Sobre, você encontra detalhes do evento e seus objetivos. Em Programação, há uma lista organizada dos palestrantes e horários das atividades. Em Inscrição, um formulário acessível permite cadastrar-se para participar. Além disso, há um QR Code disponível para acesso rápido por dispositivos móveis. Caso precise de ajuda, um botão de contato está disponível no final da página. Navegue pelo site usando o teclado ou leitor de tela. Esperamos que tenha uma ótima experiência!";

const volumeHTML = document.getElementById("accessibility-volume");
volumeHTML.addEventListener("click", () => {
    reply(text);
});