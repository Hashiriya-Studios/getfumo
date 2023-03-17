# getfumo.js
✨Simple and fast wrapper of fumo-api without dependencies.

## Install

`yarn add getfumo.js`/`pnpm add getfumo.js`/`npm i getfumo.js`

## How to use examples

```js
// get a random fumo
const { random } = require("getfumo.js");

random().then((response) => {
  console.log(response);
});
```
```js
// get a specific fumo
const { one } = require("getfumo.js");

one('6128c5828caf0cf9a83f7506').then((response) => {
  console.log(response);
});
```
```js
// get all fumos
const { all } = require("getfumo.js");

all().then((response) => {
  console.log(response);
});
```