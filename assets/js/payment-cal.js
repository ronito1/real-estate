function estimatePayment(){
    let purchase_price = +$("#purchase_price").val(); //amount
    let down_payment = +$("#down_payment").val(); //percentage
    let loan_term = +$("#loan_term").val(); //year
    let interest_rate = +$("#interest_rate").val(); //percentage interest rate

    let down_payment_amount = down_payment / 100 * purchase_price;
    let total_amount = purchase_price - down_payment_amount; //month
    let total_loan_amount = total_amount + total_amount * (interest_rate / 100); //month
    let monthly_payment =  total_loan_amount / (loan_term * 12);
    $("#down_payment_value").text('$'+down_payment_amount.toFixed(2));
    $("#load_amount_value").text('$'+total_loan_amount.toFixed(2));
    $("#monthly_payment_value").text('$'+monthly_payment.toFixed(2));
}