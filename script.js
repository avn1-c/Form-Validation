function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    //full name length cannot be less than 5
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    //name length cannot be zero
    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    //email should contain '@'
    var email = document.forms['myForm']["femail"].value;
    let index1= email.indexOf('@');
    if (index1==-1){
        seterror("email", "Email id should contain '@'!")
    }

    //phone number can only be 10 digits long 
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    //phone number cannot be 1234567890 - error
    if (phone=="1234567890"){

        seterror("phone","*Phone number cannot be '1234567890'!")
        returnval = false;
    }

    //password cannot be less than 8 characters - error
    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 8){

        seterror("pass", "*Password should be atleast 8 characters long!");
        returnval = false;
    }

    //password cannot be "password" - error
    if (password=="password"){

        seterror("pass","*Password cannot be 'password'!")
        returnval = false;
    }

    //password cannot be username - error
    if (password==name){

        seterror("pass","*Password cannot be your name!")
        returnval = false;
    }

    //Pass & confirm pass should match - error
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}

