"use strict";
function processCommands(commands) {
    var addressCommandPrefix = '20';
    var jumpCommandPrefix = '5';
    var finalAddress = 0;
    var currentIndex = 0;
    while (currentIndex < commands.length) {
        var currentCommand = commands[currentIndex];
        if (currentCommand.startsWith(addressCommandPrefix)) {
            finalAddress += parseInt(currentCommand.substring(2), 10);
        }
        else if (currentCommand.startsWith(jumpCommandPrefix)) {
            var jumpAmount = parseInt(currentCommand.substring(1), 10);
            currentIndex += jumpAmount - 1;
        }
        currentIndex++;
    }
    return finalAddress;
}
function handleSubmit(event) {
    event.preventDefault();
    var commandsInput = document.getElementById('commands');
    var commandList = commandsInput.value.replace(/\s/g, '').split(',');
    var finalAddress = processCommands(commandList);
    var resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = "Endere\u00E7o final: ".concat(finalAddress);
    }
}
