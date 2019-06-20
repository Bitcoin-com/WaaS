import { resturl } from "./Wallet"

export class BroadcastResult {
  public restURL: string
  constructor(restURL: string = resturl) {
    this.restURL = restURL
  }

  public isSuccessful(): boolean {
    return true
  }

  public getTxId(): string {
    return "txid"
  }
}
