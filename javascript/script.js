//Contains actual game functions

function changeForm(){ //Displays correct number of fields for correct number of players + animations!
	var selector = $("#numOfPlayers").val();
	var timeoutCount = 50;
	for(i=2;i<selector;i++){
		var nSelector = "input[name='pName" + i + "']";
		if(!$(nSelector).is(":visible")){
			setTimeout(quickAnim, timeoutCount, nSelector, 'zoomIn');
			timeoutCount += 50;
		}
	}
	timeoutCount=50;
	for(i=9;i>selector-1;i--){
		var nSelector = "input[name='pName" + i + "']";
		if($(nSelector).is(":visible")){
			setTimeout(quickAnimHide, timeoutCount, nSelector, 'zoomOut');
			timeoutCount +=50;
		}
	}
}

function startGame(){ //Sets up scores dictionary, displays game
	quickAnimHide("#MainPage", "fadeOutLeft");
	numPlayers = $("#numOfPlayers").val(); //saves number of players from selection
	scores = {}; //reset dicitonary
	currentBoss = 0; //reset boss
	for(i=0;i<numPlayers;i++){ //Put the players names in the dictionary
		playername = $("input[name='pName" + i + "']").val();
		if (playername == ""){			
			scores["Player " + (i + 1)] = 0;
		}else{			
			scores[playername] = 0;
		}
	}
	roundStart();
}

function howTo(){
	quickAnimHide("#MainPage", "fadeOutLeft");
	setTimeout(quickAnim, 1000, "#HowTo", "fadeInLeft");
}
function goBack(){
	quickAnimHide("#HowTo", "fadeOutLeft");
	setTimeout(quickAnim, 1000, "#MainPage", "fadeInLeft");
}

function roundStart(){ //Sets up the html
	roundStartAnim();
	var bossName = pName(currentBoss);
	$("#GamePage h1").text("Employer: " + bossName);
	$("#GamePage h2:first").html("Wanted: <strong>" + getJob() + "</strong>");

	var table = $("#pastQuals table");
	for(i=0;i<numPlayers;i++){
		if (i==currentBoss){
			continue;
		}
		table.append("<tr><td>" + pName(i) + ": " + "</td></tr>");
	}

	if(currentBoss == 0){
		$("#currentQuals h3").text("Applicant: " + pName(1));
	}else{
		$("#currentQuals h3").text("Applicant: " + pName(0));
	}

	$("#currentQuals h2").text(getQual());
	qualCounter = 1;
	$("#currentQuals h4").text("");
}

function nextQual(){ //Runs on "Next Qualification" click
	if(qualCounter != 0){ //Show on previous qualifications
		$("#currentQuals h4").append(" | " + $("#currentQuals h2").text());
	}
	$("#currentQuals h2").text(getQual()); //get next qual
	qualCounter++;
	if(qualCounter == 4){ //If the number of qualifications is reached, change to next employee
		var button = $("#currentQuals button");
		button.text("Next Applicant");
		button.attr("onclick", "nextApplicant();");
	}
}

function nextApplicant(){ //Runs on "Next Employee" click
	//Stores Applicant's qualifications in table
	var temp_quals = $("#currentQuals h4").text().split(" | "); //array of current Applicant's quals
	var table_row = $("#pastQuals table tr:nth-child(" + currentPlayer + ")"); //get table row
	for(i=1;i<temp_quals.length;i++){ //insert qualifications one by one into table row
		table_row.append("<td>"+temp_quals[i]+"</td>");
	}
	table_row.append("<td>"+$("#currentQuals h2").text()+"</td>"); //insert current qual due to split command lol

	//Reset counter, button, and other stuff
	$("#currentQuals h4").text("");
	qualCounter = 0;
	var button = $("#currentQuals button");
	button.text("Next Qualification");
	button.attr("onclick", "nextQual();");

	currentPlayer++;
	//Gets the next qualification (if not finished with turn)
	if(currentPlayer < numPlayers){
		$("#currentQuals h3").text("Applicant: " + pName(currentPlayer));
		//quickAnim("#currentQuals h3", "bounce");
		nextQual();
		return;
	}
	//else, show the other thing
	quickAnimHide("#currentQuals", 'fadeOutLeft');
	setupPickWinner();
	setTimeout(quickAnim, 950, '#pickWinner', 'fadeInRight');
}

function setupPickWinner(){ //Runs when all applicants have interviewed
	//sets up the html for picking the winner
	var div = $("#pickWinner");
	for(i=0;i<numPlayers;i++){
		if (i==currentBoss){
			continue;
		}
		var string = "<button onclick=";
		string+='"pickedWinner(';
		string+="'";
		string+=Object.keys(scores)[i];
		string+="'";
		string+=');">';
		string+=Object.keys(scores)[i];
		string+="</button>"
		div.append(string);
	}
}

function pickedWinner(winner){ //Runs when a winner is picked
	//Displays winner text
	var string = winner + " is the new ";
	string+=$("#GamePage h2:first").text().slice(7);
	string+="!";
	$("#ScorePage h1").text(string);
	//Increments Score
	scores[winner]++;
	//Updates scoretable in ScorePage
	var scoreTable = $("#ScorePage h2");
	for(i=numPlayers-1;i>-1;i--){
		string = "<h3>" + pName(i) + ": " + scores[pName(i)] + "</h3>";
		scoreTable.after(string);
	}
	quickAnimHide("#GamePage", 'fadeOutLeft');
	setTimeout(quickAnim, 1000, '#ScorePage', 'fadeInRight');
}

function nextRound(){ //Runs on Next Round click
	quickAnimHide("#ScorePage", 'fadeOutLeft');
	setTimeout(function(){
	    $("#ScorePage h3").remove(); //resets scoreboard
	}, 1000);
	currentBoss = nextBoss();
	$("#pickWinner button").remove(); //resets pickWinner
	$("#pastQuals table tr").remove(); //resets table rows
	$("#currentQuals").show(); //shows the game
	$("#pickWinner").hide(); //hides the pick section
	currentPlayer=1;
	roundStart();
}
function endGame(){ //Runs on End Game click
	quickAnimHide("#ScorePage", 'fadeOutLeft');
	setTimeout(function(){
	    $("#ScorePage h3").remove(); //resets scoreboard
	}, 1000);
	currentBoss = 0; //resets boss
	$("#pickWinner button").remove(); //resets pickWinner
	$("#pastQuals table tr").remove(); //resets table rows
	$("#currentQuals").show(); //shows the game
	$("#pickWinner").hide(); //hides the pick section
	currentPlayer=1;
	setTimeout(quickAnim, 1000, '#MainPage', 'fadeInDown');
}