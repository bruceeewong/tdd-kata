// 01 FizzBuzz 游戏
// 任务需求
// ---
// 1.打印出从1到100的数字，
// 2.将其中3的倍数替换成“Fizz”，
// 3.5的倍数替换成“Buzz”，
// 4.既能被3整除、又能被5整除的数则替换成“FizzBuzz”。

// 很简单对吗？以下是这道题目的其他要求：
// ---
// 1.代码整洁，没有重复代码
// 2.有单元测试，单元测试覆盖率100%
// 3.10分钟内完成

function fizzbuzz(num) {
  if (canDivideBy(num, 15)) {
    return 'FizzBuzz';
  }
  if (canDivideBy(num, 3)) {
    return 'Fizz';
  }
  if (canDivideBy(num, 5)) {
    return 'Buzz';
  }
  return num.toString();
}

function canDivideBy(input, num) {
  return input % num === 0;
}

module.exports = fizzbuzz;
