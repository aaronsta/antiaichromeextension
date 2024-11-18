
function getResourceContent(fileName) {
    return fetch(chrome.runtime.getURL(fileName))
    .then(resp => resp.json());
}

    
function giveAntiAIResources(text) {
	var popup = document.createElement('div');
    popup.style.visibility = 'visible';
    popup.style.backgroundColor = '#555';
    popup.style.color = '#fff';
    popup.style.textAlign = 'center';
    popup.style.borderRadius = ' 6px';
    popup.style.padding = '8px 0';
    popup.style.position = 'absolute';
    popup.style.zIndex = '10';
    //popup.style.bottom = '125%';
    popup.style.left = '50%';
    popup.style.top = '125px';
    popup.innerText = text;
    popup.id = 'myPopup';
	var myEle = document.getElementsByTagName("img")[1];
	var par = myEle.parentNode;
	myEle.appendChild(popup);
	par.insertBefore(popup, myEle);
}

var aiFact, aiSource,stopAIText;
var aiFactNum;
var max = 2;
var min = 0;
aiFactNum = Math.round(Math.random() * (max - min) + min);

(async () => {
    const content = await getResourceContent("./antiaifacts.json");
   	aiFact = content["facts"][aiFactNum]["text"];
   	aiSource = content["facts"][aiFactNum]["source"];
    stopAIText = "'" +aiFact + "' \n" + aiSource;
})();



setTimeout(function(){
	giveAntiAIResources(stopAIText);
}, 2000);


