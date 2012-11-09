/**
 * @author 花名
 * @param {Date} dateStart
 * @param {Date} dateEnd
 * @param {Number} [days=365]
 * @return {Number}
 * @description 方法描述
 * @tag '时间','间隔'
 * @example 简要的例子
 */
var isOutOfDate = function(dateStart, dateEnd, days){
    var dateStart = dateStart, dateEnd = dateEnd, days = days || 365;
    dateStart = dateStart.replace(/[-\.]/g, '/');
    dateEnd = dateEnd.replace(/[-\.]/g, '/');
    dateStartTime = new Date(dateStart);
    dateEndTime = new Date(dateEnd);

    var timeBetween = dateEndTime.getTime() - dateStartTime.getTime();

    /** 起始日期大于结束日期 */
    if(timeBetween < 0){
        return -1;
    }
    /** 超过了规定的日期区间 */
    if((Math.abs(timeBetween)/3600000/24 + 1) > days){
        return 1;
    }

    return 0;

};