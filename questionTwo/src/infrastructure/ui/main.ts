import { Command, ICommand } from "../../domain/command/Command";

function processCommands(commands: ICommand[]): number[] {
  return commands.map(command => command.process());
}

function handleSubmit(event: Event): void {
  event.preventDefault();

  const commandsInput = document.getElementById('commands') as HTMLInputElement;
  const commandList = commandsInput.value.replace(/\s/g, '').split(',');

  const commands = commandList.map(command => new Command(command));
  const finalAddresses = processCommands(commands);

  const resultDiv = document.getElementById('result');
  if (resultDiv) {
    resultDiv.textContent = `Endereços finais: ${finalAddresses.join(', ')}`;
  }
}