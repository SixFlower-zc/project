let cssStyle = ["./css/首页.css", "./css/关于我们.css", "./css/新闻资讯.css", "./css/成功案例.css", "./css/尊享服务.css", "./css/招商加盟.css", "./css/联系我们.css"]
let TabControl = document.getElementById("tab").children
let MainContent = document.querySelectorAll("body>div")
let link = document.querySelector("link")
console.log(TabControl)
console.log(MainContent[0])
console.log(link)
let lastIndex = 0
TabControl = Array.from(TabControl)
TabControl.forEach((tab, index) => {
  console.log(tab)
  tab.click = function () {
    console.log(tab)
    tab.classList.add("moRen")
    TabControl[lastIndex].classList.remove("moRen")
    link.href = cssStyle[index]
    MainContent[lastIndex].style.display = "none"
    MainContent[index].style.display = "block"
    lastIndex = index
  }
})
