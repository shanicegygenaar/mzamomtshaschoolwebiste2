function colorChange() {
    var element = document.body;
    
        element.classList.toggle("color-change");
    
   
    
    
    
}
  function focusF() {
      document.myFormAlert.fname.focus();
      return true;
  }  
function myAlert(fname){
    var firtsname = document.myFormAlert.fname;
    var words = /^[A-Za-z]+$/;
 if(firstname.value.match(words)){
  
  document.myFormAlert.firstname.focus();
  return true;
    }
   else{
     alert("Please fill in your details!");
     firstname.focus();
     return false;
   }
  }

function lastNameVal(lstname) {
    var lstname = document.myFormAlert.lname;
    var letter = /^[A-Za-z]+$/;
    if(lstname.value.match(letter)) {
        alert("Correct");
        document.myFormAlert.lstname.focus();
        return true;
    } else {
        alert("Enter details");
        return false;
    }
}

  function emailVal(email) {
    var email = document.myFormAlert.email;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat)) {
alert("Email is correct")
document.myFormAlert.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
function textAreaVAl(textArea) {
    var textArea = document.myFormAlert.textA;
    if(textArea) {
        alert("Thank you" + fname + lname);
        document.myFormAlert.textArea.focus();
        return true;
    } else {
        alert("Did not fill in full details");
     
        return false;
    }
}

var myImage = 0;
carousel();
function carousel() {
  
  var i;
  var x = document.getElementsByClassName("images");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";

  }
  myImage++;
  if (myImage > x.length) {
   
     myImage = 1;
    }
  for(i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active1", "");
  }
  x[myImage-1].style.display = "block";
  dots[myImage-1].className += "active1";
  setTimeout(carousel, 2000); 
}

function changeImg1() {
    document.getElementById("myImg1").src = "pics/logo.png";
}
function changeImg2() {
    document.getElementById("myImg1").src = "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=500&show_text=true&height=290&appId";
}
