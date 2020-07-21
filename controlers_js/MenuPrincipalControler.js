$(this).ready(function () {
  loadFields();
});

function loadFields() {
  var action = {
    action: "get_user"
  };

  var json = JSON.stringify(action);

  $.ajax({
    type: "POST",
    url: "http://localhost/estagio/controlers_php/MenuPrincipalControler.php",
    data: json,

    success: function (datas, response, jqXHR) {
      var retorno = JSON.parse(datas);
      $("#username").text("Bem-Vindo: " + retorno['Nome']);
      removeMenus(retorno['Tipo']);

    },
    error: function (jqXHR, response, errorThrown) {
      alert("error", errorThrown);
    }
  });

  $("#btnSair").click(function () {

    var confirma = confirm("Deseja realmente sair do sistema?");

    if (confirma == true) {

      $.ajax({
        type: "POST",
        url: "http://localhost/estagio/controlers_php/Logout.php",
        data: json,

        success: function (datas, response, jqXHR) {
          if (datas == "deslogado") {
            window.location.href = "../Index.html";
          }
        },
        error: function (jqXHR, response, errorThrown) {
          alert("error", errorThrown);
        }
      });
    }

  });


  function removeMenus(_tipo) {

    switch (_tipo) {
      case "1":
      case "2":
        $("#navParametros").css("display", "none");
        $("#navRelatorios").css("display", "none");
        $("#navLogs").css("display", "none");
        break;
      case "4":
        $("#navParametros").css("display", "none");
        $("#menuProcesso").css("display", "none");
      default:
        break;
    }


  }
}
