import dayjs from 'dayjs'

// 转换日期为指定格式的字符串
const dayToStr = (str: string) => {
  return dayjs(new Date()).format(str)
}

export default dayToStr
