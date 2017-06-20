$(".header_b>ul>li").hover(function(){
	var ind = $(this).index()*150+"px";
	$(this).parent().css({"background-position-x":ind})
},function(){
	$(this).parent().css({"background-position-x":"150px"})
})