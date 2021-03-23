const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

export function maxDateFormater(date){
    let formatedDate=date.toLocaleDateString().slice(0,10)
    let day=formatedDate.split('/')[0]
    let month=formatedDate.split('/')[1]
    let year=formatedDate.split('/')[2]
    day=(day.length === 1? `0${day}`: day);
    month=(month.length === 1? `0${month}`: month );
    let maxDate=`${year}-${month}-${day}`
    return maxDate
}


export function displayDateFormater(selectedDate){
    let selectedDay = new Date(selectedDate).getDay();
    let selectedMonth = new Date(selectedDate).getMonth();
    let selecetdYear = new Date(selectedDate).getFullYear();
    let dayDisplayNumb = selectedDate.toString().slice(8,10).split('/')[0]
    let dayDisplayTxt = selectedDay===0? 'Sunday':days[selectedDay-1]
    let monthDisplay = months[selectedMonth]
    return {dayDisplayTxt,monthDisplay,selecetdYear,dayDisplayNumb}
}


export function dataChunker(month,dataSet){
    let  m=parseInt(month);
    let i=m-2;
    let dataArr=[];
    let monthsArr=[];
      for(i;i<=m+3;i++){
        let x=i
        if(i<=0){x=i+12}
        if(i>12){x=i-12}
        let set=(Object.values(dataSet['MONTHLY-AVRG']))[(x-1).toString()]
        monthsArr.push(months[x-1])
        dataArr.push(set)
      };
  return {dataArr,monthsArr}
}



