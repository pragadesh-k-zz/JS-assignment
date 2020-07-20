const salesValue = Number(prompt("enter your sales value"));
function employeCommision(sales) {
    //let commision;
    if (sales >= 0 && sales <=5000) {
        return sales * 0.02;
    } else if(sales >= 50001 && sales <= 10000){
        return sales * 0.05;
    }
    else if(sales >= 10001 && sales <= 20000){
        return sales * 0.07;
    } else if(sales > 20000){
        return sales * 0.10;
    } else{
        return "give the correct value";
    }
}

console.log(employeCommision(salesValue));