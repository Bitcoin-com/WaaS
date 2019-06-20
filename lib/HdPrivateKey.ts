import { HDNode, Mnemonic } from "bitbox-sdk"
import * as bcl from "bitcoincashjs-lib"
import { TransactionProposal } from "./TransactionProposal"

const mnemonic: Mnemonic = new Mnemonic()
const hDNode: HDNode = new HDNode()

export class HdPrivateKey extends HDNode {
  public hdNode: HDNode
  public mnemonic: string = ""
  constructor() {
    super()
    // 128 bit engish mnemoonic
    let m: string = mnemonic.generate()
    this.mnemonic = m

    // root seed buffer
    let rootSeed: Buffer = mnemonic.toSeed(m)

    // master HDNode
    let masterHDNode: bcl.HDNode = hDNode.fromSeed(rootSeed, "mainnet")

    // HDNode of BIP44 account
    let account: bcl.HDNode = hDNode.derivePath(masterHDNode, "m/44'/145'/0'")

    // derive the first external change address HDNode
    let change: bcl.HDNode = hDNode.derivePath(account, "0/0")
    this.hdNode = change
  }

  public getSeedString(): string {
    return this.mnemonic
  }

  public signTransactionProposal(proposal: TransactionProposal): void {
    console.log("signTransactionProposal called")
  }

  public toXPub(): string {
    return hDNode.toXPub(this.hdNode)
  }
}
