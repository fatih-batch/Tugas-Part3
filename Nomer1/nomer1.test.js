const ganjilGenap = require("./nomer1");

test("Test 1", () => {
    expect(ganjilGenap(2)).toEqual("2 adalah bilangan genap");
});
test("Test 2", () => {
    expect(ganjilGenap(5)).toEqual("2 adalah bilangan ganjil");
});