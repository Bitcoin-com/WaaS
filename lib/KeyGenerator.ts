import { BITBOX } from "bitbox-sdk"
import * as bcl from "bitcoincashjs-lib"
import { resturl } from "./Wallet"

const bitbox = new BITBOX()

export class KeyGenerator {
  public restURL: string
  public mnemonic: string = ""
  constructor(restURL: string = resturl) {
    this.restURL = restURL
  }

  public generate(): bcl.HDNode {
    // 128 bit engish mnemoonic
    let mnemonic: string = bitbox.Mnemonic.generate()
    this.mnemonic = mnemonic

    // root seed buffer
    let rootSeed: Buffer = bitbox.Mnemonic.toSeed(mnemonic)

    // master HDNode
    let masterHDNode: bcl.HDNode = bitbox.HDNode.fromSeed(rootSeed, "mainnet")

    // HDNode of BIP44 account
    let account: bcl.HDNode = bitbox.HDNode.derivePath(
      masterHDNode,
      "m/44'/145'/0'"
    )

    // derive the first external change address HDNode
    let change: bcl.HDNode = bitbox.HDNode.derivePath(account, "0/0")
    return change
  }

  public getSeedString(): string {
    return this.mnemonic
  }
}
