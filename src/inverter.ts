import {Algorithm, invert, algToString, parse} from "alg"

export class Inverter {
  public inversionCount = 0;
  protected alg: Algorithm;
  constructor(s: string) {
    this.alg = parse(s);
  }

  invert(): void {
    this.alg = invert(this.alg);
    this.inversionCount += 1;
  }

  getAlg(): string {
    return algToString(this.alg);
  }
}