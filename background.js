function resetDefaultSuggestion() {
	chrome.omnibox.setDefaultSuggestion({
    description: 'face: Search the Facebook API for %s'
    });
}
resetDefaultSuggestion();

function navigate(url) {
	chrome.tabs.query({active:true, currentWindow: true}, function (tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  	});
}

chrome.omnibox.onInputEntered.addListener(function(text) {
  navigate("https://www.facebook.com/search/results/?q=" + text);
});


  

