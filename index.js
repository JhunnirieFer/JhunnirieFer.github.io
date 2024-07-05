// app.js

// Prices for the items
const prices = {
    qty1: 5000.00,
    qty2: 10000.00,
    qty3: 9000.00,
    qty4: 8000.00,
    qty5: 7000.00,
    qty6: 6000.00
};

// Update order details
function updateOrder() {
    let orderDetails = "";
    let total = 0;

    for (let i = 1; i <= 6; i++) {
        let qty = document.getElementById(`qty${i}`).value;
        if (qty > 0) {
            let itemPrice = prices[`qty${i}`];
            let itemTotal = qty * itemPrice;
            orderDetails += `Item ${i}: ${qty} x ₱${itemPrice.toFixed(2)} = ₱${itemTotal.toFixed(2)}\n`;
            total += itemTotal;
        }
    }

    document.getElementById("carts").value = orderDetails;
    document.getElementById("total").value = `Total: ₱${total.toFixed(2)}`;
}

// Calculate change
function calculateChange() {
    let total = parseFloat(document.getElementById("total").value.replace("Total: ₱", ""));
    let cash = parseFloat(document.getElementById("cash").value);

    if (!isNaN(total) && !isNaN(cash)) {
        let change = cash - total;
        document.getElementById("change").value = `Change: ₱${change.toFixed(2)}`;
    } else {
        document.getElementById("change").value = "Change: ₱0.00";
    }
}
