// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    let replaceText = document.getElementById('text'); 
    replaceText.textContent = "This is really cool!";
    console.log("The DOM has loaded");
    //return function();
  });
  

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
