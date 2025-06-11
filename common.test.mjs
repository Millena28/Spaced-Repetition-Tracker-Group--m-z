import { getUserIDs } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";

test("User count is correct", () => {
 const ids = getUserIDs();
    assert.equal(ids.length,5);
    ids.forEach(id => {
      console.log(Array.isArray(id), ids);
      assert.strictEqual(typeof id,"string", 'expected ID ${id} tobe string');
    
  });
});
