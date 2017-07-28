$(function(){

	var button = $('h3');
	button.after('<button>Перевод</button>');
	$('button').addClass('translate');
	$('.translate').css({marginLeft:'425px', marginTop:'20px'});
	$('.whiteSideArticleTrans').css({display:'none'});


	$('.translate').on('click', function(){
		$('p').toggle();
		$('.whiteSideArticleTrans').css({textIndent:'30px', padding:'40px', lineHeight:'30px'});
	});
});