function newPrice(currentPrice, discount) {
   if(  typeof currentPrice !== "number" ||
        typeof discount !== "number" ||
        discount < 0 ||
        discount > 100){
     return "invalid";
   }

   else{
     const discountPrice = (currentPrice * discount) / 100;
     const finalPrice = currentPrice - discountPrice;
     return finalPrice.toFixed(3);
   }
}

const result = newPrice(1000,101)
console.log(result);
