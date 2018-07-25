# js-pipe

> Compose over functions to help create negative code

Compose N sequence of operations, giving the output as an input for the next operation.


## Install

```
$ npm install @kysley/js-pipe
```
```
$ yarn add @kysley/js-pipe
```


## Usage

```js
import pipe from '@kysley/js-pipe'

const capatalize = txt => txt.toUpperCase()
const addNum = txt => `${txt}1`
const res = pipe(capatalize, addNum)

console.log(res('Hello World')) //Hello World1
```


## API

### pipe(fn1, fn2, fn3, ...)

Returns the final value from the sequence of functions, using the output for the input of the next operation until finished.

#### fnx

Type: `Function`

Iterated over sequentially until the sequence is finished.

## License

MIT © [Evan Kysley](https://kysley.com)
