//获取当前样式
function getCSS(obj, style) {
	if (window.getComputedStyle) {
		return getComputedStyle(obj)[style];
	}
	return obj.currentStyle[style];
}

//获取当月的天数，以及当月第一天、30、31是周几
function getDate(year, month) {
	var result = {};
	var date = new Date();
	if(month == 2){
		//闰年
		if (year % 4 === 0) {
			result.days = 29;
		} else{
			result.days = 28;
		}
	} else if(month == 4 || month == 6 || month == 9 || month ==11){
		result.days = 30;
	} else{
		result.days = 31;
		//当月第31天使星期几
		result.day31Week = date.getDay(date.setFullYear(year, month-1, 31));
	}
	//当月第1天是星期几
	result.day1Week = date.getDay(date.setFullYear(year, month-1, 1));
	if (month != 2) {
		//当月第30天是周几
		result.day30Week = date.getDay(date.setFullYear(year, month-1, 30));
	}
	return result;
}

/*
*根据第一天是周几设置margin-left，使其在正确的位置上
*/
function move_day1(year, month) {
	var week1 = getDate(year, month).day1Week;
	day1.style.marginLeft = week1 % 7 * parseInt(getCSS(day1,'width')) + 'px';
}

//根据当月天数，隐藏多余天数
function hide_days(year, month){
	//恢复其他月份可能隐藏 的天数
	for(var i = 28; i < 31; i++){
		dayBox.children[i].style.display = 'block';
	}
	//隐藏当月多余天数
	var days = getDate(year, month).days;
	for(var i = days; i < 31; i++){
		dayBox.children[i].style.display = 'none';
	}
}