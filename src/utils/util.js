import { is } from 'immutable';
 //判断访问终端
export const Browser = {
    versions: function () {
        let u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            // mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            mobile: u.indexOf('Mobile') > -1, //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq", //是否QQ
            mz: u.indexOf('MZ') > -1 //是否魅族自带浏览器, 视频fixed，播放后返回 不销毁
        };
    }()
};
export const getDateDiff = (dateTimeStamp) => {
	let minute = 60;
	let hour = minute * 60;
	let day = hour * 24;
	let month = day * 30;
	let year = month * 12;
	let now = new Date().getTime()/1000;
	let diffValue = now - dateTimeStamp;
	if(diffValue < 0) {
		return;
	}
	let yearC = diffValue / year;
	let monthC = diffValue / month;
	let weekC = diffValue / (7 * day);
	let dayC = diffValue / day;
	let hourC = diffValue / hour;
	let minC = diffValue / minute;
  let result = "";
	if(yearC >= 1) {
		result += parseInt(yearC) + "年前";
	} else if(monthC >= 1) {
		result += parseInt(monthC) + "月前";
	} else if(weekC >= 1) {
		result += parseInt(weekC) + "周前";
	} else if(dayC >= 1) {
		result += parseInt(dayC) + "天前";
	} else if(hourC >= 1) {
		result += parseInt(hourC) + "小时前";
	} else if(minC >= 1) {
		result += parseInt(minC) + "分钟前";
	} else
		result = "刚刚";
		return result;
};
export const RandomNumBoth = (Min,Max) => {
      let Range = Max - Min;
      let Rand = Math.random();
      let num = Min + Math.round(Rand * Range); //四舍五入
      return num;
}
export const propOrStateIsChange = (context,nextProps, nextState) => {
    return !(context.props === nextProps || is(context.props, nextProps)) ||
           !(context.state === nextState || is(context.state, nextState));
}
