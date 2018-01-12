function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout(quickAnim, 400, '#MainPage .select', 'zoomIn',);
	setTimeout(quickAnim, 800, '#MainPage .boxes', 'zoomIn',);
	setTimeout(quickAnim, 1200, '#MainPage .startgame', 'zoomIn');
}

function quickAnim(selector, animName) {
  $(selector).addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(animName + ' animated');
  });
};
function quickAnimHide(selector, animName) {
  $(selector).addClass(animName + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  	$(this).hide();
    $(this).removeClass(animName + ' animated');
  });
};

function changeForm2(){ //Displays correct number of fields for correct number of players + animations!
	var selector = $("#numOfPlayers").val();
	var timeoutCount = 100;
	for(i=0;i<selector;i++){
		var nSelector = "input[name='pName" + i + "']";
		if(!$(nSelector).is(":visible")){
			setTimeout(quickAnim, timeoutCount, nSelector, 'zoomIn');
			timeoutCount += 100;
		}
	}
	timeoutCount=100;
	for(i=9;i>selector-1;i--){
		var nSelector = "input[name='pName" + i + "']";
		if($(nSelector).is(":visible")){
			setTimeout(quickAnimHide, timeoutCount, nSelector, 'zoomOut');
			timeoutCount +=100;
		}
	}
}

animateTitle();
