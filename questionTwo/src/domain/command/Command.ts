export interface ICommand {
    process(): number;
  }
  
  export class Command implements ICommand {
    private addressCommandPrefix = '20';
    private jumpCommandPrefix = '5';
    private command: string;
  
    constructor(command: string) {
      this.command = command;
    }
  
    process(): number {
      let finalAddress = 0;
      let currentIndex = 0;
  
      if (this.command.startsWith(this.addressCommandPrefix)) {
        finalAddress += parseInt(this.command.substring(2), 10);
      } else if (this.command.startsWith(this.jumpCommandPrefix)) {
        const jumpAmount = parseInt(this.command.substring(1), 10);
        currentIndex += jumpAmount - 1;
      }
      
      currentIndex++;
  
      return finalAddress;
    }
  }
  
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