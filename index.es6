'use strict';

const o = 'most';
const v = 0;
const fe = [ 'beautiful', 'excellent', 'wonderful', 'impeccable', 'incredible' ];
const f = fe.length;
const e = ' ';

const c = v => w => x => y => z => v + y + z[Math.floor(Math.random()*(w-x+1)+x)];
console.log(c(o)(v)(f)(e)(fe));
