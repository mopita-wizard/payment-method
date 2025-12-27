document.getElementById('paymentForm').addEventListener('submit', function(e) {
    // Prevent the default form submission
    e.preventDefault();

    // Get the selected radio button value
    const selectedMethod = document.querySelector('input[name="method"]:checked').value;

    // Redirect based on the value
    if (selectedMethod === 'mpesa') {
        window.location.href = 'mpesa_payment.html';
    } else if (selectedMethod === 'equity') {
        window.location.href = 'equity_payment.html';
    }
});