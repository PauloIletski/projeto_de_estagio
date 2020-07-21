$(this).ready(function () {
  loadFieldsEtapas();
  loadTableEtapas();
});

function loadFieldsEtapas() {
  $("#popAlertDanger").css("display", "none");
  $("#popAlertWarning").css("display", "none");
  $("#popAlertInfo").css("display", "none");
  $("#cbkAtivo").prop("checked", true);
}

function validateFieldsEtapas() {
  var valid = true;

  if (!$("#txtEtapa").val()) {
    $("#txtEtapa").css("background", "#ff9999");
    valid = false;
  }
  return valid;
}

function loadTableEtapas() {
  var action = {
    action: "getalletapas"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/CadTipoEtapaControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      $resposta = JSON.parse(datas);
      $("#corpoTbRetorno tr").remove();

      for (var i = 0; $resposta.length > i; i++) {
        $("#corpoTbRetorno").append(
          "<tr><td>" +
          $resposta[i].codigo_tipo_etapa +
          "</td><td>" +
          $resposta[i].descricao_tipo_etapa +
          "</td><td>" +
          $resposta[i].status_tipo_etapa +
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
  $("#txtCodEtapa").val("");
  $("#txtEtapa").val("");
  $("#cbxCargo").val("0");
  $("#cbkAtivo").prop("checked", true);
}

function dbCommandTiposEtapas(_action, _object) {
  var json = JSON.stringify(_object);

  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/CadTipoEtapaControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      popAlert("info", datas);
      clearFields();
      loadTableEtapas();
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

  $("#txtCodEtapa").val(col1);
  $("#txtEtapa").val(col2);

  if (col3 == "1") {
    $("#cbkAtivo").prop("checked", true);
  }
  popAlert("info", "Carregamento efetuado com sucesso!");
});

$("#btnSalvar").click(function () {
  var user, active;
  if ($("#txtCodEtapa").val() == "") {
    if (validateFieldsEtapas() == true) {
      user = {
        action: "insert",
        codigo: $("#txtCodEtapa").val(),
        descricao: $("#txtEtapa").val(),
        ativo: 1
      };

      dbCommandTiposEtapas("insert", user);
    } else {
      popAlert("error", "Verifique os campos do cadastro!");
    }
  }
  else {
    popAlert("info", "Não é possível salvar um registro já cadastrado!")
  }

});

$("#btnAlterarFrm").click(function () {
  var user, active;

  if ($("#cbkAtivo").is(":checked")) {
    active = 1;
  } else {
    active = 0;
  }
  if ($("#txtCodEtapa").val() != "") {
    if (validateFieldsEtapas() == true) {
      user = {
        action: "update",
        codigo: $("#txtCodEtapa").val(),
        descricao: $("#txtEtapa").val(),
        ativo: active
      };

      dbCommandTiposEtapas("update", user);
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

$("#txtEtapa").click(function () {
  $("#txtEtapa").css("background", "#ffffff");
});
