  // 1. writeCards() Function
function writeCards(names, event) {
    // Create an empty array to store the thank you messages
    let thankYouMessages = [];
  
    // Loop through each name in the array
    for (let i = 0; i < names.length; i++) {
      // Create a thank you message for each name and add it to the array
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  
    // Return the array of messages
    return thankYouMessages;
  }
  
  // Example usage for writeCards function
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  // Expected output: 
  // [
  //   "Thank you, Charlie, for the wonderful birthday gift!",
  //   "Thank you, Samip, for the wonderful birthday gift!",
  //   "Thank you, Ali, for the wonderful birthday gift!",
  // ]
  
  
  // 2. countDown() Function
  function countDown(number) {
    // Use a while loop to count down from the given number to zero
    while (number >= 0) {
      console.log(number);
      number--; // Decrease the number by 1 each time
    }
  }
  
  // Example usage for countDown function
  countDown(10);
  // Expected output: 
  // 10
  // 9
  // 8
  // 7
  // 6
  // 5
  // 4
  // 3
  // 2
  // 1
  // 0
  