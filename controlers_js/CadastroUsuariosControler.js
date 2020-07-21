$(this).ready(function () {
  loadFields();
  loadTable();
  selectedAction("insert");
});
var publicAction;

function loadFields() {
  $("#popAlertDanger").css("display", "none");
  $("#popAlertWarning").css("display", "none");
  $("#popAlertInfo").css("display", "none");

  var action = {
    action: "getcargo"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url:
      "http://localhost/estagio/controlers_php/CadastroUsuariosControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      var array = JSON.parse(datas);

      for (var i = 0; array.length > i; i++) {
        $("#cbxCargo").append(
          new Option(array[i].descricao_cargo, array[i].codigo_cargo)
        );
      }
    },
    error: function (jqXHR, response, errorThrown) {
      popAlert("error", errorThrown);
    }
  });
}

function loadTable() {
  var action = {
    action: "getallusers"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url:
      "http://localhost/estagio/controlers_php/CadastroUsuariosControler.php",
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
          $resposta[i].login +
          "</td><td>" +
          $resposta[i].codigo_cargo_usuario +
          "</td><td>" +
          $resposta[i].status +
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

$("#corpoTbRetorno").on("click", ".btn-danger", function () {
  // get the current row
  var currentRow = $(this).closest("tr");

  var col1 = currentRow.find("td:eq(0)").text();
  var col2 = currentRow.find("td:eq(1)").text();
  var col3 = currentRow.find("td:eq(2)").text();
  var col4 = currentRow.find("td:eq(3)").text();
  var col5 = currentRow.find("td:eq(4)").text();
  var col6 = currentRow.find("td:eq(5)").text();

  selectedAction("update");

  $("#txtCodigo").val(col1);
  $("#txtNome").val(col2);
  $("#txtLogin").val(col3);
  $("#cbxCargo").val(col4);

  if (col5 == "1") {
    $("#cbkAtivo").prop("checked", true);
  }
  popAlert("info", "Carregamento efetuado com sucesso!");
});

function validateFields() {
  var valid = true;

  if (!$("#txtNome").val()) {
    $("#txtNome").css("background", "#ff9999");
    valid = false;
  }

  if (!$("#cbxCargo").val() == "Selecionar") {
    $("#cbxCargo").css("background", "#ff9999");
    valid = false;
  }

  if (!$("#txtSenha").val()) {
    $("#txtSenha").css("background", "#ff9999");
    valid = false;
  }

  if (!$("#txtConfirmaSenha").val()) {
    $("#txtConfirmaSenha").css("background", "#ff9999");
    valid = false;
  }

  return valid;
}

function selectedAction(_action) {
  publicAction = _action;
}

function dbCommand(_action, _object) {
  var json = JSON.stringify(_object);

  $.ajax({
    type: "POST",
    url:
      "http://localhost/estagio/controlers_php/CadastroUsuariosControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      popAlert("info", "Retorno: " + response + " Mensagem: " + datas);
      if (_action == "update") {
        clearFields();
      }
      loadTable();
    },
    error: function (jqXHR, response, errorThrown) {
      popAlert("error", errorThrown);
    }
  });
}

$("#btnSalvar").click(function () {
  var user, active;

  if ($("#cbkAtivo").is(":checked")) {
    active = 1;
  } else {
    active = 0;
  }

  if (validateFields() == true) {
    user = {
      action: publicAction,
      codigo: $("#txtCodigo").val(),
      nome: $("#txtNome").val(),
      cargo: $("#cbxCargo")
        .children("option:selected")
        .val(),
      login: $("#txtLogin").val(),
      senha: $("#txtConfirmaSenha").val(),
      ativo: active
    };

    dbCommand("insert", user);
  } else {
    popAlert("error", "Verifique os campos do cadastro!");
  }
});

$("#btnAlterarFrm").click(function () {
  var user, active;

  if ($("#cbkAtivo").is(":checked")) {
    active = 1;
  } else {
    active = 0;
  }

  if (validateFields() == true) {
    user = {
      action: "update",
      codigo: $("#txtCodigo").val(),
      nome: $("#txtNome").val(),
      cargo: $("#cbxCargo")
        .children("option:selected")
        .val(),
      login: $("#txtLogin").val(),
      senha: $("#txtConfirmaSenha").val(),
      ativo: active
    };

    dbCommand("update", user);
  } else {
    popAlert("error", "Verifique os campos do cadastro!");
  }
});

$("#txtNome").click(function () {
  $("#txtNome").css("background", "#ffffff");
});

$("#txtSenha").click(function () {
  $("#txtSenha").css("background", "#ffffff");
});

$("#txtConfirmaSenha").click(function () {
  $("#txtConfirmaSenha").css("background", "#ffffff");
});

$("#cbkAtivo").click(function () {
  $("#cbkAtivo").css("background", "#ffffff");
});

$("#cbxCargo").click(function () {
  $("#cbxCargo").css("background", "#ffffff");
});

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

$("#btnNovo").click(function () {
  clearFields();
});

function clearFields() {
  $("#txtCodigo").val("");

  $("#txtNome").val("");

  $("#txtLogin").val("");

  $("#txtSenha").val("");

  $("#txtConfirmaSenha").val("");

  $("#cbxCargo").val("0");
}
