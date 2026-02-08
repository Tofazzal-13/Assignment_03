function newPrice(currentPrice, discount) {
    if(typeof currentPrice !== "number" || typeof discount !== "number"){
        return "Invalid"
    }
    const discountPrice = (currentPrice * discount) / 100;
    const finalPrice = currentPrice - discountPrice;
    return finalPrice.toFixed(3);
}
