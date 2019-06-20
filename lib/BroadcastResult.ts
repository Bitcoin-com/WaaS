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
    return "1d4fa813781534566f0c750a564326ac59fcee6595a3119370c372b06fbe8a93"
  }
}
