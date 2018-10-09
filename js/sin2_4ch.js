$(function()
{
	$("#sin2_4ch ul li").click(function()
	{
		var no=$(this).index();
		var pos=$(window).width() * no;
		
		$("html, body").stop().animate({"scrollLeft":pos},1000);
		return false;
	});
});
