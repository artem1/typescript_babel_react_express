import Command from './../interfaces/Command'

export default class Delay extends Command<Promise<void>> {

  wait: number;

  constructor(wait: number) {
    super();
    this.wait = wait;
  }

  internalExecute() {
    return new Promise<void>(resolve => setTimeout(resolve, this.wait));
  }

}
