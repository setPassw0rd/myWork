angular.module('myService', [])
	.factory('currencyConcerter', function(){
		var currencies = ['USD', 'EUR', 'CNY'];
		var usdToForeignRates = {
			USD: 1,
			EUR: 0.74,
			CNY: 6.09
		};
		return {
			currencies: currencies,
			convert: convert
		};

		function convert(amount, inCurr, outCurr) {
			return amount * usdToForeignRates[outCurr] * 1
				/ usdToForeignRates[inCurr];
		}
	});