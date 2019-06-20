import { BITBOX, HDNode } from "bitbox-sdk"
import * as bcl from "bitcoincashjs-lib"
import { TransactionProposal } from "./TransactionProposal"

const bitbox = new BITBOX()

export class HdPrivateKey extends HDNode {
  public hdNode: HDNode
  public mnemonic: string = ""
  constructor() {
    super()
    // 128 bit engish mnemoonic
    let mnemonic: string = bitbox.Mnemonic.generate()
    this.mnemonic = mnemonic

    // root seed buffer
    let rootSeed: Buffer = bitbox.Mnemonic.toSeed(mnemonic)

    // master HDNode
    let masterHDNode = bitbox.HDNode.fromSeed(rootSeed, "mainnet")

    // HDNode of BIP44 account
    let account: bcl.HDNode = bitbox.HDNode.derivePath(
      masterHDNode,
      "m/44'/145'/0'"
    )

    // derive the first external change address HDNode
    let change: bcl.HDNode = bitbox.HDNode.derivePath(account, "0/0")
    this.hdNode = change
  }

  public getSeedString(): string {
    return this.mnemonic
  }

  public signTransactionProposal(proposal: TransactionProposal): void {
    console.log("signTransactionProposal called")
  }

  public toXPub(): string {
    return bitbox.HDNode.toXPub(this.hdNode)
  }
}
