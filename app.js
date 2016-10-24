( function (){
	$("#go").click(function(){
		var start = $.ajax({
			url:"http://192.168.1.21:3000/places",function(){
				method : 'GET',
			})
	}
	.done(function(){
		console.log("second succ");
		console.log(start);
	})
	.fail(function(){
		console.log("error");
	})
	.always(function(){
		console.log("finished");
	})
	start.always(function(){
		console.log("second finished");
	})
});
});