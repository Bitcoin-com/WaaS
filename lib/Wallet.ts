/// <reference path="./interfaces/vendors.d.ts"/>

// imports
import { IConfig } from "./interfaces/Interfaces"
import { KeyGenerator } from "./KeyGenerator"

// consts
export const resturl = "https://rest.bitcoin.com/v2/"
export const tresturl = "https://trest.bitcoin.com/v2/"
export const walleturl = "https://rest.bitcoin.com/v2/"
export const testwalleturl = "https://trest.bitcoin.com/v2/"

export class BITBOX {
  public restURL: string
  public walletURL: string
  public KeyGenerator: KeyGenerator
  constructor(config: IConfig = {}) {
    if (config && config.restURL && config.restURL !== "")
      this.restURL = config.restURL
    else this.restURL = resturl

    if (config && config.walletURL && config.walletURL !== "")
      this.walletURL = config.walletURL
    else this.walletURL = walleturl

    this.KeyGenerator = new KeyGenerator(this.restURL, this.walletURL)
  }
}
