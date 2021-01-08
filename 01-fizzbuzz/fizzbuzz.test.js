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

// 添加 test() 方法以增加测试用例
// 添加 expect() 方法以添加断言
// 运行 npm run test:watch 以运行测试工具
// 运行 npm run test:cov 以生成测试覆盖率

function fizzbuzz(num) {
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  return "1";
}

describe("fizzbuzz", () => {
  test("测正常数字返回", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
  test("测3的倍数返回", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(6)).toEqual("Fizz");
  });
  test("测5的倍数返回", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
    expect(fizzbuzz(10)).toEqual("Buzz");
  });
});
