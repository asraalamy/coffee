function startCoffeeAssistant() {
    const username = prompt("Enter username (admin or user):");
    const password = prompt("Enter password:");

 
if ((username === "admin" || username === "user") && password === "1234") {
  const role = username === "admin" ? "boos" : "colleague" ;
  alert(' Wellcome to Access level✅: ${role}');
} else{
    alert("Username and password are incorrect❌");
    return;
}

//order
const name = prompt("What is your name?");
const age =  parseInt(prompt("How old are you?"));
const coffee = prompt("What kind of coffee do you want? (espresso / latte / cappuccino)") .toLowerCase();
const quantity = parseInt(prompt("How many cups of coffee would you like?"));
const prices = {
    espresso:100,
    latte: 150,
    cappuccino:180
};
const priceforlcup = prices[coffee] || 0;

if (priceforlcup === 0 || isNaN(quantity) || quantity < 1) {
    alert("The order was invalid❌")
    return;
}
const originalTotal = priceforlcup * quantity;

//تخفیف نظر به سن
 let discount = 0;
 if(age < 18 || age > 60) {
    discount = originalTotal * 0.1;
 }
 const totalAfterDiscount = originalTotal - discount;
 //تقسیم کنیم که چند نفز بودن
 const split = parseInt(prompt("How many people pay?"));
 const tipPercent = parseInt(prompt("(15 ,10 ,5 ,0) What percentage do you tip? "));

 const tipAmount = totalAfterDiscount * (tipPercent / 100);
 const finaltotal =totalAfterDiscount + tipAmount;
 const foreachpers = finaltotal / split;


 //بل نهایی

 const bill = ` 
 Final bill! 📜 ${name}
———————————————————————————
   
Coffee Type : ${coffee}
Number of Cups: ${quantity}
Price per Cup: ${priceforlcup}
Total Amount: ${originalTotal}
Age Discount: ${discount}
reward: (${tipPercent}%): ${tipAmount. toFixed(1)}
————————————————————————————

Final price: ${finaltotal.toFixed(1)}
Number of Payers:${split}
Share per person: ${foreachpers.toFixed(1)}
——————————————————————

Thank you for your order🤍
`;
alert(bill);

}
