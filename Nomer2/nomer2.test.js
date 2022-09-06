const nilai = require("./nomer2");

test("Test 1", () => {
    expect(nilai(50)).toEqual("C");
});
test("Test 2", () => {
    expect(nilai(85)).toEqual("A");
});