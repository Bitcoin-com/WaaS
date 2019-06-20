import { resturl } from "./Wallet"

export class TransactionProposal {
  public restURL: string
  constructor(restURL: string = resturl) {
    this.restURL = restURL
  }

  public generate() {
    return "foobar"
  }
}
