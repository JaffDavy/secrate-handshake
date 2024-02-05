function generateSecretHandshake() {
    const numberInput = parseInt(document.getElementById('numberInput').value)
    if (!numberInput || numberInput < 0) {
        alert('Please enter a valid non-negative number.')
        return;
    }

    const binaryRepresentation = numberInput.toString(2); // Convert the number to binary
    const handshake = decodeBinary(binaryRepresentation)

    const secretHandshakeElement = document.getElementById('secretHandshake')
    secretHandshakeElement.textContent = `Secret Handshake: ${handshake.join(', ')}`
}

function decodeBinary(binaryString) {
    const handshakeActions = [
        "wink",
        "double blink",
        "close your eyes",
        "jump",
        "Reverse the order"
    ];

    const decodedHandshake = []

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            if (handshakeActions[i] === "Reverse the order") {
                decodedHandshake.reverse();
            } else {
                decodedHandshake.push(handshakeActions[i])
            }
        }
    }

    return decodedHandshake
}
