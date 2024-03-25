document.addEventListener('DOMContentLoaded', function(){
    var getTabTitleButton = document.getElementById('getTabTitleBtn');
    var tabTitleDiv = document.getElementById('tabTitle');


    getTabTitleButton.addEventListener('click', function(){
        chrome.tabs.query({active : true, currentWindow: true}, function(tabs){
            var tab = tabs[0];
            tabTitleDiv.textContent = tab.title;
        });
    });
});