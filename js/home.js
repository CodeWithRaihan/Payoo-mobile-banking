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

      console.log(addAmountOutput);
      
  })



//   togoling functionality


  
  