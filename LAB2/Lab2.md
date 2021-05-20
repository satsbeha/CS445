# Exercise 
 write a paper about how JS engine optimize JavaScript code.

 In JavaScript programs, it’s common to have multiple objects with the same property keys. Such objects have the same shape.this help JS engine to optimize JavaScript code.
 eg const object1 = { x: 1, y: 2 };
const object2 = { x: 3, y: 4 };
`object1` and `object2` have the same shape.
The objects have the same keys with no differences.we call this Monomorphism

source  https://mathiasbynens.be/notes/shapes-ics

https://www.digitalocean.com/community/tutorials/js-v8-engine
