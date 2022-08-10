import { Injectable, OnModuleInit } from '@nestjs/common';

interface User {
  id: string;
  name: string;
}

@Injectable()
export class UserService implements OnModuleInit {
  users = new Array<User>();

  onModuleInit() {
    this.users.push({
      id: 'devin',
      name: 'Devin Riley',
    });
    this.users.push({
      id: 'kyle',
      name: 'Kyle Fahey',
    });
  }

  getById(id: string) {
    return this.users.find((u) => u.id === id);
  }
}
