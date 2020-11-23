async function start() {
  return await Promise.resolve('async is working')
}

start().then(console.log);

class Util {
  static id = Date.now();
}
const unused = 'im not using';
console.log('Util ID:', Util.id);

import('lodash').then((_) => {
  console.log('LODASH:', _.random(0, 42, true));
})