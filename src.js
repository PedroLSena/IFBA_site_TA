const synth = window.speechSynthesis;

const reply = (text) => {
	const say = new SpeechSynthesisUtterance(text);
	say.voice = synth.getVoices()[17];
	say.rate = 1.1;
	say.pitch = 1;

	synth.speak(say);
};

// TODO: Adicionar texto falando do conteúdo do site

const text = "Seminário Temático de Tecnologia e Inovação na Educação. Inteligência Artificial, Jogos Digitais e Acessibilidade: Conectando Tecnologia e Aprendizagem. Construindo a Web para Todos: Acessibilidade em Foco. Mais de 1 bilhão de pessoas no mundo têm alguma deficiência, e a acessibilidade na web é essencial para garantir igualdade de acesso. Pequenas mudanças no desenvolvimento podem tornar a internet mais inclusiva. Explore o site e contribua para um futuro digital acessível para todos! Participe do nosso evento sobre acessibilidade digital e descubra como tornar a web mais inclusiva! Aprenda com especialistas, explore ferramentas e transforme sua forma de desenvolver. Não perca essa oportunidade! O endereço é BR-324, Km 521 - Aviário em Feira de Santana, Bahia. Os organizadores desse seminário são a professora Neide Santos, reconhecida por sua competência e dedicação ao ensino, e professor Júlio César, destacado por sua dedicação e contribuição para o ensino. Às 13:30, daremos início ao evento com a mesa de abertura. Logo depois, às 14:00, acontecerá a Mesa Temática 01, onde vamos falar sobre Inteligência Artificial. Às 14:40, abriremos espaço para um debate sobre o tema. Já às 15:00, teremos a Mesa Temática 02, que discutirá Acessibilidade e Tecnologias da Informação. Em seguida, às 15:40, haverá mais um debate, permitindo a troca de ideias entre os participantes. Às 16:00, será a vez da exposição de projetos práticos, seguida por um cine-debate, onde vamos assistir e refletir juntos sobre conteúdos importantes. Para fechar o primeiro dia, às 17:00, teremos um momento cultural com apresentações artísticas. No segundo dia, às 14:00, acontecerão as oficinas e minicursos: Oficina 01: Acessibilidade WEB ministrada pela turma de Tecnologia Assistiva. Oficina 02: Desenvolvimento de jogos e ferramentas educacionais com a turma de desenvolvimento de jogos. Oficina 03: Ferramentas computacionais para apoio ao ensino com o professor Júlio. Para se inscrever no evento, você pode escanear o QR code no final do site ou clicar no link, ou clicar no botão para se inscrever";

const volumeHTML = document.getElementById("accessibility-volume");
volumeHTML.addEventListener("click", () => {
	reply(text);
});
