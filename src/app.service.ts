import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getVersion(): Promise<string> {
    return 'Version-1';
  }

  async newTest2(): Promise<void> {}
}
