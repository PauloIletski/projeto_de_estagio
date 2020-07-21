var roteiros;

function consultar(numLote){
$.ajax({
    
    url: ""+numLote,
    data: "cLote",
    dataType: "json",
    success: function (response) {
      
        cod_prod = response[0]['CODPROD'];
        desc_prod=response[0]['DESCPROD'];

        $('#txtCodProduto').val(cod_prod);
        $('#txtDescProd').val(desc_prod);

       var quantidadeRoteiros = response[0]['ROTEIROS'].length;
       roteiros= response[0]['ROTEIROS'];       
       for(i=0;i<quantidadeRoteiros;i++){

          $("#cbxTipoProcesso").append(new Option(roteiros[i]['G2_DESCRI'],i));
        
                     

       }
    
      
    }


});
return roteiros;
}