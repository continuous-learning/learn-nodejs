// 当 n === 0 时，返回 0；n === 1时，返回 1;
// n > 1 时，返回 fibonacci(n) === fibonacci(n-1) + fibonacci(n-2)，如 fibonacci(10) === 55;
// n 不可大于10，否则抛错，因为 Node.js 的计算性能没那么强。
// n 也不可小于 0，否则抛错，因为没意义。
// n 不为数字时，抛错。

let fabonacci = function (n) {
  if(typeof n !== 'number') throw new Error('n should be a Number')
  if(n < 0) throw new Error('n should >= 0')
  if(n > 10) throw new Error('n should <= 10')
  if(n === 0) return 0
  if(n === 1) return 1
  return fabonacci(n-1) + fabonacci(n-2)
}

if(require.demo1 !== module) {
  const n = Number(process.argv[2])
  console.log('fabonacci('+ n +') is', fabonacci(n))
}

exports.fabonacci = fabonacci