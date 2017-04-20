'use strict';

const up = 'most';
const er = 0;
const ve = [ 'beautiful', 'excellent', 'wonderful', 'impeccable', 'incredible' ];
const la = ve.length;
const ti = ' ';

const s = v => w => x => y => z => v + y + z[Math.floor(Math.random()*(w-x+1)+x)];
console.log(s(up)(er)(la)(ti)(ve));