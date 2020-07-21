$(this).ready(function () {
  loadFieldsParadas();
  loadTableParadas();
});

function loadFieldsParadas() {
  $("#popAlertDanger").css("display", "none");
  $("#popAlertWarning").css("display", "none");
  $("#popAlertInfo").css("display", "none");

}

function loadTableParadas() {
  var action = {
    action: "getloguser"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/CadastroUsuariosControler.php",
    data: json,

    success: function (datas, response, jqXHR) {

      $resposta = JSON.parse(datas);

      $("#corpoTbRetorno tr").remove();

      for (var i = 0; $resposta.length > i; i++) {
        $("#corpoTbRetorno").append(
          "<tr><td>" +
          $resposta[i].codigo_usuario +
          "</td><td>" +
          $resposta[i].nome_usuario +
          "</td><td>" +
          $resposta[i].codigo_tipo_usuario +
          "</td><td>" +
          $resposta[i].codigo_cargo_usuario +
          "</td><td>" +
          $resposta[i].login +
          "</td><td>" +
          $resposta[i].status +
          "</td><td>" +
          $resposta[i].acao +
          "</td><td>" +
          $resposta[i].usuario +
          "</td><td>" +
          $resposta[i].hora +
          "</td>"
        );
      }
    },
    error: function (jqXHR, response, errorThrown) {
      alert("error", errorThrown);
    }
  });
}

function popAlert(_type, _message) {
  switch (_type) {
    case "error":
      $("#popAlertDanger").text(_message + "  (Fechar)");
      $("#popAlertDanger").css("display", "block");
      break;
    case "alert":
      $("#popAlertWarning").text(_message + "  (Fechar)");
      $("#popAlertWarning").css("display", "block");
      break;
    case "info":
      $("#popAlertInfo").text(_message + "  (Fechar)");
      $("#popAlertInfo").css("display", "block");
      break;
    default:
      break;
  }
}

function clearFields() {
  $("#txtCodigoParada").val("");
  $("#txtDescricaoParada").val("");
  $("#cbkAtivo").prop("checked", true);
}




$("#popAlertDanger").click(function () {
  $("#popAlertDanger").css("display", "none");
});

$("#popAlertWarning").click(function () {
  $("#popAlertWarning").css("display", "none");
});

$("#popAlertInfo").click(function () {
  $("#popAlertInfo").css("display", "none");
});

$("#btnNovo").click(function () {
  clearFields();
});

$("#txtPesquisar").on("keyup", function () {
  var value = $(this)
    .val()
    .toLowerCase();
  $("#corpoTbRetorno tr").filter(function () {
    $(this).toggle(
      $(this)
        .text()
        .toLowerCase()
        .indexOf(value) > -1
    );
  });
});

$("#txtDescricaoParada").click(function () {
  $("#txtDescricaoParada").css("background", "#ffffff");
});
