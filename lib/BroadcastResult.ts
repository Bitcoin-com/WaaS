import { resturl } from "./Wallet"

export class BroadcastResult {
  public restURL: string
  constructor(restURL: string = resturl) {
    this.restURL = restURL
  }

  public generate() {
    return "foobar"
  }
}
