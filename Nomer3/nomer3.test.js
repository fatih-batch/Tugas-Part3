const gaji = require("./nomer3");

test("Test 1", () => {
    expect(gaji("Agus", "A", 40)).toEqual("Agus menerima upah Rp200000 per minggu");
});
test("Test 2", () => {
    expect(gaji("Samsul", "D", 45)).toEqual("Agus menerima upah Rp200000 per minggu");
});