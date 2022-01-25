import assert from 'assert';
//import sayHello from "../utils/helloworld.js";

/*it("Should say hello", ()=>{
    const hello = sayHello();

    assert.equal(hello, "hello");
});*/

import login from '../utils/login.mjs';

it("Login API should return a valid login token",async ()=>{
    const loginToken=await login({userName:"was16006@byui.edu", password: "Pika@2000"});
    assert.equal(loginToken.length,36);
})

export default login;