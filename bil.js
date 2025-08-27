let item = "Kurta" , itemPrice = 800 , itemQty = 5;

let totalRate = itemPrice * itemQty ;
let discount;

if(totalRate >= 8000){
    discount = 0.25;
    console.log(`Total discount rate is : ${discount}`);
}

else if(totalRate >= 5000){
    discount = 0.15;
    console.log(`Total discount rate is : ${discount}`);
}

else if(totalRate >= 2000){
    discount = 0.1;
    console.log(`Total discount rate is : ${discount}`);
}
else {
    discount = 0;
    console.log(`Total discount rate is : ${discount}`);
}

let disPrice = totalRate * discount;

console.log(`Item name : ${item}`);

console.log(`Total price of your items : ${totalRate}`);

console.log(`Discounted price for your purchase is : ${disPrice}`);

let netPrice = totalRate - disPrice ;

console.log(`Price after applying Discount : ${netPrice}`);



