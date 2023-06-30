var Command = /** @class */ (function () {
    function Command(command) {
        this.addressCommandPrefix = '20';
        this.jumpCommandPrefix = '5';
        this.command = command;
    }
    Command.prototype.process = function () {
        var finalAddress = 0;
        var currentIndex = 0;
        if (this.command.startsWith(this.addressCommandPrefix)) {
            finalAddress += parseInt(this.command.substring(2), 10);
        }
        else if (this.command.startsWith(this.jumpCommandPrefix)) {
            var jumpAmount = parseInt(this.command.substring(1), 10);
            currentIndex += jumpAmount - 1;
        }
        currentIndex++;
        return finalAddress;
    };
    return Command;
}());
export { Command };
function processCommands(commands) {
    return commands.map(function (command) { return command.process(); });
}
function handleSubmit(event) {
    event.preventDefault();
    var commandsInput = document.getElementById('commands');
    var commandList = commandsInput.value.replace(/\s/g, '').split(',');
    var commands = commandList.map(function (command) { return new Command(command); });
    var finalAddresses = processCommands(commands);
    var resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.textContent = "Endere\u00E7os finais: ".concat(finalAddresses.join(', '));
    }
}
