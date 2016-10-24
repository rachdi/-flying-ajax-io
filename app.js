(function(){

	var app = {

		init : function() {
			this.listeners();
		},

		listeners : function() {
			$("#go").on("click", this.getData.bind(this));
			// listener sur bouton meteo :
			$("#btnMeteo").on("click", this.getMeteo.bind(this));
		},

		getData : function() {
			$.ajax("http://192.168.1.21:3000/places")
			.done(this.ajaxDone)
			.fail(this.ajaxFail)
			.always(this.ajaxAlways)
		},

		ajaxDone : function(response) {
			var listPlaces = response.places;
			for (var i = 0; i < listPlaces.length; i++) {
				$("ul").append("<li>" + listPlaces[i].nom + "</li>")

				if (listPlaces[i].nom === "IoT Valley") {
					$("#password").html(listPlaces[i].password);
				}
			}
		},

		ajaxFail : function() {
			alert("fail !");
		},

		ajaxAlways : function() {
			console.log("complete");
		},

		getMeteo : function() { 
			$.ajax('http://api.openweathermap.org/data/2.5/weather?id=2972315&APPID=e05300d9bacf77c059ab39927fd4909d')
			.done(this.meteoDone)
			.fail(this.meteoFail)
			.always(this.meteoAlways)

		},

		meteoDone : function(response) {
			console.log(response);
			// à reprendre par ici : on récupère un objet meteo mais il reste à le traiter
		},

		meteoFail : function() {
			console.log("meteoFail");
		},

		meteoAlways : function() {
			console.log("meteoAlways");
		}

	}


http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY} 
app.init();

})();


