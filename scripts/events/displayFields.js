function displayFields(form, customHTML) {
	var activity = getValue('WKNumState');
	var s = 1;
	var m = 0;
	var h = 0;
	
	if (activity == 4 || activity == 0) {

		form.setHidePrintLink(true);
		form.setVisibleById("txtNumLote", true);
		form.setVisibleById("btnParada", false);
		form.setVisibleById("txtNumColab", true);

		/*
		 * ocultar pelo style e liberar via jscript
		 * form.setVisibleById("txtCodProd",false);
		 * form.setVisibleById("txtDescProd",false);
		 * form.setVisibleById("txtLinhaProd",false);
		 * form.setVisibleById("txtVelPadrao",false);
		 * form.setVisibleById("cbxTipoProcesso",false);
		 */

		form.setVisibleById("altParadass", false);
		form.setVisibleById("btnParada", false);
		form.setVisibleById("rbFOptfinaliza", false);
		form.setVisibleById("txtTempoParada", false);
		form.setVisibleById("cbMotivoParada", false);
		form.setVisibleById("txtQtdProd", false);
		form.setVisibleById("txtQtdRejeit", false);
		form.setVisibleById("rbFinParada", false);

		form.setEnabled("txtCodProd", false);
		form.setEnabled("txtDescProd", false);
	}

	if (activity == 11) {
		form.setHidePrintLink(true);
		form.setVisibleById("txtNumLote", false);
		form.setVisibleById("btnParada", true);
		form.setVisibleById("txtNumColab", false);
		form.setVisibleById("txtCodProd", false);
		form.setVisibleById("txtDescProd", false);
		form.setVisibleById("txtLinhaProd", false);
		form.setVisibleById("txtVelPadrao", false);
		form.setVisibleById("cbxTipoProcesso", false);
		form.setVisibleById("altParadas", false);
		form.setVisibleById("rbFOptfinaliza", false);
		form.setVisibleById("txtTempoParada", false);
		form.setVisibleById("cbMotivoParada", false);
		form.setVisibleById("txtQtdProd", false);
		form.setVisibleById("txtQtdRejeit", false);
		form.setVisibleById("rbFinParada", false);
		//form.setVisibleById("timerProducao", true);
		form.setVisibleById("btnConfimDadosIniciais",false);
		form.setVisibleById("btnIniciaProd",false);		
	}

	if (activity == 32) {

		form.setHidePrintLink(true);
		form.setVisibleById("txtNumLote", false);
		form.setVisibleById("btnParada", true);
		form.setVisibleById("txtNumColab", false);
		form.setVisibleById("txtCodProd", false);
		form.setVisibleById("txtDescProd", false);
		form.setVisibleById("txtLinhaProd", false);
		form.setVisibleById("txtVelPadrao", false);
		form.setVisibleById("cbxTipoProcesso", false);
		form.setVisibleById("altParadas", false);
		form.setVisibleById("rbFOptfinaliza", false);
		form.setVisibleById("txtTempoParada", false);
		form.setVisibleById("cbMotivoParada", false);
		form.setVisibleById("txtQtdProd", false);
		form.setVisibleById("txtQtdRejeit", false);
		form.setVisibleById("rbFinParada", false);
		form.setVisibleById("timerProducao", true);
		form.setVisibleById("btnConfimDadosIniciais",false);
		form.setVisibleById("btnIniciaProd",false);	
		from.setVisibleById("btnParada",false);
	}

	if (activity == 15) {

		form.setHidePrintLink(true);
		form.setVisibleById("txtNumLote", false);
		form.setVisibleById("btnParada", false);
		form.setVisibleById("txtNumColab", false);
		form.setVisibleById("txtCodProd", false);
		form.setVisibleById("txtDescProd", false);
		form.setVisibleById("txtLinhaProd", false);
		form.setVisibleById("txtVelPadrao", false);
		form.setVisibleById("cbxTipoProcesso", false);
		form.setVisibleById("altParadas", false);
		form.setVisibleById("rbFOptfinaliza", false);
		form.setVisibleById("txtTempoParada", false);
		form.setVisibleById("cbMotivoParada", true);
		form.setVisibleById("txtQtdProd", false);
		form.setVisibleById("txtQtdRejeit", false);
		form.setVisibleById("rbFinParada", false);
		form.setVisibleById("timerProducao", false);
		form.setVisibleById("btnConfimDadosIniciais",false);
		form.setVisibleById("btnIniciaProd",false);	
	}

	if (activity == 21) {
		form.setHidePrintLink(true);
		form.setVisibleById("txtNumLote", false);
		form.setVisibleById("btnParada", false);
		form.setVisibleById("txtNumColab", false);
		form.setVisibleById("txtCodProd", false);
		form.setVisibleById("txtDescProd", false);
		form.setVisibleById("txtLinhaProd", false);
		form.setVisibleById("txtVelPadrao", false);
		form.setVisibleById("cbxTipoProcesso", false);
		form.setVisibleById("altParadas", false);
		form.setVisibleById("rbFOptfinaliza", false);
		form.setVisibleById("txtTempoParada", false);
		form.setVisibleById("cbMotivoParada", false);
		form.setVisibleById("txtQtdProd", true);
		form.setVisibleById("txtQtdRejeit", true);
		form.setVisibleById("rbFinParada", false);
		form.setVisibleById("timerProducao", false);
		form.setVisibleById("btnConfimDadosIniciais",false);
		form.setVisibleById("btnIniciaProd",false);	
	}

	if (activity == 23) {
		form.setHidePrintLink(true);
		form.setVisibleById("txtNumLote", false);
		form.setVisibleById("btnParada", false);
		form.setVisibleById("txtNumColab", false);
		form.setVisibleById("txtCodProd", false);
		form.setVisibleById("txtDescProd", false);
		form.setVisibleById("txtLinhaProd", false);
		form.setVisibleById("txtVelPadrao", false);
		form.setVisibleById("cbxTipoProcesso", false);
		form.setVisibleById("altParadas", false);
		form.setVisibleById("rbFOptfinaliza", false);
		form.setVisibleById("txtTempoParada", false);
		form.setVisibleById("cbMotivoParada", false);
		form.setVisibleById("txtQtdProd", true);
		form.setVisibleById("txtQtdRejeit", true);
		form.setVisibleById("rbFinParada", false);
		form.setVisibleById("timerProducao", false);
		form.setVisibleById("btnConfimDadosIniciais",false);
		form.setVisibleById("btnIniciaProd",false);	
	}
	/*
	 * customHTML.append('<script>'); customHTML
	 * .append('$(\'*[name="txtCodProd"]\').css(\'display\', \'none\');var
	 * closers =
	 * $(\'*[name="txtCodProd"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="txtCodProd"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML.append('$(\'*[name="txtCodProd"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="txtDescProd"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="txtDescProd"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="txtDescProd"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML.append('$(\'*[name="txtDescProd"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="txtLinhaProd"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="txtLinhaProd"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="txtLinhaProd"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML.append('$(\'*[name="txtLinhaProd"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="txtVelPadrao"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="txtVelPadrao"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="txtVelPadrao"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML.append('$(\'*[name="txtVelPadrao"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="cbxTipoProcesso"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="cbxTipoProcesso"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="cbxTipoProcesso"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML
	 * .append('$(\'*[name="cbxTipoProcesso"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="txtTempoProd"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="txtTempoProd"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="txtTempoProd"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML.append('$(\'*[name="txtTempoProd"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="rbIniParada"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="rbIniParada"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="rbIniParada"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML.append('$(\'*[name="rbIniParada"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="rbFOptFinaliza"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="rbFOptFinaliza"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="rbFOptFinaliza"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML
	 * .append('$(\'*[name="rbFOptFinaliza"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="cbMotivoParada"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="cbMotivoParada"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="cbMotivoParada"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML
	 * .append('$(\'*[name="cbMotivoParada"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="txtQtdProd"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="txtQtdProd"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="txtQtdProd"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML.append('$(\'*[name="txtQtdProd"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="txtQtdRejeit"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="txtQtdRejeit"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="txtQtdRejeit"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML.append('$(\'*[name="txtQtdRejeit"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="txtTempoParada"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="txtTempoParada"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="txtTempoParada"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML
	 * .append('$(\'*[name="txtTempoParada"]\').closest("li").hide()');
	 * customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML .append('$(\'*[name="rbFinParada"]\').css(\'display\',
	 * \'none\');var closers =
	 * $(\'*[name="rbFinParada"]\').closest(\'.form-field\').find(\'input,
	 * textarea, select\');var hideDiv = true;$.each(closers, function(i, close)
	 * {if (close.style.display != \'none\' && close.type != \'hidden\')
	 * {hideDiv = false;}});if (hideDiv == true)
	 * {$(\'*[name="rbFinParada"]\').closest(\'.form-field\').css(\'display\',
	 * \'none\');}'); customHTML.append('</script>'); customHTML.append('<script>');
	 * customHTML.append('$(\'*[name="rbFinParada"]\').closest("li").hide()');
	 * customHTML.append('</script>');
	 */

}