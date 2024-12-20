export default {
  plugins: {
    "postcss-px-to-viewport": {
      // 设计稿的宽度
      viewportWidth: 375,
      // 允许转换的单位
      unitToConvert: "px",
      // 需要转换的属性
      propList: ["*"],
      // 最小的转换数值
      minPixelValue: 1,
    },
  },
}
