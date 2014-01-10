var apiData = require('./api-data');
var ko = require('knockout');
var _ = require('underscore');

apiData.forEach(function(section) {
	section.content.forEach(function(subSection) {
		subSection.content.forEach(function(entry) {
			if (entry.sigs) {
				entry.sigsVisible = ko.observable(false);
			}
			entry.mouseOver = function() {
				if (entry.sigs) entry.sigsVisible(true);
			};
			entry.mouseLeave = function() {
				if (entry.sigs) entry.sigsVisible(false);
			};
		});
	});
});

var vm = {
	apiData: apiData
};

ko.applyBindings(vm);
