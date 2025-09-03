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
     const pinNumber=parseInt(document.getElementById("pin-number").value);
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


  document.getElementById("add-money-box-btn")
  .addEventListener('click',function (){
    console.log("add money btn worked")

     document.getElementById("add-money-sec").style.display = "block";
     document.getElementById("cash-out-sec").style.display = "none";
  })
  document.getElementById("cash-out-box-btn")
  .addEventListener('click',function(){
      document.getElementById("cash-out-sec").style.display = "block";
      document.getElementById("add-money-sec").style.display = "none";
    console.log("cashout btn worked")
  })


