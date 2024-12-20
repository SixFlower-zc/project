// 防抖函数
function debounce(fn, timer) {
  let timerout = null;
  return (...ms) => {
    clearTimeout(timerout);
    timerout = setTimeout(() => {
      fn(...ms);
    }, timer);
  };
}

module.exports = {
  debounce,
};
