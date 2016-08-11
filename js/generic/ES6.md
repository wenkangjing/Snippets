#### ES6
http://es6.ruanyifeng.com/

**prefer let over var**
var: global scope
let: section scope
const: global const 


**prefer destructing assignment**

**using rest ...**
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];

**prefer => if function is simple/one-line/non-reusable**

=> auto bind(this)
avoid _this, self

// bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => {
  return x * x;
});

// best
[1, 2, 3].map(x => x * x);

**optional parameters**
avoid boolean 
bundle all optional parameters at the end
// bad
function divide(a, b, option = false ) {
}

// good
function divide(a, b, { option = false } = {}) {
}

**prefer class**
keyword extends

**prefer import over require**

**export**
single export: export default <name>
multiple exports: export <name>
do not combine export default and export

**avoid wildcard(*) when import module**
// bad
import * as myObject './importModule';

// good
import myObject from './importModule';

**naming**
export an object, start with upper case
export a function, start with lower case

function makeStyleGuide() {}
export default makeStyleGuide;

const StyleGuide = { };
export default StyleGuide;
