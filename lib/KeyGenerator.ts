import { HdPrivateKey } from "./HdPrivateKey"
import { resturl, walleturl } from "./Wallet"

export class KeyGenerator {
  public restURL: string
  public walletURL: string
  public mnemonic: string = ""
  constructor(restURL: string = resturl, walletURL: string = walleturl) {
    this.restURL = restURL
    this.walletURL = walletURL
  }

  public generate(): HdPrivateKey {
    const hdPrivateKey: HdPrivateKey = new HdPrivateKey()
    return hdPrivateKey
  }
}
