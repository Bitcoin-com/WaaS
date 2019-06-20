import { Address } from "./Address"
import { resturl } from "./Wallet"

export class WalletBackendSession {
  public restURL: string
  constructor(restURL: string = resturl) {
    this.restURL = restURL
  }

  public registerPubkey(xpub: string): void {
    console.log(`Registering xpub: ${xpub}`)
  }

  public getNewAddress(): Address {
    return new Address()
  }

  public initiatePayment(address: string, amount: number): any {
    return "initiatePayment called"
  }

  public sendSignedTransaction(proposal: any): any {
    return "sendSignedTransaction called"
  }

  public getBalace(): number {
    return 1
  }

  public close(): void {
    console.log("CLOSE called")
  }
}
