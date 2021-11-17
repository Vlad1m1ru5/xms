export class SignPayloadDto {
  username: string;
  sub: string;

  constructor(username: string, sub: string) {
    this.username = username;
    this.sub = sub;
  }
}
