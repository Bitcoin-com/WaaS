import { resturl } from "./Wallet"

export class Address {
  public restURL: string
  constructor(restURL: string = resturl) {
    this.restURL = restURL
  }

  public toCashAddr(): string {
    return "foobar"
  }
}
