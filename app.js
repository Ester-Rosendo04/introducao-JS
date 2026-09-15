const titulo = "Sistema de Mensagens";
const mensagens = [
    "Hello World!",
    "Olá, mundo!",
    "Bem-vindo à aplicação!",
    "Esta é uma nova mensagem."
];

const elementoTitulo = document.getElementById("titulo");
const elementoMensagens = document.getElementById("mensagens");

elementoTitulo.textContent = titulo;
elementoMensagens.textContent = mensagens;

