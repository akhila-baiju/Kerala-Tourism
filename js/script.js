
function test1()
{
    
    var email=document.getElementById("eid");
    var error=document.getElementById("eiderror");
    var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?/;
    error.innerHTML=" ";
    if(email.value=='')
    {
        error.innerHTML="Please enter Email ID";
        error.style.color="red";
        unCheck();
        return false;
    }
    else if(regexp.test(email.value))
    {
        error.innerHTML=" ";
        return true;
    }
    else 
    {
        error.innerHTML="Please enter a valid Email ID";
        error.style.color="red";
        unCheck();
        return false;
    }
    
}
function test2()
{  
    
    var passexp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    
    var password=document.getElementById("pass");
    var pwdmiss=document.getElementById("pwderror");
    pwdmiss.innerHTML="";
   
    if(password.value=='')
    {
        pwdmiss.innerHTML="Please enter Password";
        pwdmiss.style.color="red";
        unCheck();
        return false;
    }
    else if(passexp.test(password.value))
    {
        pwdmiss.innerHTML="";
        return true;
    }
    else{
        pwdmiss.innerHTML="Please Enter a Valid Password";
        pwdmiss.style.color="red";
        unCheck();
        return false;
    }
}

function validate()
{
    var email=document.getElementById("eid");
    var error=document.getElementById("emailerr");
    var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?/;
   // const click= document.querySelector('#checkbutton');
    if(regexp.test(email.value))
    {
      //  error.innerHTML="valid";
       // error.style.color="green";
       error.innerHTML="";
        return true;
    }
    else{
        error.innerHTML="Please enter Valid Email ID";
        error.style.color="red";
       // unCheck();
       // click.checked=false;
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
            error.innerHTML="";
      return true;
        }
      else
        {
        //alert("message");
        error.innerHTML="Enter Valid Mobile Number";
        error.style.color="red";
       // unCheck();
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
        error.textContent = '   Strong   ';
    } else if(medium.test(password.value)) {
        error.style.backgroundColor = 'orange';
        error.textContent = '   Medium   ';
    } else {
        error.style.backgroundColor = 'red';
        error.textContent = '   Weak   ';
       // return false;
    }
}

function checkPassword() {
   var  password1 = document.getElementById("pwd");
    var password2 = document.getElementById("cpwd");
    var error=document.getElementById("pwdsame");
    var error1=document.getElementById("strength");
   
 // alert("length== "+password1.value.length);
    if (password1.value == '')
      { 
       error1.innerHTML="Enter Password";
       error1.style.color="red";
       return false;
       //unCheck();
       //click.checked=false;
      }   
    
    else if (password2.value == '')
       {
        error.innerHTML="Enter Confirm Password" ;
        error.style.color="red";
        return false;
        //unCheck();
       }    
       
    else if (password1.value != password2.value) {
      
       error.innerHTML="Password did not match";
       error.style.color="red"; 
       return false;
    }
    
   
   else if(password1.value.length<8){
    error.innerHTML="Password Must contain 8 Characters";
    error.style.color="red"; 
    return false;
    }
    else if(password1.value.search(/[0-9]/)==-1){
        error.innerHTML="Password Must contain Atleast 1 Number";
        error.style.color="red"; 
       return false;
    }
   else if(password1.value.search(/[A-Z]/)==-1){
    error.innerHTML="Password Must contain at leasst 1 Capital Letter";
    error.style.color="red"; 
    return false;
    }
    else if(password1.value.search(/[a-z]/)==-1){
        error.innerHTML="Password Must contain at least 1 small letter";
        error.style.color="red"; 
        return false;;
    }
    else{
        
            error.innerHTML="";
            return true;
        }
    
    
}

/*function passChk()
{
    var  password1 = document.getElementById("pwd");
    var password2 = document.getElementById("cpwd");
    var error=document.getElementById("pwdsame");
    var error1=document.getElementById("strength");
   // var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?/;
   var str1="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$";
    //var str=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");
   // var strength ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$";
    //var str=/^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/;
  //  alert(password1.value);
    if(str1.search(password1.value)) {
       // alert("in= "+password1.value);
        error.innerHTML="Password Must Include 8 characters,1 uppercase,1 lowercase,1 number";
        error.style.color="red"; 
        return false;
    }
    else{alert("else");
        error.innerHTML=" ";
        return true;
    }

}
function check()
{
   const click= document.querySelector('#checkbutton');
   var error=document.getElementById("checkerr");
    if(click.checked)
    {
       
        error.innerHTML="Your details Saved Successfuly";
        error.style.color="green";
        return true;
    }
   else{
      
       error.innerHTML="Click the check Button";
       error.style.color="red";
        return false;
   }
}

function unCheck()
        {
            const obj= document.querySelector('#checkbutton');
            if (obj.checked == true)
            {2
                document.getElementById("checkbutton").checked = false;
            }
        }
*/

        document.getElementById("submit").addEventListener("click", function(event){
           // alert("hi");
           if(!validate() || !phonenumber() || !checkPassword()){
            event.preventDefault()
           }
            else
        
              {    alert("Your Details Saved Successfully");
                   // document.getElementById("save").innerHTML="Your Details Saved Successfully";
                    //document.getElementById("save").style.color="green";
              }
                      
          });
       // document.getElementById("save").innerHTML="Saved";
