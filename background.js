chrome.commands.onCommand.addListener(function(command) {
	var currentIndex;
	var bookmark_node;
	var bookmark1;
	var bookmark2;
	var bookmark3;

	var getIndex = function(tab){
		var tabIndex = tab[0].index;
		currentIndex = tabIndex;
	};

	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, getIndex);

	/*chrome.bookmarks.getRootByName('speed_dial', function(results){
		bookmark_node = results.id
	});

	chrome.bookmarks.getSubTree(bookmark_node, function(results){
		bookmark1 = results[0];
		var test;
	});

	if ('create-bookmark' == command){
		chrome.tabs.create({
			'url': bookmark1
		});
	}*/
	
	chrome.tabs.query({
		currentWindow: true
	}, function(tabs) {
		if ('move-left' == command) {
			var tabID = tabs[currentIndex].id;
			var tabNew = tabs[currentIndex].index - 1;
			chrome.tabs.move(tabID, {index: tabNew});
		}
	});

	chrome.tabs.query({
		currentWindow: true
	}, function(tabs) {
		if ('move-right' == command) {
			var tabID = tabs[currentIndex].id;
			var lastIndex = tabs[tabs.length - 1].index;
			if (currentIndex == lastIndex) {
				var tabNew = 0
			} else {
				var tabNew = tabs[currentIndex].index + 1;
			}
			chrome.tabs.move(tabID, {index: tabNew});
		}
	});
});