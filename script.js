// $(function () {

//     "use strict";

//     //===== Prealoder

//     $(window).on('load', function (event) {
//         $('.preloader').delay(500).fadeOut(500);
//     });

// });


var d = setTimeout(showdiv,2000);

function showdiv() {
        document.querySelector(".page").style.display = "block";
        document.querySelector(".preloader").style.display = "none";
};



let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("#enterName").value;
   var enterAmount = parseInt(document.getElementById("#enterAmount").value);
   
   if (enterAmount > 8000) {
      alert("Insufficient Balance.")
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      $${enterAmount} is sent to ${enterName}@email.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`$${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}


function money()
{
   let username = document.getElementById("enterName").value;
   let amount = document.getElementById("enterAmount").value;
   let val = parseInt(document.getElementById("numbername").value);
   let enterAmount = parseInt(document.getElementById("enterAmount").value);
   if (enterAmount > val) {
      alert("Insufficient Balance.");
   }
   else
   {
      let container = document.getElementById("transaction-history-body");
      alert(`Successful Transaction !!  $${amount} is sent to ${username}@email.com.`);
      const text = document.createTextNode("Successfull transaction of $" + amount + " to " + username + "@email.com");
      container.appendChild(text);
      const lineBreak = document.createElement('br');
      container.appendChild(lineBreak);
      let amt = document.getElementById("numbername");
      amt.value = val - enterAmount;
   }
}



