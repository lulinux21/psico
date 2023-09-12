document.getElementById("abrirWhatsApp").addEventListener("click", function () {
  // Substitua "123456789" pelo número de telefone com o código do país (sem espaços ou caracteres especiais)
  var numeroWhatsApp = "5554996678840";

  // Substitua "Mensagem padrão" pela mensagem que deseja incluir
  var mensagemPadrao =
    "Olá, acessei o site e gostaria de agendar uma consulta com você :-D";

  // Crie a URL de deep link do WhatsApp com a mensagem padrão
  var urlWhatsApp =
    "https://wa.me/" +
    numeroWhatsApp +
    "?text=" +
    encodeURIComponent(mensagemPadrao);

  // Abra o WhatsApp
  window.location.href = urlWhatsApp;
});
