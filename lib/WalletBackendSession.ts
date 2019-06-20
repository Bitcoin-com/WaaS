import { Address } from "./Address"
import { BroadcastResult } from "./BroadcastResult"
import { TransactionProposal } from "./TransactionProposal"
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

  public initiatePayment(address: string, amount: number): TransactionProposal {
    return new TransactionProposal()
  }

  public sendSignedTransaction(proposal: TransactionProposal): BroadcastResult {
    return new BroadcastResult()
  }

  public getBalace(): number {
    return 1
  }

  public close(): void {
    console.log("CLOSE called")
  }
}
