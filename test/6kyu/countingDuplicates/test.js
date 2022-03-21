const { assert } = require("chai")
const duplicateCount = require('../../../6Kyu/countingDuplicates/solution');

describe("countingDuplicates Example tests", function () {
    assert.strictEqual(duplicateCount(""), 0);
    assert.strictEqual(duplicateCount("abcde"), 0);
    assert.strictEqual(duplicateCount("aabbcde"), 2);
    assert.strictEqual(duplicateCount("aabBcde"), 2, "should ignore case");
    assert.strictEqual(duplicateCount("Indivisibility"), 1)
    assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
})


describe("countingDuplicates More tests", function () {
    let lowers = "abcdefghijklmnopqrstuvwxyz", uppers = lowers.toUpperCase();
    assert.strictEqual(duplicateCount(lowers), 0)
    assert.strictEqual(duplicateCount(lowers + "baaAAB"), 2, "characters may not be adjacent")

    assert.strictEqual(duplicateCount(lowers + lowers), 26)
    assert.strictEqual(duplicateCount(lowers + uppers), 26, "should ignore case")

    let rnd = function (x) { return ~~(Math.random() * x) };

    // console.log("countingDuplicates Random tests");
    for (let t = 0, times = 5 + rnd(4); t < times; t++) {
        let len = 3 + rnd(5), i = len + 1, str = lowers.slice(0, len * 2);
        if (rnd(100) < 70) {
            while (i--) str += ([lowers, uppers][rnd(2)]).slice(0, i);
        } else {
            str += lowers.slice(-len);
            len = 0;
        }
        // console.log("> " + str + " ?")
        assert.strictEqual(duplicateCount(str), len)
    }
})