// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIDs } from "./common.mjs";
import { addData } from "./storage.mjs";

document.getElementById("form-data").style.display = "none"; // making the form hide as default

const ids = getUserIDs();
function userDropdown(){
  let userDropdownList = document.getElementById("user-dropDown");
  for(let i = 0; i< ids.length; i++){
    let newOption = document.createElement("option");
    newOption.value = ids[i];
    newOption.id = ids[i];
    newOption.innerHTML = `User ${ids[i]}`;
    userDropdownList.append(newOption)
  }

  
}



window.onload = function () {
  userDropdown();
};
