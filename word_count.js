var textList = document.getElementsByTagName('body')[0].textContent.replace(/\n/g, ' ').split(' ');
var wordTable = {};

for(var i = 0; i < textList.length; i++){
	var cur_word = textList[i].toLowerCase();
	wordTable[cur_word] = wordTable[cur_word] == undefined ? 1 : wordTable[cur_word]+1;
}

var searchTarget = prompt("Search Word", "");
if(searchTarget != null){
	if(wordTable[searchTarget] == undefined){
		alert("The word '" + searchTarget + "' does not exist in this document");
	}
	else{
		alert("There are " + wordTable[searchTarget] + " of the word '" + searchTarget + "' in this document");
	}
}
