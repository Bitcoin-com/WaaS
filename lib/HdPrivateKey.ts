import { resturl } from "./Wallet"

export class HdPrivateKey {
  public restURL: string
  constructor(restURL: string = resturl) {
    this.restURL = restURL
  }

  public generate() {
    return "foobar"
  }
}
