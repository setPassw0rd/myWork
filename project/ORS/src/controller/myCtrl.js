angular.module('myApp', ['/services/myService'])
	.controller('myCtrl',  ['currencyConverter', function (currencyConverter) {
		this.cost = 2;0
		this.qlt = 1;

		// 当前货币
		this.inCurr = 'EUR';

		this.usdToForeignRates = {
			USD: 1,
			EUR: 0.74,
			CNY: 6.09
		};

		this.currencies = currencyConverter.currencies;

		this.total = function total(outCurr) {
			return currencyConverter(this.qlt * this.cost, this.inCurr, outCurr);
		}

		this.pay = function pay() {
			window.alert('谢谢！');
		};

	}]);