const assert = require('chai').assert;
const _ = require('../index');

describe("middle", () => {

  it("returns ['world'] for ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(_.middle(['hello', 'world', 'lighthouse']), ['world']);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(_.middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns undefined for 'string not an array'", () => {
    assert.deepEqual(_.middle('string not an array'), undefined);
  });

});