import testCoponent from "./testComponent";

function a(plusParamether: number) {
  return plusParamether + testCoponent(4, 5);
  // textComponent --> a+b
}
console.log(a(50));
