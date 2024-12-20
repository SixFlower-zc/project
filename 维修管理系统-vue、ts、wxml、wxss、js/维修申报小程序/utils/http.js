function http({ url, method = "GET", data = {} }) {
  return new Promise((r, j) => {
    wx.request({
      method,
      url: "http://localhost:1314" + url,
      data,
      success(e) {
        r(e);
      },
      fail(e) {
        j(e);
      },
    });
  });
}

module.exports = {
  http,
};
