# getfumo
✨Simple and fast wrapper of fumo-api without dependencies.

## Install

`yarn add getfumo`/`pnpm add getfumo`/`npm i getfumo`

## How to use examples

```js
// get a random fumo
const { random } = require("getfumo");

random().then((response) => {
  console.log(response);
});
```
```js
// get a specific fumo
const { one } = require("getfumo");

one('6128c5828caf0cf9a83f7506').then((response) => {
  console.log(response);
});
```
```js
// get all fumos
const { all } = require("getfumo");

all().then((response) => {
  console.log(response);
});
```