// function hello(compiler: string){
//   console.log(`Hello from ${compiler}!`);
// }
// hello('Typescript');

import {sayHello} from './greet';

function showHello(divName: string, name: string){
  const elt = document.getElementById(divName);
  elt.innertText = sayHello(name);
}

showHello('greeting', 'Typescript');
