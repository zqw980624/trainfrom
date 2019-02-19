
const addZero = function(n){
  return n<10?"0"+n:n;
}

const toDate = function(date){
  const dateArg = [
    date.getFullYear(),
    addZero(date.getMonth() + 1) ,
    addZero(date.getDate()) 
  ]
  return dateArg.join("-")
}
const formatterDateTime = function formatterDateTime() {
  var date = new Date()
  var month = date.getMonth() + 1
  var datetime = date.getFullYear()
    + ""// "年"
    + (month >= 10 ? month : "0" + month)
    + ""// "月"
    + (date.getDate() < 10 ? "0" + date.getDate() : date
      .getDate())
    + ""
    + (date.getHours() < 10 ? "0" + date.getHours() : date
      .getHours())
    + ""
    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
      .getMinutes())
    + ""
    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
      .getSeconds());
  return datetime;
}
const minuteToHour = function(time){
  return ~~(time/60) + "时" + (time%60) + "分"
}

export default {
  toDate,
   formatterDateTime,
  minuteToHour
};