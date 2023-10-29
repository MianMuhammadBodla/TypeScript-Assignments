function makeShirt(size = "Large", message = "I love my parents") {
    return console.log(`Size: ${size}, Message: '${message}'`);
}
// Large shirt with default message
makeShirt(); // Output: Size: Large, Message: 'I love my parents'
// Medium shirt with default message
makeShirt("Medium"); // Output: Size: Medium, Message: 'I love my parents'
// Custom shirt with a different message and size
makeShirt("Small", "tell me about in which color shirt are available!"); // Output: Size: Small, Message: 