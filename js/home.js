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
 const transactionData=[];
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
      if(addAmount <= 0){
         alert("invalid amount");
         return;
      }

      const titleAmountElement=document.getElementById("title-amount");
      const titleAmount=parseInt(titleAmountElement.innerText);

      const addAmountOutput=titleAmount+addAmount;
      titleAmountElement.innerText=addAmountOutput;
      
      const data = {
           name: 'Add Money',
           date:new Date().toLocaleTimeString()
      }
      
      transactionData.push(data);
      
      
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
       if(cashOuntInput <= 0 || cashOuntInput > titleAmount){
           alert("invalid amount");
           return;
      }
      const addAmountOutput=titleAmount - cashOuntInput;
      titleAmountElement.innerText=addAmountOutput;
      
    
    const data = {
           name: 'Cashout',
           date:new Date().toLocaleTimeString()
      }
      
      transactionData.push(data);
       
      
  })


// Transfer Money functionality 

 document.getElementById("send-money-btn")
 .addEventListener('click',function(e){
       e.preventDefault()

        const TransferAccountNumber=document.getElementById("transfer-acc-num").value;
      if(TransferAccountNumber.length < 11){
              alert("Enter 11 digit valid account number");
              return;
      }
     const transferPinNumber = integerConvetor("transfer-pin-number")
     if(transferPinNumber !== validPin){
            alert("Enter 4 digit valid pin number");
            return;
     }
       const transferAmount =parseInt(document.getElementById("transfer-amount").value);
      
       const titleAmountElement=document.getElementById("title-amount");
       const titleAmount=parseInt(titleAmountElement.innerText);
        if(transferAmount <= 0 || transferAmount > titleAmount){
           alert("invalid amount");
           return;
      }
       const addAmountOutput=titleAmount - transferAmount;
       titleAmountElement.innerText=addAmountOutput;
      
       const data = {
           name: 'Transfer Money',
           date:new Date().toLocaleTimeString()
      }
      
      transactionData.push(data)
      
 })

// get bonus functionality
  const bonusCoupon = 12345678910
  document.getElementById("get-bonus-btn")
  .addEventListener('click',function(e){
     e.preventDefault()
       const bonusCouponInput=parseInt(document.getElementById("bonus-coupon").value);
       if(bonusCoupon !== bonusCouponInput){
          alert("invalid coupon number");
          return;
       }
       const bonusAmount=5000;
       const titleAmountElement=document.getElementById("title-amount");
      const titleAmount=parseInt(titleAmountElement.innerText);

      const addAmountOutput=titleAmount+bonusAmount;
      titleAmountElement.innerText=addAmountOutput;

        const data = {
           name: 'Bonus Added',
           date:new Date().toLocaleTimeString()
      }
      
      transactionData.push(data)

  })

// pay bill functionality

 document.getElementById("pay-now-btn")
 .addEventListener('click',function(e){
    e.preventDefault()
       
      const billerAccountNumber=document.getElementById("biller-account-num").value;
      if(billerAccountNumber.length < 11){
              alert("Enter 11 digit valid account number");
              return;
      }
     const billPinNumber = integerConvetor("bill-pin-number")
     if(billPinNumber !== validPin){
            alert("Enter 4 digit valid pin number");
            return;
     }


      const amountToPay= parseInt(document.getElementById("amount-to-pay").value);
    
      const titleAmountElement=document.getElementById("title-amount");
      const titleAmount=parseInt(titleAmountElement.innerText);
       if(amountToPay <= 0 || amountToPay > titleAmount){
           alert("invalid amount");
           return;
      }
      const addAmountOutput=titleAmount - amountToPay;
      titleAmountElement.innerText=addAmountOutput;
      

     const data = {
           name: 'Pay Bill',
           date:new Date().toLocaleTimeString()
      }
      
      transactionData.push(data);


     
 })



//  transaction history functionality

document.getElementById("transaction-box-btn")
.addEventListener('click',function (){
     
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText="";
    for(const data of transactionData){
         const div = document.createElement("div")
         div.innerHTML=`
             <div class="flex justify-between items-center  bg-white rounded-xl mt-3">
                      <div  class="flex  items-center  ">
                        <div class="rounded-full    bg-[#f4f5f7] p-3 ">
                         <img src="assets/wallet1.png" alt=""   >
                         </div>
                         <div class="ml-3">
                             <h4 class="font-semibold text-1xl" >${data.name}</h4>
                             <p class="font-semibold text-sm" >${data.date}</p>
                         </div>
                      
                      </div>
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                      </div>
         ` 
         transactionContainer.appendChild(div);
    }
     
     
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
//  button active hover togoling 
  function buttonTogoling(id){
    const cardBtns= document.getElementsByClassName("card-btns")
    for(const Btns of cardBtns){
         Btns.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
         Btns.classList.add("border-[#0808081a]");
    }
    document.getElementById(id).classList.remove("border-[#0808081a]");
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]");
  }

// add money section
  document.getElementById("add-money-box-btn")
  .addEventListener('click',function (){
    

    //  document.getElementById("add-money-sec").style.display = "block";
    //  document.getElementById("cash-out-sec").style.display = "none";

    // অনেক গুলা একি রকমের কোড এর জন্য নিচের কোড ব্যাবহার করা হয়েছে 
     switchButton("add-money-sec");
     buttonTogoling("add-money-box-btn")

    
  })

//   cash out section
  document.getElementById("cash-out-box-btn")
  .addEventListener('click',function(){   
    switchButton("cash-out-sec");
    buttonTogoling("cash-out-box-btn");
  })

// Transfer Money section 


 document.getElementById("transfer-money-box-btn")
  .addEventListener('click',function(){  
    switchButton("transfer-money-sec");
    buttonTogoling("transfer-money-box-btn");

  })
//   Get-Bonus section
 document.getElementById("Get-Bonus-box-btn")
  .addEventListener('click',function(){  
    switchButton("get-bonus-sec");
    buttonTogoling("Get-Bonus-box-btn");
  })
//   "pay bill section
 document.getElementById("pay-bill-box-btn")
  .addEventListener('click',function(){  
    switchButton("pay-bill-sec");
    buttonTogoling("pay-bill-box-btn");
  })
//   transaction-history
 

 document.getElementById("transaction-box-btn")
  .addEventListener('click',function(){  
    switchButton("transaction-history-sec");
    buttonTogoling("transaction-box-btn");
  })
