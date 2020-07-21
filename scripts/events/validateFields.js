function validateForm(form) {
	var activity = getValue('WKNumState');

	if (activity == 4 || activity == 0) {

		if (form.getValue('txtNumLote') == null
				|| form.getValue('txtNumLote') == "")
			throw "O número de lote deve ser preenchido!";
		if (form.getValue('txtNumColab') == null
				|| form.getValue('txtNumColab') == "")
			throw "O numero de colaboradores em linha deve ser informado";
	}

	if (activity == 11) {
		if (form.getValue('cbxTipoProcesso') == null
				|| form.getValue('cbxTipoProcesso') == "")
			throw "Selecione o tipo de processo!";

		if (form.getValue('txtLinhaProd') == null
				|| form.getValue('txtLinhaProd') == "")
			throw "Insira a linha de produção";

	}

	if (activity == 32) {

	}

	if (activity == 15) {

		if (form.getValue('cbMotivoParada') == null
				|| form.getValue('cbMotivoParada') == null)
			throw "Informe o Motivo da parada";

	}

	if (activity == 21) {

		if (form.getValue('txtQtdProd') == null
				|| form.getValue('txtQtdProd') == "")
			throw "Informe a quantidade produzida";

		if (form.getValue('txtQtdRejeit') == null
				|| form.getValue('txtQtdRejeit') == "")
			throw "Informe a quantidade rejeitada";

	}

	if (activity == 23) {

		if (form.getValue('txtQtdProd') == null
				|| form.getValue('txtQtdProd') == "")
			throw "Informe a quantidade produzida";

		if (form.getValue('txtQtdRejeit') == null
				|| form.getValue('txtQtdRejeit') == "")
			throw "Informe a quantidade rejeitada";
	}

	/*
	 * if ((form.getValue("txtNumLote") == null || form.getValue("txtNumLote") ==
	 * "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 &&
	 * getValue('WKCompletTask') == 'true'))) { throw "Numero de lote n\u00E3o
	 * pode ser vazio."; } if ((form.getValue("txtNumColab") == null ||
	 * form.getValue("txtNumColab") == "") && (getValue('WKNumProces') == null ||
	 * (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	 * throw "Colaboradores em linha n\u00E3o pode ser vazio."; } if
	 * ((form.getValue("txtQtdProd") == null || form.getValue("txtQtdProd") ==
	 * "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 &&
	 * getValue('WKCompletTask') == 'true'))) { throw "Qtd Produzida n\u00E3o
	 * pode ser vazio."; } if ((form.getValue("txtQtdRejeit") == null ||
	 * form.getValue("txtQtdRejeit") == "") && (getValue('WKNumProces') == null ||
	 * (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	 * throw "Qtd Rejeitada n\u00E3o pode ser vazio."; } if (activity == 4 ||
	 * activity == 0) { if ((form.getValue("txtNumLote") == null ||
	 * form.getValue("txtNumLote") == "") && (getValue('WKNumProces') == null ||
	 * (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
	 * throw "Preencha o campo Numero de Lote!"; } if
	 * ((form.getValue("txtNumColab") == null || form .getValue("txtNumColab") ==
	 * "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 &&
	 * getValue('WKCompletTask') == 'true'))) { throw "Preencha a quantidade de
	 * colaboradores em linha!"; } }
	 */
}