document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "Queridos professores, hoje é o dia de celebrar vocês, " +
        "Nas linhas de cada históia da vida, há sempre um trecho que conta a experiência de um personagem especias, os professores!"+
        "Helô Coelho";
    });
});

