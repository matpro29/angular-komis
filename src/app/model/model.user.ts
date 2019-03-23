export class User {
  id: number;
  email: string;
  username: string;
  password: string;
  role: string;

  constructor(user: any) {
    this.id = user.id;
    this.email = user.email;
    this.username = user.username;
    this.password = user.password;
    this.role = user.role;
  }
}
