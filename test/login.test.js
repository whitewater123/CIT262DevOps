import assert from 'assert';
import login from '../utils/login.mjs';

it("Test the STEDI Login Endpoint", async({userName, password})=>{ 

    const loginToken= await login({userName:"bobbuilder808@gmail.com", password: "P@ssw0rd"});//this is not what it will be eventually
 
    assert.equal(loginToken.length,36);//check for a valid token 
 } 
 );