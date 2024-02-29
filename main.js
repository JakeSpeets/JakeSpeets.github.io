document.getElementById('encryptButton').addEventListener('click', encryptText);
document.getElementById('decryptButton').addEventListener('click', decryptText);

function encryptText() {
    var inputText = document.getElementById('inputText').value;
    // Your encryption algorithm goes here
    // Capitalize the input text
    inputText = inputText.toUpperCase();
    var encryptedText = inputText; // Replace this with your encryption algorithm
    document.getElementById('result').textContent = encryptedText;
}

function decryptText() {
    var inputText = document.getElementById('inputText').value;
    // Your decryption algorithm goes here
    // Lowercase the input text
    inputText = inputText.toLowerCase();
    var decryptedText = inputText; // Replace this with your decryption algorithm
    document.getElementById('result').textContent = decryptedText;
}