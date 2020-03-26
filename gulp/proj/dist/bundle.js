(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello from " + name + ".";
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
// function hello(compiler: string){
//   console.log(`Hello from ${compiler}!`);
// }
// hello('Typescript');
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello('greeting', 'Typescript');

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsU0FBZ0IsUUFBUSxDQUFDLElBQVk7SUFDbkMsT0FBTyxnQkFBYyxJQUFJLE1BQUcsQ0FBQztBQUMvQixDQUFDO0FBRkQsNEJBRUM7Ozs7QUNGRCxvQ0FBb0M7QUFDcEMsNENBQTRDO0FBQzVDLElBQUk7QUFDSix1QkFBdUI7O0FBRXZCLGlDQUFpQztBQUVqQyxTQUFTLFNBQVMsQ0FBQyxPQUFlLEVBQUUsSUFBWTtJQUM5QyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQsU0FBUyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsbyhuYW1lOiBzdHJpbmcpe1xuICByZXR1cm4gYEhlbGxvIGZyb20gJHtuYW1lfS5gO1xufVxuIiwiLy8gZnVuY3Rpb24gaGVsbG8oY29tcGlsZXI6IHN0cmluZyl7XG4vLyAgIGNvbnNvbGUubG9nKGBIZWxsbyBmcm9tICR7Y29tcGlsZXJ9IWApO1xuLy8gfVxuLy8gaGVsbG8oJ1R5cGVzY3JpcHQnKTtcblxuaW1wb3J0IHtzYXlIZWxsb30gZnJvbSAnLi9ncmVldCc7XG5cbmZ1bmN0aW9uIHNob3dIZWxsbyhkaXZOYW1lOiBzdHJpbmcsIG5hbWU6IHN0cmluZyl7XG4gIGNvbnN0IGVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xuICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8obmFtZSk7XG59XG5cbnNob3dIZWxsbygnZ3JlZXRpbmcnLCAnVHlwZXNjcmlwdCcpO1xuIl19
