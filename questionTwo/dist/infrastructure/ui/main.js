import { Command } from "../../domain/command/Command";
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
