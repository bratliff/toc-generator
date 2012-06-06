// JavaScript Document// JavaScript Document

function init() {

	  var t=setTimeout("buildTOC()",1000);
	

};


window.onload = init();

// function to buid Table of Contents on all conference pages //

function buildTOC()
{
	
 	var headsToChange = document.getElementsByTagName("h2");
	var mainHead = document.getElementsByTagName("h1");
 
    var contentDiv = document.getElementsByClassName("entry-content");
    var num = contentDiv.length;

    var toc_list = document.createElement('ul');
	toc_list.setAttribute('id', 'pageLinks');

	var topLinkBox = document.createElement('div');
	topLinkBox.setAttribute('id', 'topBox');
	
	var linkToTop = document.createElement('a');
	linkToTop.setAttribute('href', '#top');
	
	var topTxt = document.createTextNode('Return to top ^');
	linkToTop.appendChild(topTxt);
	topLinkBox.appendChild(linkToTop);
	contentDiv[0].appendChild(topLinkBox);
	
  
    //listItem.appendChild(txt);
    //toc_list.appendChild(listItem);
  
     var divToAdd = contentDiv[0];
     var divChild = divToAdd.childNodes[1];
	 
	 if (headsToChange.length != 0) {
       divChild.appendChild(toc_list);
	 }

	 var i=0;
	 
	 while (i<= headsToChange.length) {
		 
		var thisHeader = headsToChange[i];
		var headerText = thisHeader.innerHTML;
		var thisAnchor = document.createElement('a');
		var thisLink = document.createElement('a');
		var anchorName = "header" + i;
		var newListItem = document.createElement('li');
		var liTxt = document.createTextNode(headerText);
		
		// make link attributes //
		thisAnchor.setAttribute('name', anchorName);
		thisLink.setAttribute('href', "#" + anchorName);
		//var txtToAdd = "<a name=" + anchorName + ">"
		
		thisLink.appendChild(liTxt);
		newListItem.appendChild(thisLink);
		toc_list.appendChild(newListItem);
		
		thisHeader.appendChild(thisAnchor);
		thisAnchor.innerHTML = headerText;
	
		var childText = thisHeader.childNodes[0];
		thisHeader.removeChild(childText);

		i++;
	 }

}