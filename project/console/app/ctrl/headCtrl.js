define([
	'app/app',
], function (app) {
	'use strict';
	app.controller('headCtrl', ['$scope', function($scope){
		$scope.str = 'home pagw2';
		console.log('page2');
	}]);
});