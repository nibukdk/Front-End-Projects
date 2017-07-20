$(document).ready(function(){
	var defaultValue= 25;
	$('.plus').on('click',function(){
		defaultValue= defaultValue+1;
		$('.timer-text').html(defaultValue);


	});
	$('.minus').on('click',function(){
		defaultValue= defaultValue-1;
		$('.timer-text').html(defaultValue);


	});
	$('.reset').on('click',function(){
		defaultValue= 25;
		$('.timer-text').html(defaultValue);


	});

	$('.set').on('click',function(){
		$('.clock').css('display','inline');
	});

});
