const assert = require('chai').assert;
const _ = require('../index');

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(_.tail([1, 2]), [2]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(_.tail([1]), []);
  });

  it("returns undefined for 'string not an array'", () => {
    assert.deepEqual(_.tail('string not an array'), undefined);
  });

});