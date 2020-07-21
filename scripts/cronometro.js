var intervalo;
var idTagHora;
var idTagMinuto;
var idTagSegundo


function diferenciarBotoes() {
	//preencher variaveis de acordo com o botão clicado
}


function tempo(op) {
	if (op == 1) {
		document.getElementById('parar').style.display = "block";
		document.getElementById('comeca').style.display = "none";
	}
	var s = 1;
	var m = 0;
	var h = 0;
	intervalo = window.setInterval(function () {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById("horaProducao").innerHTML = "0" + h + "h"; else document.getElementById("horaProducao").innerHTML = h + "h";
		if (s < 10) document.getElementById("segundoProducao").innerHTML = "0" + s + "s"; else document.getElementById("segundoProducao").innerHTML = s + "s";
		if (m < 10) document.getElementById("minutoProducao").innerHTML = "0" + m + "m"; else document.getElementById("minutoProducao").innerHTML = m + "m";
		s++;
	}, 1000);
}

function parar() {
	window.clearInterval(intervalo);


	//substituir pelos divs de timer
	document.getElementById('parar').style.display = "none";
	document.getElementById('comeca').style.display = "block";

	//inserir a verificação de tempo;
}

function volta() {
	document.getElementById('voltas').innerHTML += document.getElementById('hora').firstChild.data + "" + document.getElementById('minuto').firstChild.data + "" + document.getElementById('segundo').firstChild.data + "<br>";
}

function limpa() {
	document.getElementById('voltas').innerHTML = "";
}
window.onload = tempo;
