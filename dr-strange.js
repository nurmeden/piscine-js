function addWeek(date){
    let firstDay = new Date('0001-01-01')
    let diff = differenceDay(firstDay,date)%2
    if (diff%2===0 || diff<1){
        return weekDay(date)
    }else{
        let res = weekDay(date)
        return 'second'+res
    }
}
function weekDay(date){
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    return days[date.getDay()]
}
function differenceDay(firstDate,secondDate){
    return ((secondDate-firstDate)/(3600*24*1000))/7
}
function timeTravel({ date, hour, minute, second }){
    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    return date
}