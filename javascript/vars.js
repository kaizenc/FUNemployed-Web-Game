/**Used to store cards & scores/players & Basic Functions**/

var jobs = ['Bartender', 'Psychic', 'Celebrity Impersonator ', 'Model ', 'Magician ', 'Author', 'Escort ', 'Queen ', 'Executioner', 'Dominatrix', 'Drill Sergeant', 'Game Show Host', 'Altar Boy', 'School Nurse', 'Motivational Speaker', 'Professional Athlete', 'Intern', 'Mad Scientist', 'Taxi Driver', 'Private Detective', 'B-Movie Actor', 'Fortune Cookie Writer', 'Plumber', 'Singer', 'Mime', 'Super Hero', 'Reality Show Contestant', 'Cheerleader', 'News Anchor', 'Therapist', 'Butler', 'Nanny', 'Tea Party Candidate', 'Archaeologist', 'Proctologist', 'Gym Teacher', 'Porn Star', 'Bounty Hunter', 'Masseuse', 'Televangelist', 'Child Actor', 'Competetive Eater', 'Used Car Salesman', 'Live Action Role Player', 'Stunt Double', 'Pimp ', 'Politician', 'Venture Capitalist', 'Personal Trainer', 'Pirate', 'Priest', 'Lawyer', 'Dictator', 'Flight Attendant', 'Wet Nurse', 'Gangster', 'World Record Holder', 'Gynecologist', 'Ice Cream Maker', 'Housewife', 'Auctioneer', 'TSA Agent', 'Butcher', 'Barista', 'Bachelor', 'Astronaut', 'Super Villain', 'UN Weapons Inspector', 'Secret Agent'];
var jobs_used = [];
var quals = ['Spaceship', 'Loose', 'Merit Badge', 'Fishnet Stockings', 'Confession', 'Black Hole', 'Brownies', 'Ambidextrous', 'Bipolar', 'Peg Leg', 'Dragon', 'Six Months Left to Live', 'Jacked Forearms', 'Box Wine', 'Handcuffs', 'K.O.', 'Slimy', 'Social Media Profile', 'Utility Belt', 'Born on the Streets', 'Cesspool', 'Fear', 'Expert', 'Deaf in One Ear', 'Emotionally Hollow', 'Student Loans', 'Box', 'S&M', 'Utterly Alone', 'Grunt', 'Whip', 'Open', 'Affirmative Action', 'Chainsaw', 'Sob Story', 'Secret Identity', 'Deep', 'Decoder Ring', 'Shady', 'Cape', 'Cavity', 'Chocolate', 'Stroke', 'Monocle', 'Split Personality', 'Brass Knuckles', 'Clammy', 'Night Terrors', 'Filter', 'Room to Grow', 'Extra Credit', 'Rock', 'Crabs', 'Uncontrollable Libido', 'The Perfect Alibi', 'Bitches', 'Foot Fetish', 'Boomerang', 'Recess', 'Sneaky', 'Diplomatic Immunity', 'Australian Accent', 'Conviction', 'No Sense of Humor', 'German Accent', 'Self-Respect', 'Grass', 'Minivan', 'Film', 'British Accent', 'False Teeth', 'Effeminate', 'Soundproof Room', 'Spirit', 'Heavy Flow', 'Survival Skills', 'Katana', 'Holy Grail', 'A Dollar', 'Tasteless', 'Cane', 'Piercing', 'Drive', 'Evil Laugh', 'Daddy Issues', 'Sloth', 'Erectile Dysfunction', 'Jackhammer', 'Lust', 'Handlebar Moustache', 'Liberal', 'Chastity Belt', 'Insatiable', 'Gold Cross', 'Fancy Hat', 'Chronic Masturbator', 'Self-Loathing', 'Mormon', 'Red Sea', 'Swear', 'Unstable', 'Million Dollar Smile', 'Bone', 'Nunchucks', 'Grit', 'Speech Impediment', 'Dirty', 'Mind Reader', 'Oedipus Complex', 'Plow', 'Sawed-Off Shotgun', 'Utterly Adorable', 'Cannibal', 'License', "Can't Lie", 'Scissors', 'S.T.D.', 'Field Experience', 'Wings', 'Camera', 'Medicine', 'Sees Dead People', 'Viral', 'Black Belt', 'Calendar Model', 'Soft Voice', 'Treats', 'Night Vision', 'Shame', 'Steroids', 'Genetically Engineered', 'Soft Hands', 'Jet Packs', 'Hook', 'Clinically Depressed', 'Russian Accent', 'Spray', 'Can Defuse Bombs', 'Cavernous', "Can't Feel", 'Screw', 'Scalpel', 'Nothing Left to Lose', 'Happy Ending', 'Topless', 'Pride', 'Envy', 'Communes with Fish', 'Tip', 'Stool', 'Poker Face', 'Soulless', 'Sidekick', 'Cougars', 'Drug Habit', 'Slur', 'Candy', 'Mace', 'Good Times in Tijuana', 'Short Attention Span', 'Spandex', 'Scented Candle', 'Moist', 'Obsessive Compulsive', 'Flaming Sword', 'Indecisive', 'Pyromaniac', 'Apples', 'Scientology', 'Sack', 'Firebreathing', 'Online Dating Profile', 'Three-Piece Suit', 'Shooting Blanks', 'Day Job', 'Crystal Ball', 'Consolation Prize', 'Indian Accent', 'Passive Agressive', 'A.I.', 'Rain', 'Magnum', 'Terrible Things', 'Fifty Tattoos', 'Rum', 'Thug Life', 'Trapped in the Closet', 'Wrath', 'Work Ethic', 'Experiments', 'Sad Childhood', 'Gambling Addiction', 'Conservative', 'Sports Car', 'Walker', 'Trust Fund', "Devil's Advocate", '1%', 'Numb Face', 'Time Machine', 'Wet Dream', 'V Card', 'Saggy', 'Green Card', 'Sexual Tyrannosaurus', 'Hot Dog', 'Jazz Hands', 'Hash', 'Every Problem Ever', 'Ripped', "Associate's Degree", 'Cold Black Heart', 'Raging Alcoholic', 'Claw', 'No Sense of Smell', 'Shed', 'Really Bad Aim', 'Heights', 'Southern Accent', 'Poor Judgement', 'Magic Wand', 'Greed', 'Massage Oil', 'Braces', 'High', 'Patient', 'Beefcake', 'Purple Drank', 'Hoverboard', 'God Complex', 'Slender Frame', 'Swag', 'Invisible Ink', 'Lisp', 'Combover', 'Chain', 'Treasure', 'Disorder', 'Uncontrollable Gas', 'Blunt', 'Dingo Repellent', 'Condoms', 'Gag Reflex', 'Shaved', 'Excuses', 'Decency', 'Sex Den', 'The Antidote', 'Beard', 'Red Light', 'Hot Mess', 'Original Sin', 'Taint', 'Nice Things', 'Hocus Pocus', 'Privilege', 'Camouflage', 'X-ray Vision', 'Nutcracker', 'Balls', 'Fifty Cats', 'Foam Sword', 'Shallow', 'Self-Entitled', 'Snatch', 'Trench Coat', 'Slutty', 'Tramp Stamps', 'Sweat', 'Boats', 'Fairy Dust', 'Red Panda', 'Private Jet', 'Tight Quarters', 'Erotica Collection', 'Furry', 'Italian Accent', 'Sheltered', 'Yoga Pants', 'Club', 'Edible Underwear', 'Brick', 'Telenovela', 'Rapid', 'Buddhism', 'Crack', 'Piece of Cake', 'Package', 'Six-Pack', 'Critical Mass', 'Gluttony', 'Tentacles', 'Wasp', 'Tickle', 'Apocalypse', 'Minion', 'Emotionally Unstable', 'Online Degree', 'Bad Luck', 'Opium Den', 'Cougar', 'El Diablo', 'French Accent', 'Addictive Personality', 'Level', 'Hungover', 'Disability', 'Illiterate', 'Hallucinates', 'Pathological Liar', 'Game Tester', 'Organic', 'Files', 'Captain', 'Burning Bush', 'Wheelchair', 'Trisexual', 'Handlebars', 'Coat Hanger', 'Pound', 'Implants', 'Hears Voices', 'Dungeon'];
var quals_used = [];

