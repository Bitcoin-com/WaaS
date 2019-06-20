import { resturl } from "./Wallet"

export class Address {
  public restURL: string
  constructor(restURL: string = resturl) {
    this.restURL = restURL
  }

  public toCashAddr(): string {
    return "bitcoincash:qrd9khmeg4nqag3h5gzu8vjt537pm7le85lcauzezc"
  }
}
