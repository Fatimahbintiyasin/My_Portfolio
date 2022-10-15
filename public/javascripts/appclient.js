
// File Name: appclient.js
// Student Name: Fatimah Binti Yasin
// Student ID:  301193282
// Date: Oct 8, 2022

console.log("it goes to ther client-side.");

if(getTitle == "Inventory List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}