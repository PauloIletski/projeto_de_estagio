$(this).ready(function () {
  loadFieldsTiposUsuarios();
  loadTableTiposUsuarios();
});

function loadFieldsTiposUsuarios() {
  $("#popAlertDanger").css("display", "none");
  $("#popAlertWarning").css("display", "none");
  $("#popAlertInfo").css("display", "none");
  $("#cbkTipoAtivo").prop("checked", true);
}

function validateFieldsTiposUsuarios() {
  var valid = true;

  if (!$("#txtTipoUsuario").val()) {
    $("#txtTipoUsuario").css("background", "#ff9999");
    valid = false;
  }
  return valid;
}

function loadTableTiposUsuarios() {
  var action = {
    action: "getalltiposusuarios"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url:
      "http://localhost/estagio/controlers_php/CadastroTiposUsuariosControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      $resposta = JSON.parse(datas);
      $("#corpoTbRetorno tr").remove();

      for (var i = 0; $resposta.length > i; i++) {
        $("#corpoTbRetorno").append(
          "<tr><td>" +
          $resposta[i].codigo_tipo_usuario +
          "</td><td>" +
          $resposta[i].descricao_tipo_usuario +
          "</td><td>" +
          $resposta[i].status_tipo_usuario +
          "</td><td>" +
          "<button type='button' class='btn btn-danger' id='btnGrid'>Alterar</button></tr>"
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
  $("#txtCodTipoUsuario").val("");
  $("#txtTipoUsuario").val("");
  $("#cbkTipoAtivo").prop("checked", true);
}

function dbCommandTiposUsuarios(_action, _object) {
  var json = JSON.stringify(_object);

  $.ajax({
    type: "POST",
    url:
      "http://localhost/estagio/controlers_php/CadastroTiposUsuariosControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      popAlert("info", datas);
      clearFields();
      loadTableTiposUsuarios();
    },
    error: function (jqXHR, response, errorThrown) {
      popAlert("error", errorThrown);
    }
  });
}

$("#corpoTbRetorno").on("click", ".btn-danger", function () {
  // get the current row
  var currentRow = $(this).closest("tr");

  var col1 = currentRow.find("td:eq(0)").text();
  var col2 = currentRow.find("td:eq(1)").text();
  var col3 = currentRow.find("td:eq(2)").text();

  $("#txtCodTipoUsuario").val(col1);
  $("#txtTipoUsuario").val(col2);

  if (col3 == "1") {
    $("#cbkTipoAtivo").prop("checked", true);
  }
  popAlert("info", "Carregamento efetuado com sucesso!");
});

$("#btnSalvar").click(function () {
  var user, active;
  if ($("#txtCodTipoUsuario").val() == "") {
    if (validateFieldsTiposUsuarios() == true) {
      user = {
        action: "insert",
        codigo: $("#txtCodTipoUsuario").val(),
        descricao: $("#txtTipoUsuario").val(),
        ativo: 1
      };

      dbCommandTiposUsuarios("insert", user);
    } else {
      popAlert("error", "Verifique os campos do cadastro!");
    }
  }
  else {
    popAlert("info", "Não é possivel cadastrar um valor já existente!");
  }
});

$("#btnAlterarFrm").click(function () {
  var user, active;

  if ($("#cbkTipoAtivo").is(":checked")) {
    active = 1;
  } else {
    active = 0;
  }

  if ($("#txtCodTipoUsuario").val() != "") {
    if (validateFieldsTiposUsuarios() == true) {
      user = {
        action: "update",
        codigo: $("#txtCodTipoUsuario").val(),
        descricao: $("#txtTipoUsuario").val(),
        ativo: active
      };

      dbCommandTiposUsuarios("update", user);
    } else {
      popAlert("error", "Verifique os campos do cadastro!");
    }
  } else {
    popAlert("alert", "Não é possível alterar um item não cadastrado!");
    clearFields();
  }
});

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

$("#txtTipoUsuario").click(function () {
  $("#txtTipoUsuario").css("background", "#ffffff");
});
