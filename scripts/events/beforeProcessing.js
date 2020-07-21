function beforeProcessing(form) {

	var activity = gatValue('WKNumState');
	
	var intervalo;
	var s = 1;
	var m = 0;
	var h = 0;
	
	if (actitity == 32) {

		intervalo = window
				.setInterval(
						function() {
							if (s == 60) {
								m++;
								s = 0;
							}
							if (m == 60) {
								h++;
								s = 0;
								m = 0;
							}

							if (h < 10)
								document.getElementById("horaProd").innerHTML = "0"
										+ h + "h";
							else
								document.getElementById("horaProd").innerHTML = h
										+ "h";
							if (s < 10)
								document.getElementById("segundoProd").innerHTML = "0"
										+ s + "s";
							else
								document.getElementById("segundoProd").innerHTML = s
										+ "s";
							if (m < 10)
								document.getElementById("minutoProd").innerHTML = "0"
										+ m + "m";
							else
								document.getElementById("minutoProd").innerHTML = m
										+ "m";
							s++;
						}, 1000);

		var visible = document.getElementById("timerProducao").style.display;
		if (visible == "none") {

			document.getElementById("timerProducao").style.display = "block";
		} else {
			document.getElementById("timerProducao").style.dysplay = "none";
		}

	}

}