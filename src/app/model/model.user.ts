export class User {
  id: number;
  email: string;
  username: string;
  password: string;
  phone: string;
  role: string;

  constructor(user: any) {
    this.id = user.id;
    this.email = user.email;
    this.username = user.username;
    this.password = user.password;
    this.phone = user.phone
    this.role = user.role;
  }
}
