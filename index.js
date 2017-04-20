'use strict';

const superlatives = [ 'beautiful', 'excellent', 'wonderful', 'impeccable', 'incredible' ];
const randomInt = (min) => (max) => Math.floor(Math.random()*(max-min+1)+min); 
console.log(superlatives[randomInt(0)(superlatives.length - 1)]);
