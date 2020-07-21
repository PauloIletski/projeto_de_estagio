$(this).ready(function() {
  loadFieldsCargos();
  loadTableCargos();
});

function loadFieldsCargos() {
  $("#popAlertDanger").css("display", "none");
  $("#popAlertWarning").css("display", "none");
  $("#popAlertInfo").css("display", "none");
  $("#cbkAtivo").prop("checked", true);
}

function validateFieldsCargos() {
  var valid = true;

  if (!$("#txtCargo").val()) {
    $("#txtCargo").css("background", "#ff9999");
    valid = false;
  }
  return valid;
}

function loadTableCargos() {
  var action = {
    action: "getallcargos"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/CadastroCargosControler.php",
    data: json,

    success: function(datas, response, jqXHR) {
      $resposta = JSON.parse(datas);
      $("#corpoTbRetorno tr").remove();

      for (var i = 0; $resposta.length > i; i++) {
        $("#corpoTbRetorno").append(
          "<tr><td>" +
            $resposta[i].codigo_cargo +
            "</td><td>" +
            $resposta[i].descricao_cargo +
            "</td><td>" +
            $resposta[i].status_cargo +
            "</td><td>" +
            "<button type='button' class='btn btn-danger' id='btnGrid'>Alterar</button></tr>"
        );
      }
    },
    error: function(jqXHR, response, errorThrown) {
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
  $("#txtCodCargo").val("");
  $("#txtCargo").val("");
  $("#cbkAtivo").prop("checked", true);
}

function dbCommandTiposCargos(_action, _object) {
  var json = JSON.stringify(_object);

  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/CadastroCargosControler.php",
    data: json,

    success: function(datas, response, jqXHR) {
      popAlert("info", "Retorno: " + response + " Mensagem:" + datas);
      clearFields();
      loadTableCargos();
    },
    error: function(jqXHR, response, errorThrown) {
      popAlert("error", errorThrown);
    }
  });
}

$("#corpoTbRetorno").on("click", ".btn-danger", function() {
  // get the current row
  var currentRow = $(this).closest("tr");

  var col1 = currentRow.find("td:eq(0)").text();
  var col2 = currentRow.find("td:eq(1)").text();
  var col3 = currentRow.find("td:eq(2)").text();

  $("#txtCodCargo").val(col1);
  $("#txtCargo").val(col2);

  if (col3 == "1") {
    $("#cbkAtivo").prop("checked", true);
  }
  popAlert("info", "Carregamento efetuado com sucesso!");
});

$("#btnSalvar").click(function() {
  var user, active;

  if (validateFieldsCargos() == true) {
    user = {
      action: "insert",
      codigo: $("#txtCodCargo").val(),
      descricao: $("#txtCargo").val(),
      ativo: 1
    };

    dbCommandTiposCargos("insert", user);
  } else {
    popAlert("error", "Verifique os campos do cadastro!");
  }
});

$("#btnAlterarFrm").click(function() {
  var user, active;

  if ($("#cbkAtivo").is(":checked")) {
    active = 1;
  } else {
    active = 0;
  }
  if ($("#txtCodCargo").val() != "") {
    if (validateFieldsCargos() == true) {
      user = {
        action: "update",
        codigo: $("#txtCodCargo").val(),
        descricao: $("#txtCargo").val(),
        ativo: active
      };

      dbCommandTiposCargos("update", user);
    } else {
      popAlert("error", "Verifique os campos do cadastro!");
    }
  } else {
    popAlert("alert", "Não é possível alterar um item não cadastrado!");
    clearFields();
  }
});

$("#popAlertDanger").click(function() {
  $("#popAlertDanger").css("display", "none");
});

$("#popAlertWarning").click(function() {
  $("#popAlertWarning").css("display", "none");
});

$("#popAlertInfo").click(function() {
  $("#popAlertInfo").css("display", "none");
});

$("#btnNovo").click(function() {
  clearFields();
});

$("#txtPesquisar").on("keyup", function() {
  var value = $(this)
    .val()
    .toLowerCase();
  $("#corpoTbRetorno tr").filter(function() {
    $(this).toggle(
      $(this)
        .text()
        .toLowerCase()
        .indexOf(value) > -1
    );
  });
});

$("#txtCargo").click(function() {
  $("#txtCargo").css("background", "#ffffff");
});
