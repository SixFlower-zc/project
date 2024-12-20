// 节流函数
function throttle(fn, timer) {
  let timeout = null;
  return (...ms) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn(...ms);
        timeout = null;
      }, timer);
    }
  };
}

module.exports = {
  throttle,
};
