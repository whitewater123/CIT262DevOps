import assert from 'assert';
import sayHello from "../utils/helloworld.js";

it("Should say hello", ()=>{
    const hello = sayHello();

    assert.equal(hello, "hello");
});