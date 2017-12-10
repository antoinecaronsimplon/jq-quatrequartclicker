$(document).ready(function()
{	
	var counter= 0;
	$('.cake').click(function(){
		counter ++;
		$('.counter span').text(counter);
		if(counter % 20 === 0){
			alert("counter");
		}
	});
});	