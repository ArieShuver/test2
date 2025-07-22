import assert from 'node:assert';
import test from 'node:test';
import { kmToMeters } from "./distanceUtils.js"

test('throws on NaN', () => {
    assert.throws(() => kmToMeters(NaN), {
        name: 'TypeError',
        message: 'valid input',
    });
});

test("throws on 0", () => {
    assert.throws(() => kmToMeters(0), {
        name: 'TypeError',
        message: 'valid input'
    })
});

test ("throws on > 0" , () =>{
    assert.throws(() => kmToMeters(-5),{
        name: 'TypeError',
        message: 'valid input'
    })
});

test ("throws on decimal" , () =>{
    assert.throws(() => kmToMeters(0.5),{
        name: 'TypeError',
        message: 'valid input'
    })
});




