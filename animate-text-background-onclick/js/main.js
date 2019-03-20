$(document).ready(function(){
	$('.value').on('click',function(event){
		$('.value.value-hilighted').toggleClass('value-hilighted value-hilighted-off');
		//$('.value.value-hilighted').addClass('value-hilighted-off');
		$(event.target).closest('.value').toggleClass('value-hilighted value-hilighted-off');
	})
});