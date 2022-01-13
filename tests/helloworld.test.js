import {expect, it} from "@jest/globals";
import sayHello from "../ultils/helloworld.js";

it("Should say hello", ()=>{
    const sayHello = sayHello();

    expect(sayHello).toBe("hello");
});