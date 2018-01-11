function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout("quickAnim('#MainPage .select', 'zoomIn')", 400);
	setTimeout("quickAnim('#MainPage .boxes', 'zoomIn')", 800);
	setTimeout("quickAnim('#MainPage .startgame', 'zoomIn')", 1200);

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

function changeForm2(){ //Displays correct number of fields for correct number of players
	var selector = $("#numOfPlayers").val();
	var timezz = 100;
	for(i=0;i<10;i++){
		nSelector = "input[name='pName" + i + "']";
		if(i<selector){
			if(!$(nSelector).is(":visible")){
				quickAnim(nSelector, 'zoomIn');
			}
		}else{
			if($(nSelector).is(":visible")){
				quickAnimHide(nSelector, 'zoomOut');
			}
		}
	}
}

animateTitle();
