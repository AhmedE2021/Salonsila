


// booking page 2 haidresser selection
/* function togglegolden() {
    document.getElementById("hdwael").style.border="2px solid goldenrod";
  }
  function togglegolden1(){
  document.getElementById("hdkisa").style.border="2px solid goldenrod";}
  
  function togglegolden2(){
  document.getElementById("hdram").style.border="2px solid goldenrod";} */











const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const OUTPUT = document.getElementById("output");

if (URLDATA.get("option") !== null && URLDATA.get("difficulty") === null) {
    OUTPUT.innerHTML = "Option " + URLDATA.get('option') + " is selected.";
} else if (URLDATA.get("option") !== null) {
    OUTPUT.innerHTML = "Option " + URLDATA.get('option') + " is selected. The level of difficulty is " + URLDATA.get('difficulty') + ".";
} else {
    OUTPUT.innerHTML = "Nothing was transferred via URL."
}

const FORMOUTPUT = document.getElementById("formoutput");

if (sessionStorage.getItem("name") === null) {
    FORMOUTPUT.innerHTML = "<p>Form was not used.</p>"
} else {
    FORMOUTPUT.innerHTML = "<p>Name: " + sessionStorage.getItem('name') + " <br>Email: " + sessionStorage.getItem('email') + "</p>";
}