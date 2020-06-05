const assert = require("assert");
const { obj, cToF, fToC } = require("./app");

describe("Math", () => {
  it("should test if 5*3 = 15", () => assert.equal(15, 5 * 3));
  it("should test if (2-1)*6 = -6", () => assert.equal(-6, (1 - 2) * 6));
});

describe("Multiplication", () => {
  describe("multiply", () => {
    it("should multiply 5 and 1 to equal 5", () => {
      assert.equal(5, obj.multiply(5, 1));
    });
  });
});

describe("Array", () => {
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe("Assignment", () => {
  it("should test if 3*3 = 9", () => assert.equal(9, 3 * 3));
  it("should test if (3-4)*8 = -8", () => assert.equal(-8, (3 - 4) * 8));
});

describe("Temperature conversion", () => {
  describe("Celsius to Fahrenheit", () => {
    it("should convert -40 Celsius to -40 Fahrenheit", () => {
      assert.equal(-40, cToF(-40));
    });
    it("should convert 0 Celsius to 32 Fahrenheit", () => {
      assert.equal(32, cToF(0));
    });
    it("should should return undefined if not temperature is input", () => {
      assert.equal(undefined, cToF(""));
    });
  });
  describe("Fahrenheit to Celsius", () => {
    it("should convert -40 Fahrenheit to -40 Celsius", () => {
      assert.equal(-40, fToC(-40));
    });
    it("should convert 32 Fahrenheit to 0 Celsius", () => {
      assert.equal(0, fToC(32));
    });
    it("should return undefined if no temperature is input", () => {
      assert.equal(undefined, fToC(""));
    });
  });
});
