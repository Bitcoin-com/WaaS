import * as bcl from "bitcoincashjs-lib"
import { Address } from "./Address"
import { BroadcastResult } from "./BroadcastResult"
import { KeyGenerator } from "./KeyGenerator"
import { TransactionProposal } from "./TransactionProposal"
import { WalletBackendSession } from "./WalletBackendSession"

const kg: KeyGenerator = new KeyGenerator()
const myPriv: bcl.HDNode = kg.generate()
console.log(`Your seed is ${kg.getSeedString()}`)

const session: WalletBackendSession = new WalletBackendSession()

session.registerPubkey(myPriv.toXPub(myPriv))

const receiveAddress: Address = session.getNewAddress()

const address: string = receiveAddress.toCashAddr()
const amount: number = 1

console.log(`Send BCH to ${address}`)

console.log(`You have ${session.getBalace().toString()} BCH in your wallet`)

const proposal: TransactionProposal = session.initiatePayment(address, amount)

myPriv.signTransactionProposal(proposal)

const result: BroadcastResult = session.sendSignedTransaction(proposal)

if (result.isSuccessful()) {
  console.log(`Bitcoin cash was sent as tx ${result.getTxId()}`)
}

session.close()
