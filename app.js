
//variables
const btn=document.querySelector("button");
const email=document.querySelector(".input-1");
const interests=document.querySelector(".input-2");
const errorMessage=document.querySelector(".error-message");

//event Listeners
btn.addEventListener('click', submitValue);

// Functions

//function to select item from option list
function itemSelect() 
{
    var index = interests.selectedIndex;            
    var item= interests.options[index].innerText;
    console.log(item);
}

// update button status after 2 seconds
function submitting()
{
    btn.innerHTML= 'Submitting...';
    setTimeout(location,2000);

    function location(event)
    {
        document.location='thanksPage.html';
    }
}

// submit input
function submitValue(event)
{
    event.preventDefault();
    var pattern = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]){2,5}$/; // email validation pattern
    const emailValue= email.value;
    
    if(emailValue.match(pattern))
    {
        console.log(emailValue);  
        itemSelect();
        errorMessage.classList.add('hidden');
        email.classList.remove('input-Border');
        submitting(); 
    }
    else
    {
        errorMessage.classList.remove('hidden');
        email.classList.add('input-Border');
    }
    
}

