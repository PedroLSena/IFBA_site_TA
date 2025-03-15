const synth = window.speechSynthesis;

const reply = (text) => {
	const say = new SpeechSynthesisUtterance(text);
	say.voice = synth.getVoices()[17];
	say.rate = 1.1;
	say.pitch = 1;

	synth.speak(say);
};

// TODO: Adicionar texto falando do conteúdo do site

const text = "Adicionar o texto falando da apresentação";

const volumeHTML = document.getElementById("accessibility-volume");
volumeHTML.addEventListener("click", () => {
	reply(text);
});


// Abrir e fechar o menu no responsivo
document.addEventListener('DOMContentLoaded', function() {
	const menuToggle = document.querySelector('.menu-toggle');
	const ulHeader = document.querySelector('.ul-header');

	menuToggle.addEventListener('click', function() {
		ulHeader.classList.toggle('active');
		menuToggle.classList.toggle('active');
	});
});