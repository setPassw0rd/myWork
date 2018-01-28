/*
*author: jiex
*create at: 2017/01/26
*description: personal javascript framework
*/

/*千分位分隔符*/
function thousandsMark (v) {
	var minus = '.';
	var minusDown = v.index('.');
	//将小数用'.'分割
	if (!minusDown) {
		minus = '';
		minusDown = 0;
	}
	var valueInt = v.slice(0, minusDown);
	var valueFloat = v.slice(minusDown, v.length);
	//将分割的前后部分进行千分位处理，再进行拼接
}
//整数千分位处理函数。取3的倍数进行添加','，首位少于3位长度的数字不加','
var IntThousands = function (value) {
	var  preLen = value.length % 3;
	var str = value.slice(0, preLen);
	var tempStr = value.slice(preLen, value.length);
	var result = '';
	for (var i = 0; i< tempStr.length; i = i + 3) {
		var temp = tempStr.slice(i, i + 3);
		var sult = tempStr.slice(i + 3, tempStr.length);
		result = result + ',' + temp + sult;
	}
};
IntThousands('1232424353');