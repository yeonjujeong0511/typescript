const path = require("path");
// commonJS방식, package.json에 mjs방식으로 정의하지 않았다.

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "src/index.ts"),
  // 번들링이 기준이 되는 entry 파일이 typescript인것을 확인
  module: {
    rules: [
      // typescript를 웹팩으로 자동화 시키기 위해 module property의 규칙을 부여했다.
      // rules 객체는 배열 방식인 것을 주의깊게 볼 것
      {
        test: /\.tsx?$/, // 정규식 방식이므로 외우지 않고 검색을 통해 해결할 것
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // 해석하는 데이터 확장자를 뜻한다.
    extensions: [".tsx", ".ts", ".js"],
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist/source/"),
    filename: "index.bundle.js",
  },
};
