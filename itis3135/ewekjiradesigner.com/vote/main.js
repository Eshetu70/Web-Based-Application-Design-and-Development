// Initialize PayPal SDK
paypal.Buttons({
    createOrder: function(data, actions) {
      // Create an order when the PayPal button is clicked
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: document.getElementById('voteAmount').value // Dynamic monetary value for each vote
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      // Capture the payment when the user approves the transaction
      return actions.order.capture().then(function(details) {
        // Handle successful payment
        showMessage('Payment successful!');
      });
    }
  }).render('#container'); // Render the PayPal button inside the container element
  
  // Function to display a message
  function showMessage(message) {
    var messageElement = document.createElement('p');
    messageElement.id = 'message';
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
  }
  