//Contains actual game functions

function show(divName){ //displays a "main" div in compairson to other divs
	$("#MainPage").hide();
	$("#GamePage").hide();
	$("#ScorePage").hide();
	$("#" + divName).show();
}
function changeForm(){ //Displays correct number of fields for correct number of players
	var selector = $("#numOfPlayers").val();
	for(i=0;i<10;i++){
		if(i<selector){
			$("input[name='pName" + i + "']").show();
		}else{
			$("input[name='pName" + i + "']").hide();
		}
	}
}

function startGame(){ //Sets up scores dictionary, displays game
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
	show("GamePage");
	roundStart();
}

function roundStart(){ //Sets up the html
	var bossName = pName(currentBoss);
	$("#GamePage h1").text("Boss: " + bossName);
	$("#GamePage h2:first").text("Job: " + getJob());

	var table = $("#pastQuals table");
	for(i=0;i<numPlayers;i++){
		if (i==currentBoss){
			continue;
		}
		table.append("<tr><td>" + pName(i) + ": " + "</td></tr>");
	}

	if(currentBoss == 0){
		$("#currentQuals h3").text("Interviewee: " + pName(1));
	}else{
		$("#currentQuals h3").text("Interviewee: " + pName(0));
	}

	$("#currentQuals h2").text(getQual());
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
		button.text("Next Interviewee");
		button.attr("onclick", "nextInterviewee();");
	}
}

function nextInterviewee(){ //Runs on "Next Employee" click
	//Stores interviewee's qualifications in table
	var temp_quals = $("#currentQuals h4").text().split(" | "); //array of current interviewee's quals
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
		$("#currentQuals h3").text("Interviewee: " + pName(currentPlayer));
		nextQual();
		return;
	}
	//else, show the other thing
	$("#currentQuals").hide();
	setupPickWinner();
	$("#pickWinner").show();
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
	string+=$("#GamePage h2:first").text().slice(5);
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
	show("ScorePage");
}

function nextRound(){ //Runs on Next Round click
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
function endGame(){ //Runs on End Game click
	currentBoss = 0; //resets boss
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