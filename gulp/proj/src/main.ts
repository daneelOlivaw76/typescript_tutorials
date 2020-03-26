// function hello(compiler: string){
//   console.log(`Hello from ${compiler}!`);
// }
// hello('Typescript');

import {sayHello} from './greet';

function showHello(divName: string, name: string){
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

showHello('greeting', 'Typescript');
