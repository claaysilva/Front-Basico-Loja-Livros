$(document).ready(function () {
  // Botão "Ver Mais" - exibir o popup com a descrição completa
  $(".ver-mais").on("click", function () {
    const card = $(this).closest(".card");
    const title = card.find(".card-title").text();
    const text = card.find(".card-text-full").text();

    $(".popup-title").text(title);
    $(".popup-text").text(text);
    $(".popup-overlay").fadeIn();
  });

  // Botão "Fechar" - esconder o popup
  $(".fechar-popup").on("click", function () {
    $(".popup-overlay").fadeOut();
  });
});

var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
