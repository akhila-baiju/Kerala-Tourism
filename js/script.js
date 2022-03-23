function validate()
{
    var email=document.getElementById("eid");
    var error=document.getElementById("emailerr");
    var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?/;
    if(regexp.test(email.value))
    {
      //  error.innerHTML="valid";
       // error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Please enter Valid Email ID";
        error.style.color="red";
        return false;
    }
}

function phonenumber()
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var pnumber=document.getElementById("mnumber");
  var error=document.getElementById("numerr");
  if((pnumber.value).match(phoneno))
        {
      return true;
        }
      else
        {
        //alert("message");
        error.innerHTML="Enter Valid Mobile Number";
        error.style.color="red";
        return false;
        }
}

function StrengthChecker() {
    var strong = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var medium = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    var password=document.getElementById("pwd");
    var error=document.getElementById("strength");
    //alert(password.value);
    //var Pass=(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}) or (?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}).;
    if(strong.test(password.value)) {
        error.style.backgroundColor = "green";
        error.textContent = 'Strong';
    } else if(medium.test(password.value)) {
        error.style.backgroundColor = 'orange';
        error.textContent = 'Medium';
    } else {
        error.style.backgroundColor = 'red';
        error.textContent = 'Weak';
    }
}

function checkPassword() {
   var  password1 = document.getElementById("pwd");
    var password2 = document.getElementById("cpwd");
    var error=document.getElementById("pwdsame");
    var error1=document.getElementById("strength");
    //alert(password1);
    //alert(password2);
    
    if (password1.value == '')
      { 
       error1.innerHTML="Enter Password";
       error1.style.color="red";
      }   
    
    else if (password2.value == '')
       {
        error.innerHTML="Enter Confirm Password" ;
        error.style.color="red";
       }    
       
    else if (password1.value != password2.value) {
      
       error.innerHTML="Password did not match";
       error.style.color="red"; 
        return false;
    }

    
    else{
      
        return true;
    }
}

function check()
{
   const click= document.querySelector('#checkbutton');
    if(click.checked)
    {
        var error=document.getElementById("checkerr");
        error.innerHTML="Your details Saved Successfuly";
        error.style.color="green";
        return true;
    }
   else{
       var error=document.getElementById("checkerr");
       error.innerHTML="Click the check Button";
       error.style.color="red";
        return false;
   }
}
