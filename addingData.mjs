import { addData, getData } from "./storage.mjs";

export function addingToStorage(currentUserId){

    const formData = document.getElementById("form-data");
    formData.addEventListener("submit", (e) => {
        e.preventDefault();
        let topicValue = document.getElementById("topic").value;
        let dateValue = document.getElementById("datePicker").value;

        const week = new Date(dateValue);
        week.setDate(week.getDate() + 7);
        const oenWeek = week.toISOString().split('T')[0]; // added one week and stored just date in oneWeek variable

        const one = new Date(dateValue);
        one.setMonth(one.getMonth() + 1);
        const oneMonth = one.toISOString().split('T')[0]; // added one month and stored just date in oneMonth variable

        const three = new Date(dateValue);
        three.setMonth(three.getMonth() + 3);
        const threeMonths = three.toISOString().split('T')[0]; // added 3 months and stored just date in threeMonths variable

        const six = new Date(dateValue);
        six.setMonth(six.getMonth() + 6);
        const sixMonths = six.toISOString().split('T')[0]; // added 6 months and stored just date in sixMonths variable

        const year = new Date(dateValue);
        year.setFullYear(year.getFullYear() + 1);
        const oneYear = year.toISOString().split('T')[0]; // added one year and stored just date in oneYear variable

        const dates = [oenWeek, oneMonth, threeMonths, sixMonths, oneYear]; // putting all vairables in a array so we`ll be able to go through one by one in for loop
        let fullData = []; // this is the data we want to store after for loop
        for(let i = 0; i < dates.length; i++){
            fullData.push({    // pushing object with topic and date into fullData variable
                topic: topicValue,
                date: dates[i]
            })
        }
        const dataobj = {topic: topicValue, date: dateValue}
        console.log(fullData);
        addData(currentUserId, fullData);
        
        topicValue = "";
        dateValue = new Date().toISOString().split('T')[0];
        document.getElementById("topic").value = "";
        document.getElementById("datePicker").value = new Date().toISOString().split('T')[0];
        const data = getData(currentUserId);
        console.log("get data   ", data)
    })
}



