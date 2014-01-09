var apiData = require('./api-data');
var ko = require('knockout');

var vm = {
	apiData: apiData
};

ko.applyBindings(vm);
