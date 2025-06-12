const date1 = "2025-06-11";

export function dateFormat(date1){
    const newDate = new Date(date1);
    console.log(newDate)
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    console.log(day, month, year)

    const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function formattedDay(day){
            if(day >= 11 && day <= 13){ return `${day}th`}
            else{
                switch(day % 10){
                    case 1: return `${day}st`;
                    case 2: return `${day}nd`;
                    case 3: return `${day}rd`;
                    default: return `${day}th`
                }
            }
        }
    const suffixedDay = formattedDay(day);
    const monthName = monthsName[month];
    return `${suffixedDay}-${monthName}-${year}`;
}

console.log(dateFormat(date1));