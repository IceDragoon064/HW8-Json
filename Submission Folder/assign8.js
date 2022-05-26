/**
 * Javascript that will generate a mad lib story 
 * @author Leon Lu
 * @version May 25, 2022
 * This function starts the story generation by gathering values from the four inputs
 * Also check if any input is empty, send an alert, and stop any process
 */
function StartStory() {
	var characterName = document.getElementById("cName").value;
	if(characterName == ""){
		alert("Character name is empty");
		return;
	}
	
	var objectName = document.getElementById("oName").value;
	if(objectName == ""){
		alert("Object name is empty");
		return;
	}
	var adjectiveWord = document.getElementById("adjective").value;
	if(adjectiveWord == ""){
		alert("Adjective is empty");
		return;
	}
	var adverbWord = document.getElementById("adverb").value;
	if(adverbWord == ""){
		alert("Adverb is empty");
		return;
	}

	SetTitle(characterName);
	SetStory(characterName, objectName, adjectiveWord, adverbWord);
	document.getElementById("storyBox").style.display = "block";
}

/**
 * This function set the title of the story and the <title> html tag
 * @param userName the character name that will be added to the title
 */
function SetTitle(userName) {
	var uName = userName;
	var title = userName + "'s Crazy Mad Libs Story!";
	document.getElementById("storyTitle").innerHTML = title;
	document.getElementById("siteTitle").innerHTML = title;
}

/**
 * Set up the story by combining array elements and span elementFromPoint
 * @param cName the character name the user input
 * @param oName the object name the user input
 * @param adj the adjective the user input 
 * @param adv the adverb the user input
 */
function SetStory(cName, oName, adj, adv) {
	/**
	 * Create an array that stores the story broken up into separate elements
	 * When added to the story, any of the parameters would be added in between the elements
	 * Example: storyArray[0] + <span>cName</span> + storyArray[1]
	 */
	const storyArray = 
	["So, you want to hear a story about our old pal, ",  		// Add cName
	 "? Well, let's say they have a ", 							// Add adj
	 " obssession with the ",									// Add oName
	 ". So much so, that ",										// Add cName
	 " would ",													// Add adv
	 " rush to the ",											// Add oName
	 " anytime ",												// Add cName
	 " sees the ",												// Add oName
	 ". But, you didn't hear that from me, the ",				// Add adj and oName
	 "."];
	
	// Create span element that will be colored to dark red from assign8.css
	var cNameSpan = "<span>" + cName + "</span>";
	var oNameSpan = "<span>" + oName + "</span>";
	var adjSpan = "<span>" + adj + "</span>";
	var advSpan = "<span>" + adv + "</span>";
	
	// Combine the array elements and span to make the story
	var story = document.getElementById("storyEntry");
	story.innerHTML = 
	  storyArray[0] + cNameSpan
	+ storyArray[1] + adjSpan
	+ storyArray[2] + oNameSpan
	+ storyArray[3] + cNameSpan
	+ storyArray[4] + advSpan
	+ storyArray[5] + oNameSpan
	+ storyArray[6] + cNameSpan
	+ storyArray[7] + oNameSpan
	+ storyArray[8] + adjSpan + " " + oNameSpan 
	+ storyArray[9];
}