define([
	'angular',
	'router'
], function (angular, router) {
	'use strict';
	var myApp = angular.module('myApp', ['ui.router']);
	// app.controller('headCtrl', headCtrl);


	// 配置路由
	myApp.config(function($stateProvider, $urlRouterProvider) {
		// 没有指定路由，默认跳转主页
		$urlRouterProvider.otherwise('dashBoard');
		$stateProvider.state('dashBoard', {
			url: '/dashBoard',
			controller: function ($scope) {
				$scope.str = 'page1';
			},
			templateUrl: './app/view/dashBoard.html',
			resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    //异步加载controller／directive/filter/service
                    require([
                        'app/ctrl/dashBoard'
                    ], function() {
                    	deferred.resolve();
                    });
                    return deferred.promise;
                }]
            }
		}).state('page2', {
			url: 'page2',
			templateUrl: './app/view/head.html',
			controller: function ($scope) {
				$scope.str = 'page2';
			},
			resolve: {
                loadCtrl: ["$q", function($q) {
                    var deferred = $q.defer();
                    //异步加载controller／directive/filter/service
                    require([
                        'app/ctrl/headCtrl'
                    ], function() {
                    	deferred.resolve();
                    });
                    return deferred.promise;
                }]
            }
		});
	});

	// app.config(function($controllerProvider,$compileProvider,$filterProvider,$provide){
 //        app.register = {
 //            //得到$controllerProvider的引用
 //            controller : $controllerProvider.register,
 //            //同样的，这里也可以保存directive／filter／service的引用
 //            directive: $compileProvider.directive,
 //            filter: $compileProvider.register,
 //            service: $provide.service
 //        };
 //    });
	return myApp;
});