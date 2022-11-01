// console.log('hello world');

function test(a: number, b: number) {
  return a + b;
}
// 타입스크립트는 타입을 지정해줘야한다.
// :any를 붙이면 어떤 타입이든 상관 없다.

//console.log(test('1', '2'));
// 에디터 자체에서 매개변수 자리가 숫자타입이라고 아예 에러를 떠서 콘솔에 찍지지도 못함
console.log(test(1, 2)); // 3

// 처음에 node test.ts로 했더니 계속 에러가 났는데
// ts-node를 설치한 후, 코드 ( npm install -g ts-node )
// ts-node test.ts로 했더니 결과값이 잘 출력이 되었다.
