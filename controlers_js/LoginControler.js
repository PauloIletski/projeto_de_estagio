$(this).ready(function () {
  loadFields();
});

function loadFields() {
  $("#popAlertDanger").css("display", "none");
  $("#popAlertWarning").css("display", "none");
  $("#popAlertInfo").css("display", "none");
}

$("#btnLogin").click(function () {
  if ($("txtLogin").val() == "" || $("txtSenha").val() == "") {
    popAlert("error", "Insira login e senha para proseguir!");
  } else {
    $login = $("#txtLogin").val();
    $senha = $("#txtSenha").val();

    var user = {
      login: $login,
      senha: $senha
    };
    jUser = JSON.stringify(user);

    doLogin(jUser);
  }
});

function doLogin(_user) {
  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/LoginControler.php",
    data: jUser,

    success: function (datas, response, jqXHR) {
      var retorno = JSON.parse(datas);
      if (retorno != 'null') {
        window.location.href = "../estagio/layouts/MenuPrincipal.html";
      }
      else {
        popAlert("error", "Usuario não encontrado, verifique login e senha");
      }
    },
    error: function (jqXHR, response, errorThrown) {
      popAlert("error", errorThrown);
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

$("#popAlertDanger").click(function () {
  $("#popAlertDanger").css("display", "none");
});
$("#popAlertWarning").click(function () {
  $("#popAlertWarning").css("display", "none");
});
$("#popAlertInfo").click(function () {
  $("#popAlertInfo").css("display", "none");
});
