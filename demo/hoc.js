function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
    target.prototype.isTestable = isTestable;
  }
}

@testable(true)
class MyTestClass {}

console.log('MyTestClass:', MyTestClass.isTestable);
