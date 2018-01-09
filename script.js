//Contains actual game functions

var codePause= true;

function Turn(boss){
	console.log(getJob()); //display job
	for (p=0;p<players.length;p++){
	  if (players[p] == boss){ continue; }
		for (i=0;i<4;i++){
			console.log(getQual());
			while(codePause){};
		}
	}
	//increase score
	winner = "Player1";
	incScore(winner);
}

function show(divName){
	$("#MainPage").hide();
	$("#GamePage").hide();
	$("#ScorePage").hide();
	$("#" + divName).show();
}

function startGame(){
	numPlayers = $("#numOfPlayers").val();
	scores = {};
	for(i=0;i<numPlayers;i++){
		playername = $("input[name='pName" + i + "']").val();
		if (playername == ""){			
			scores["Player" + (i + 1)] = 0;
		}else{			
			scores[playername] = 0;
		}
	}
	//player1n = $("input[name='pName1']").val(); //gets playerName
	show("GamePage");
	roundStart();
}

function roundStart(){//Sets up the html
	var bossName = pName(currentBoss);
	$("#GamePage h1").text("Boss: " + bossName);
	$("#GamePage h2:first").text("Job: " + getJob());
	var table = $("#pastQuals table");
	for(i=0;i<numPlayers;i++){
		if (i==currentBoss){
			continue;
		}
		table.append("<tr><td>" + Object.keys(scores)[i] + ": " + "</td></tr>");
	}
	if(currentBoss == 0){
		$("#currentQuals h3").text("Interviewee: " + pName(1));
	}else{
		$("#currentQuals h3").text("Interviewee: " + pName(0));
	}
	$("#currentQuals h2").text(getQual());
	$("#currentQuals h4").text("");
}
function nextQual(){
	if(qualCounter != 0){
		$("#currentQuals h4").append(" | " + $("#currentQuals h2").text());
	}
	$("#currentQuals h2").text(getQual());
	qualCounter++;
	if(qualCounter == 4){
		var button = $("#currentQuals button");
		button.text("Next Employee");
		button.attr("onclick", "nextEmployee();");
	}
}
function nextEmployee(){
	//Store qualifications in table
	var temp_quals = $("#currentQuals h4").text().split(" | ");
	var table_row = $("#pastQuals table tr:nth-child(" + currentPlayer + ")");
	for(i=1;i<temp_quals.length;i++){
		table_row.append("<td>"+temp_quals[i]+"</td>");
	}
	table_row.append("<td>"+$("#currentQuals h2").text()+"</td>");
	//Reset counter, button, and other stuff
	$("#currentQuals h4").text("");
	qualCounter = 0;
	var button = $("#currentQuals button");
	button.text("Next Qualification");
	button.attr("onclick", "nextQual();");

	currentPlayer++;
	//Gets the next qualification (if not finished with turn)
	if(currentPlayer < numPlayers){
		$("#currentQuals h3").text("Interviewee: " + pName(currentPlayer));
		nextQual();
		return;
	}
	//else, show the other thing
	$("#currentQuals").hide();
	setupPickWinner();
	$("#pickWinner").show();
}
function setupPickWinner(){
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
function pickedWinner(winner){
	var string = winner + " is the new ";
	string+=$("#GamePage h2:first").text().slice(5);
	string+="!";
	$("#ScorePage h1").text(string);
	scores[winner]++;
	var scoreTable = $("#ScorePage h2");
	for(i=numPlayers-1;i>-1;i--){
		string = "<h3>" + pName(i) + ": " + scores[pName(i)] + "</h3>";
		scoreTable.after(string);
	}
	show("ScorePage");
}
function changeForm(){
	var selector = $("#numOfPlayers").val();
	for(i=0;i<6;i++){
		if(i<selector){
			$("input[name='pName" + i + "']").show();
		}else{
			$("input[name='pName" + i + "']").hide();
		}
	}
}
function softReset(){
	currentBoss = nextBoss();
	$("#ScorePage h3").remove(); //resets scoreboard
	$("#pickWinner button").remove(); //resets pickWinner
	$("#pastQuals table tr").remove(); //resets table rows
	$("#currentQuals").show(); //shows the game
	$("#pickWinner").hide(); //hides the pick section
	currentPlayer=1;
	roundStart();
	show("GamePage");
}
function hardReset(){
	currentBoss = 0;
	$("#ScorePage h3").remove(); //resets scoreboard
	$("#pickWinner button").remove(); //resets pickWinner
	$("#pastQuals table tr").remove(); //resets table rows
	$("#currentQuals").show(); //shows the game
	$("#pickWinner").hide(); //hides the pick section
	currentPlayer=1;
	show("MainPage");
}
 


/****How a Turn Works
One player is picked to be the job
One of the other players is picked to be the current job...person
Pick up to 4 qualifications at a time
Job picks a winner
then loop back
Have either an end button or a number of rounds

Turn will be saved in a function
#rounds is a for loop
end button is a while loop and a thing
write a reset function as well
*/