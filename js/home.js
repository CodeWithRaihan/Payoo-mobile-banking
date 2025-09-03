//  reuseable code  

// optional ... এই খানে জেই কোডটী ব্যাবহার করা হয়েছে সেটা ইচ্ছা হলে ব্যাবহার  করতে পার।
function integerConvetor(id){
    const numberValue= document.getElementById(id)
    const numberValueInput= numberValue.value
    const integerNumber = parseInt(numberValueInput);

    return integerNumber;
}







// add money functionality
 const validPin=1234;
  document.getElementById('add-money-btn')
  .addEventListener('click',function(e){
      e.preventDefault()
    //   account check
      const bankAccountNumber=document.getElementById("bank-account-input").value;
      if(bankAccountNumber.length < 11){
              alert("Enter 11 digit valid account number");
              return;
      }
    //   pin check 
    //  const pinNumber=parseInt(document.getElementById("pin-number").value);
    const pinNumber = integerConvetor("pin-number")
     if(pinNumber !== validPin){
            alert("Enter 4 digit valid pin number");
            return;
     }

    
      const addAmount=parseInt(document.getElementById("add-amount-input").value);

      const titleAmountElement=document.getElementById("title-amount");
      const titleAmount=parseInt(titleAmountElement.innerText);

      const addAmountOutput=titleAmount+addAmount;
      titleAmountElement.innerText=addAmountOutput;

      
      
  })


//   cashout money functionality
  document.getElementById("withdraw-btn")
  .addEventListener('click',function(e){
      e.preventDefault()

      const agentNumber=document.getElementById("agent-number-input").value;
      if(agentNumber.length < 11){
          alert("Enter 11 digit valid agent number");
          return;
      }
       
       const cashoutpinNumber=parseInt(document.getElementById("cashout-pin-number").value);
     if(cashoutpinNumber !== validPin){
            alert("Enter 4 digit valid pin number");
            return;
     }
      const cashOuntInput=parseInt(document.getElementById("cashout-input-amount").value);
    //   copy form add money section
        const titleAmountElement=document.getElementById("title-amount");
      const titleAmount=parseInt(titleAmountElement.innerText);

      const addAmountOutput=titleAmount - cashOuntInput;
      titleAmountElement.innerText=addAmountOutput;
      

      
  })



//   togoling functionality

// togolin function 
   function switchButton(id){
     const allForms = document.getElementsByClassName("form");
    for(const form of allForms){
         form.style.display= "none";
    }
    document.getElementById(id).style.display = "block";
   }

// add money section
  document.getElementById("add-money-box-btn")
  .addEventListener('click',function (){
    

    //  document.getElementById("add-money-sec").style.display = "block";
    //  document.getElementById("cash-out-sec").style.display = "none";

    // অনেক গুলা একি রকমের কোড এর জন্য নিচের কোড ব্যাবহার করা হয়েছে 
     switchButton("add-money-sec")

  })

//   cash out section
  document.getElementById("cash-out-box-btn")
  .addEventListener('click',function(){   
    switchButton("cash-out-sec")
  })

// Transfer Money section 


 document.getElementById("transfer-money-box-btn")
  .addEventListener('click',function(){  
    switchButton("transfer-money-sec")
  })
//   Get-Bonus section
 document.getElementById("Get-Bonus-box-btn")
  .addEventListener('click',function(){  
    switchButton("get-bonus-sec")
  })
//   "pay bill section
 document.getElementById("pay-bill-box-btn")
  .addEventListener('click',function(){  
    switchButton("pay-bill-sec")
  })


