$(document).ready(function(){
	var seconds = 59;
	
	var defaultValue= 25;

	var minutes;
	
	
	$('.plus').on('click',function(){
		defaultValue= defaultValue+1;
		$('.timer-text').html(defaultValue);
		minutes= defaultValue-1 ;

	});
	$('.minus').on('click',function(){
		
		if(defaultValue===0){
			$('.timer-text').html(0);
		}
		else {
			defaultValue= defaultValue-1;
		$('.timer-text').html(defaultValue);
		}
		minutes= defaultValue-1 ;

	});
	$('.reset').on('click',function(){
		defaultValue= 25;
		$('.timer-text').html(defaultValue);

		minutes= defaultValue-1 ;
	});
	

	$('.set').on('click',function(){
		minutes= defaultValue-1 ;
		var timer =setInterval(timeCalculator,1000);	
		$('.stop').on('click',function(){
			 clearInterval(timer);
		});	
	});

	function timeCalculator(){	
		
		$('#seconds').html(seconds);
		seconds= seconds-1;
		if(seconds<0){
			seconds=59;
			minutes= minutes-1;
			$('#minutes').html(minutes);
		}

		$('#minutes').html(minutes);
	
	}

	

});
