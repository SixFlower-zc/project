// 随机字符串生成
const RandomString = (length: number) => {
  let result = ''
  const digits = '0123456789'

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(
      Math.random() * digits.length
    )
    result += digits[randomIndex]
  }

  return result
}

export default RandomString
