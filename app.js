const mensagens = [
    "Hello World!",
    "Olá, mundo!",
    "Bem-vindo à aplicação!",
    "Esta é uma nova mensagem."
];
const lista = document.getElementById("lista-mensagens");

for (let i = 0; i < mensagens.length; i++) {
    const paragrafo = document.createElement("p");

    paragrafo.textContent = mensagens[i];

    lista.appendChild(paragrafo);
}