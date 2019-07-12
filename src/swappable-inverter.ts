import {parse} from "alg";
import {Inverter} from "./inverter";

export class SwappableInverter extends Inverter {
  public swap(s: string) {
    this.alg = parse(s);
  }
}
