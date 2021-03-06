import ServiceInterface from './interfaces/ServiceInterface'
import APIService from './services/api/APIService';

export default class Server {

  apiService: ServiceInterface;

  constructor() {
    this.apiService = new APIService();
  }

  async start() {
    console.log('Start server');
    await this.apiService.start();
  }

  async stop() {
    await this.apiService.stop();
    console.log('Start stopped');
  }
}
