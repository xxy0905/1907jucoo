module.exports = {
    getShowTime(start,end){
       
        var date = new Date(start*1000);
        var date2 = new Date(end*1000)
        return date.getFullYear() + "." +
            ((date.getMonth() + 1)).toString().padStart(2, 0) + "." +
            (date.getDate()).toString().padStart(2, 0) + "-"+
            ((date2.getMonth() + 1)).toString().padStart(2, 0) + "." +
            (date2.getDate()).toString().padStart(2, 0) + " " 
        
    }
}