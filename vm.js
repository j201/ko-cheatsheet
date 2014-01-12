apiData.forEach(function(section) {
	section.content.forEach(function(subSection) {
		subSection.content.forEach(function(entry) {
			entry.infoVisible = ko.observable(false);
			entry.mouseOver = function() {
				if (entry.desc || entry.usage) entry.infoVisible(true);
			};
			entry.mouseLeave = function() {
				entry.infoVisible(false);
			};

			if (entry.usage && !Array.isArray(entry.usage))
				entry.usage = [entry.usage]; // Hack to make the HTML bindings easier
		});
	});
});

var vm = {
	apiData: apiData
};

ko.applyBindings(vm);
