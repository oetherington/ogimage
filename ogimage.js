container = document.getElementById("container");

function on_executed(result) {
	if (result.length == 0)
		container.innerHTML = "No og:image found";
	else
		container.innerHTML = "<img src='" + result + "' />";
}

function on_error(error) {
	container.innerHTML = "No og:image found";
}

browser.tabs.executeScript({
	code:	'(function() {' +
			'	var metas = document.getElementsByTagName("meta");' +
			'	for (var i = 0; i < metas.length; i++)' +
			'		if (metas[i].getAttribute("property") == "og:image")' +
			'			return metas[i].getAttribute("content");' +
			'	return "";' +
			'})();'
}).then(on_executed, on_error);
