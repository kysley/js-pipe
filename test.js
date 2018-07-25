import test from 'ava'
import m from '.'

const double = val => val * 2
const triple = val => val * 3
const add = (x, y) => x + y


test('single pipe', t => {
  const pipe = m(double)
  t.is(pipe(2), 4)
})

test('double pipe', t => {
  const pipe = m(double, triple)
  t.is(pipe(2), 12)
})

test('triple pipe', t => {
  const pipe = m(double, double, triple)
  t.is(pipe(2), 24)
})

test('two params', t => {
  const pipe = m(add)
  t.is(pipe(1, 2), 3)
})

test('two params double pipe', t => {
  const pipe = m(add, double)
  t.is(pipe(1, 2), 6)
})