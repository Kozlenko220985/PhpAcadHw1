$(function(){
	$('.leftLink').on('click', 'a', function () {
		var message = $('<a href="white.html">Hi</a>');
		$(this).closest('.leftLink').append(message);
		$('.leftLink').find('a').css({left:'310px'});
		$(this).remove();
	});
	$('.rightLink').on('click', 'a', function () {
		var message = $('<a href="darck.html">Are you sure?</a>');
		$(this).closest('.rightLink').append(message);
		$('.rightLink').find('a').css({right:'240px'});
		$(this).remove();
	});

});