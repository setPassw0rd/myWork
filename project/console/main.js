var config = {
	baseUrl: './',
	paths: {
		'app': 'app',
		'angular': 'lib/angular.min',
		'router': 'lib/angular-ui-router.min',
		'jquery': 'lib/jquery.min',
		'bootstrap': 'lib/bootstrap.min'
	},
	shim: {
		'angular': {
			'exports': 'angular'
		},
		'router': {
			'deps': ['angular']
		}
	}
};

require.config(config);

// 检测require、angular是否引入正确
require(['angular','router'], function(angular){
    console.info(angular.version);
});

// 启动项目
require(['app/app'], function (app) {
	angular.bootstrap(document, [app.name]);
});                                                              