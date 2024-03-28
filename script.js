let button = document.querySelector("button");
let status = "Stranger";

function myFunction() {
  if (status === "Stranger") {
    button.innerHTML = "Friends";
    button.style.color = "green";
    status = "Friends";
  } 
  else { 
    if (status === "Friends") {
      button.innerHTML = "Stranger";
      button.style.color ="red";
      status = "Stranger";
    }
  }
}
