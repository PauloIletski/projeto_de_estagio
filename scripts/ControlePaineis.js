window.onload = inicio;
function inicio() {
  var panelConfirmacaoDados;
  var panelConfirmacaoEtapa;
  var panelProcessoParada;
  var panelJustificativaParada;
  var panelFinal;
  var timerProducao;
  var timerSetup;
  var timerParada;

  panelConfirmacaoDados = document.getElementById("confirmacaoDados");
  panelConfirmacaoDados.style.display = "none";

  panelConfirmacaoEtapa = document.getElementById("confirmacaoEtapa");
  panelConfirmacaoEtapa.style.display = "none";

  panelProcessoParada = document.getElementById("processoParada");
  panelProcessoParada.style.display = "none";

  panelJustificativaParada = document.getElementById("justificativaParada");
  panelJustificativaParada.style.display = "none";

  panelFinal = document.getElementById("painelFinal");
  panelFinal.style.display = "none";

  timerProducao = document.getElementById("timerParada");
  timerProducao.style.display = "none";

  timerSetup = document.getElementById("timerSetup");
  timerSetup.style.display = "none";

  timerParada = document.getElementById("timerProducao");
  timerParada.style.display = "none";

  $("#selecionarProduto").css("display", "none");
  $("#popAlertDanger").css("display", "none");
  $("#popAlertWarning").css("display", "none");
  $("#popAlertInfo").css("display", "none");
  $("#mensagemFinal").css("display", "none");
}
