module.exports = {
    getShowTime(start,end){
       
        var date = new Date(start*1000);
        var date2 = new Date(end*1000)
        // console.log(date,date2)
        if(start===end){
            return date.getFullYear() + "." +
            ((date.getMonth() + 1)).toString().padStart(2, 0) + "." +
            (date.getDate()).toString().padStart(2, 0) +" "+this.getWeek(date)+" "+
            (date.getHours()).toString().padStart(2, 0)+":"+
            (date.getMinutes()).toString().padStart(2, 0)
        }else{
            return date.getFullYear() + "." +
            ((date.getMonth() + 1)).toString().padStart(2, 0) + "." +
            (date.getDate()).toString().padStart(2, 0) + "-"+
            ((date2.getMonth() + 1)).toString().padStart(2, 0) + "." +
            (date2.getDate()).toString().padStart(2, 0) + " " 
        }
        
        
    },
    getWeek(date) {
        var week;
        if(date.getDay() == 0) week = "周日"
        if(date.getDay() == 1) week = "周一"
        if(date.getDay() == 2) week = "周二"
        if(date.getDay() == 3) week = "周三"
        if(date.getDay() == 4) week = "周四"
        if(date.getDay() == 5) week = "周五"
        if(date.getDay() == 6) week = "周六"
        return week;
    }
}