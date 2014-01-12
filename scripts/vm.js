var apiData = require('./api-data');
var ko = require('knockout');
var _ = require('underscore');

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
		});
	});
});

var vm = {
	apiData: apiData
};

ko.applyBindings(vm);
