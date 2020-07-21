$(this).ready(function() {
  loadFieldsProdutos();
  loadTableProdutos();
});

function loadFieldsProdutos() {
  $("#popAlertDanger").css("display", "none");
  $("#popAlertWarning").css("display", "none");
  $("#popAlertInfo").css("display", "none");
  $("#cbkAtivo").prop("checked", true);

  var action = {
    action: "getlab"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url:
      "http://localhost/estagio/controlers_php/CadastroLaboratoriosControler.php",
    data: json,

    success: function(datas, response, jqXHR) {
      var array = JSON.parse(datas);

      for (var i = 0; array.length > i; i++) {
        $("#cbxLaboratorio").append(
          new Option(array[i].nome_laboratorio, array[i].codigo_laboratorio)
        );
      }
    },
    error: function(jqXHR, response, errorThrown) {
      popAlert("error", errorThrown);
    }
  });
}

function validateFieldsProdutos() {
  var valid = true;

  if (!$("#txtProduto").val()) {
    $("#txtProduto").css("background", "#ff9999");
    valid = false;
  }
  return valid;
}

function loadTableProdutos() {
  var action = {
    action: "getall"
  };

  json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url:
      "http://localhost/estagio/controlers_php/CadastroProdutosControler.php",
    data: json,

    success: function(datas, response, jqXHR) {
      // popAlert("info", datas);
      $resposta = JSON.parse(datas);
      $("#corpoTbRetorno tr").remove();

      for (var i = 0; $resposta.length > i; i++) {
        $("#corpoTbRetorno").append(
          "<tr><td>" +
            $resposta[i].codigo_produto +
            "</td><td>" +
            $resposta[i].nome_produto +
            "</td><td>" +
            $resposta[i].codigo_laboratorio +
            "</td><td>" +
            $resposta[i].status_produto +
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
  $("#txtCodProduto").val("");
  $("#txtProduto").val("");
  $("#cbxLaboratorio").val("0");
  $("#cbkAtivo").prop("checked", true);
}

function dbCommandTiposProdutos(_action, _object) {
  var json = JSON.stringify(_object);

  $.ajax({
    type: "POST",
    url:
      "http://localhost/estagio/controlers_php/CadastroProdutosControler.php",
    data: json,

    success: function(datas, response, jqXHR) {
      popAlert(
        "info",
        "Retorno do servidor: " + response + " Mensagem:" + datas
      );
      clearFields();
      loadTableProdutos();
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
  var col4 = currentRow.find("td:eq(3)").text();

  $("#txtCodProduto").val(col1);
  $("#txtProduto").val(col2);
  $("#cbxLaboratorio").val(col3);

  if (col4 == "1") {
    $("#cbkAtivo").prop("checked", true);
  }
  popAlert("info", "Carregamento efetuado com sucesso!");
});

$("#btnSalvar").click(function() {
  var user, active;

  if (validateFieldsProdutos() == true) {
    user = {
      action: "insert",
      codigo: $("#txtCodProduto").val(),
      descricao: $("#txtProduto").val(),
      laboratorio: $("#cbxLaboratorio")
        .children("option:selected")
        .val(),
      ativo: 1
    };

    dbCommandTiposProdutos("insert", user);
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
  if ($("#txtCodProduto").val() != "") {
    if (validateFieldsProdutos() == true) {
      user = {
        action: "update",
        codigo: $("#txtCodProduto").val(),
        descricao: $("#txtProduto").val(),
        laboratorio: $("#cbxLaboratorio")
          .children("option:selected")
          .val(),
        ativo: active
      };

      dbCommandTiposProdutos("update", user);
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

$("#txtProduto").click(function() {
  $("#txtProduto").css("background", "#ffffff");
});
