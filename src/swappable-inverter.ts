import {Inverter} from "./inverter"
import {parse} from "alg"

export class SwappableInverter extends Inverter {
  swap(s: string) {
    this.alg = parse(s);
  }
}