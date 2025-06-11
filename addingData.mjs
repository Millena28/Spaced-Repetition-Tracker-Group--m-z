import { addData, getData } from "./storage.mjs";

export function addingToStorage(){

    const formData = document.getElementById("form-data");
    formData.addEventListener("submit", (e) => {
        e.preventDefault(); 
        let topicValue = document.getElementById("topic").value; // getting the value of topic input
        let dateValue = document.getElementById("datePicker").value; // getting the value of date input
        
        const userDropdownList = document.getElementById("user-dropDown");
        const currentUserId = userDropdownList.value; // getting the user id for this function 
        console.log(currentUserId, "adding function")

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
        console.log(fullData);
        addData(currentUserId, fullData);
        
        document.getElementById("topic").value = ""; // setting "" to topic input after adding data to localstorage
        document.getElementById("datePicker").value = new Date().toISOString().split('T')[0];// setting today's date for date input after adding data to localstorage
        displayAgendas(currentUserId);
    })
}

export function displayAgendas(currentUserId){
    const data = getData(currentUserId); // getting data from the local storage for current user
    const ulList = document.getElementById("ulListAgendas"); // accessing to <ul> in html
    ulList.innerHTML = ""; // setting nothing to ul because we want to display the data we just got from localstorage

    if(!data){ // if there is no data for that user then shows there is no agenda
        const li = document.createElement("li");
        li.innerHTML = 'There is no agenda!';
        ulList.appendChild(li);
        return;
    }
    const today = new Date();
    today.setHours(0,0,0,0); // this help us normalize to midnight to help us only compare the dates only.

    const upcomingItems = data.filter(item => {
        const itemDate = new Date(item.date);
        itemDate.setHours(0,0,0,0);
        return itemDate >= today;
    });
    if (upcomingItems.length === 0) {
        const li = document.createElement("li");
        li.textContent = 'There is no upcoming agenda!';
        ulList.appendChild(li);
        return;
    }

    upcomingItems.sort((a,b) => new Date(a.date) - new Date(b.date)); // this sorts data by date ascending .

    // else{ // else it will display all of them on by one by creating <li> 
        for(let i = 0; i < upcomingItems.length; i++){
            const li = document.createElement("li");

             const formattedDate = new Date(upcomingItems[i].date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric"
                });
            
            li.innerHTML = `${upcomingItems[i].topic} - ${formattedDate}`;
            ulList.appendChild(li);
        }
    }