//counters
var scores = {}; //example, will populate with function later
var numPlayers = 0;
var currentBoss = 0;
var currentPlayer = 1; //tracks which player/employee is going up for quals
var qualCounter = 1;

//Helper Functions
function getJob(){
	if(jobs.length === 0){
		jobs = jobs.concat(jobs_used);
		jobs_used = [];
	}
	var index = Math.floor(Math.random() * jobs.length); //random var
	var result = jobs[index]; //returns result later
	jobs_used = jobs_used.concat(jobs.splice(index, 1)); //puts the jobs into used arr
	return result; //returns result
}
function getQual(){
	if(quals.length === 0){
		quals = quals.concat(quals_used);
		quals_used = [];
	}
	var index = Math.floor(Math.random() * quals.length); //random var
	var result = quals[index]; //returns result later
	quals_used = quals_used.concat(quals.splice(index, 1)); //puts the quals into used arr
	return result; //returns result
}
function nextBoss(){
	return (currentBoss+1 == numPlayers)?0:currentBoss+1; // basically cycles through the players properly
}
function pName(x){
	return Object.keys(scores)[x]; //return dictionary entry using index
}


/***********Animations*************/
//Animate Functions
function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	$('#MainPage .howPlay').hide();
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		$(nSelector).hide();
	}
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout(quickAnim, 400, '#MainPage .select', 'zoomIn',);
	setTimeout(quickAnim, 800, '#MainPage .boxes', 'zoomIn',);
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		setTimeout(quickAnim, 750+(75*i), nSelector, 'zoomIn',);
	}
	setTimeout(quickAnim, 1200, '#MainPage .startgame', 'zoomIn');
	setTimeout(quickAnim, 1250, '#MainPage .howPlay', 'zoomIn');
}
function roundStartAnim(){
	setTimeout(quickAnim, 1100, "#GamePage", "slideInDown");
	
	$("#GamePage").children().hide();
	$("#GamePage h1").show();
	var timeoutCounter = 2100;
	var timeoutInterval = 500;
	$("#GamePage").children().each(function () {
	  	if(!$(this).is("h1") && !$(this).is("div#pickWinner")){
	  		setTimeout(quickAnimObj, timeoutCounter, $(this), "slideInRight");
	  		timeoutCounter+=timeoutInterval;
	  	}
	});
	
}

//Animate Helper Functions
function quickAnim(selector, animName){
  $(selector).addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(animName + ' animated');
    $(this).show();
  });
};
function quickAnimObj(Obj, animName){
  Obj.addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    Obj.removeClass(animName + ' animated');
    Obj.show();
  });
};

function quickAnimHide(selector, animName){
  $(selector).addClass(animName + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  	$(this).hide();
    $(this).removeClass(animName + ' animated');
  });
};

animateTitle();

