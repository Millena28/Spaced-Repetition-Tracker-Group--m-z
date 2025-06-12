// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIDs } from "./common.mjs";
import { addData, getData, clearData } from "./storage.mjs";
import{ addingToStorage, displayAgendas } from "./addingAndDisplaying.mjs";

document.getElementById("form-data").style.display = "none"; // making the form hide as default

let datePickerDefault = document.getElementById("datePicker"); //set todays date as default in the date picker input
datePickerDefault.value = new Date().toISOString().split('T')[0];


const ids = getUserIDs(); // assigning the list of users to ids
var currentUserId = null; // defining a global currentUserId variable for tracking the current user

function userDropdown(){
  let userDropdownList = document.getElementById("user-dropDown");
  for(let i = 0; i< ids.length; i++){  // adding users to the dropDown
    let newOption = document.createElement("option");
    newOption.value = ids[i];
    newOption.innerHTML = `User ${ids[i]}`;
    userDropdownList.append(newOption)
  }

  userDropdownList.addEventListener("change", ()=> {
    document.getElementById("form-data").style.display = ""; // showing the form after a user is selected
    const opt = userDropdownList.value; // getting the current uses value = id
    currentUserId = opt; // assigning the user value = id to currentUserId which is a global variable
    // clearData(currentUserId);
    console.log(currentUserId);
    displayAgendas(currentUserId); //when selecting an user it will display the user's agendas
  })

}




window.onload = function () {
  userDropdown();
  addingToStorage();
  

  
};
