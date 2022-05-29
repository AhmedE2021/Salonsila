
// booking page 1 checkbox background color change when checked 

$("input[type='checkbox']").change(function(){
  if($(this).is(":checked")){
      $(this).parent().addClass("goldenrodBackground"); 
  }else{
      $(this).parent().removeClass("goldenrodBackground");  
  }
});







// Services checkbox 

let total = 0; // Global variable, total starts at zero
showTotal(); // Calls function showTotal to show current total

// Event handler - check if checkbox is selected or not and 
// adjust the total value accordingly
function calculateTotal(checkbox, itemprice) {
    if (checkbox.checked === true) { // If the checkbox is seleted then ...
        total = Math.abs(total + parseFloat(itemprice));
        text = parseFloat(itemprice)
    } else { // if it is not selected then ...
        total = Math.abs(total - parseFloat(itemprice));
    }
    showTotal();
}
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var value = document.getElementById("fieldset");
    if (checkBox.checked == true){
      value.style.display = "block";
    } else {
       value.style.display = "none";
    }
  }


function showTotal() {
    const output = document.getElementById("totaloutput");
 
    
  
    

      let checkboxes = $("input[type=checkbox]")
      let enabledService = [];
      
      // Attach a change event handler to the checkboxes.
      checkboxes.change(function() {
        enabledService = checkboxes
          .filter(":checked") // Filter out unchecked boxes.
          .map(function() { // Extract values using jQuery map.
            return this.name;
          }) 
          .get() // Get array.
          
        console.log(enabledService);

        let services = ""
        for (const service of enabledService){
            services+=`<div class="form-p">${service}</span>`
    
         }

        output.innerHTML = `
        
    <div class="summary-box-header">
        <h1 class="summary-box-header">Appointment Summary</h1>
       
        <p class="summary-box-para">Your service<p>
        ` +
       
          services

        + `
        <div> 
        <br>
        <h1 class="summary-box-header summary-box-price">Total price&nbsp;&nbsp;&nbsp; ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}</h1>
        <br>
        
    </div>

    

    `;
      });

      console.log(enabledService);


    

    // conput.innerHTML = `
    // <button type="submit" class="continuebtn" href="book2.html?Total= ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}">Continue</button>

    // `;

}

const FORM = document.getElementById("fieldset");

FORM.addEventListener("submit", function (e) {
    e.preventDefault();
    const service = document.getElementsByClassName("slist").value;
    const EMAIL = document.getElementById("email").value;

    sessionStorage.setItem("name", NAME);
    sessionStorage.setItem("email", EMAIL);
    document.location.href = "book2.html";
})






