
var  panelPainelInicial=document.getElementById("painelInicial");
var  panelConfirmacaoDados=document.getElementById("confirmacaoDados");
var  panelConfirmacaoDados=document.getElementById("confirmacaoDados");
var  panelConfirmacaoEtapa=document.getElementById("confirmacaoEtapa");
var  panelFinal=document.getElementById("painelFinal");
var intervalo;
var idTagHora;
var idTagMinuto;
var idTagSegundo
var linhasRoteiros;
var numLote
function confirmaInicioClickEvent(){
     
    var confirmacao= confirm("Confirma os dados Iniciais?");

    if(confirmacao==true)
    {
        if(validarCampos()!=false)
        {
           numLote= document.getElementById("numLote").value;

           consultar(numLote);

           panelPainelInicial.style.display="none";            
           panelConfirmacaoDados.style.display="block";


          
        }
        else
        {
            alert("Por favor, preencha os campos com '*'!");
        }

    }
    
}

function onSelect(){
    
    linhawconsultar(numLote);
    var idroteiro = $("#cbxTipoProcesso").val();
    var linha=linhasRoteiros;
    console.log(linha[idroteiro]["G2_LINHAPR"]);
    if(linha[idroteiro]["G2_LINHAPR"]!="")
    {
        $("#txtLinhaProducao").val(linha[idroteiro]["G2_LINHAPR"]);
    }
    else
    {
        $("#txtLinhaProducao").val("Não informada");
    }

       
   
}

function validarCampos(){
 
    var txtNumeroLote= document.getElementById("numLote");
    var txtNumeroColaboradores=document.getElementById("numColaboradores");
    var txtVelocidadePadrao=document.getElementById("txtVelocidadePadrao");

    var status=true;
    if(txtNumeroLote.value==null || txtNumeroLote.value=="")
        status= false;

    if(txtNumeroColaboradores.value==null||txtNumeroColaboradores.value=="")
        status=false;


    
}


function confirmaSetupClickEvent(){
var confirmacao=confirm("Confirma o preenchimento das informações?");

if(confirmacao==true)
{
    if(validarCampos()!=false)
    {
        panelConfirmacaoDados.style.display="none";
        panelConfirmacaoEtapa.style.display="block";
    }
    else{
        alert("passou aqui")
    }
  }
}

function finalizarOperacaoClickEvent(){
   var confirmacao= confirm("Deseja realmente finalizar a operação?")

   if(confirmacao==true){
        panelConfirmacaoEtapa.style.display="none";
        panelFinal.style.display="block";
        tempo();
   }

}


function iniciarParadaClickEvent(){

}

function finalizarSetupClickEvent(){

}

function iniciarProducaoClickEvent(){

}



/*
function tempo(op) {
	if (op == 1) {
		document.getElementById('parar').style.display = "block";
		document.getElementById('comeca').style.display = "none";
	}
	var s = 1;
	var m = 0;
	var h = 0;
	intervalo = window.setInterval(function() {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById(idTagHora).innerHTML = "0" + h + "h"; else document.getElementById(idTagHora).innerHTML = h + "h";
		if (s < 10) document.getElementById(idTagSegundo).innerHTML = "0" + s + "s"; else document.getElementById(idTagSegundo).innerHTML = s + "s";
		if (m < 10) document.getElementById(idTagMinuto).innerHTML = "0" + m + "m"; else document.getElementById(idTagMinuto).innerHTML = m + "m";		
		s++;
	},1000);
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
window.onload=tempo;
*/