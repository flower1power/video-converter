import { PromptServise } from './core/prompt/prompt.service.js';

export class App {
  async run() {
    const res = await new PromptServise().input<number>('Число', 'number');
    console.log(res);
  }
}

const app = new App();
app.run();
