import {Inverter} from "../src/inverter"
import {SwappableInverter} from "../src/swappable-inverter"

describe("Inverter", () => {
  test("should invert", () => {
    var inverter = new Inverter("R U'");
    inverter.invert();
    expect(inverter.getAlg()).toBe("U R'");
    expect(inverter.inversionCount).toBe(1);
    inverter.invert();
    expect(inverter.getAlg()).toBe("R U'");
    expect(inverter.inversionCount).toBe(2);
  });
});

describe("SwappableInverter", () => {
  test("should allow swapping without resetting count", () => {
    var inverter = new SwappableInverter("R U'");
    inverter.invert();
    expect(inverter.getAlg()).toBe("U R'");
    expect(inverter.inversionCount).toBe(1);
    inverter.swap("F D");
    expect(inverter.getAlg()).toBe("F D");
    expect(inverter.inversionCount).toBe(1);
    inverter.swap("F D");
    inverter.invert();
    expect(inverter.getAlg()).toBe("D' F'");
    expect(inverter.inversionCount).toBe(2);
  });
});
