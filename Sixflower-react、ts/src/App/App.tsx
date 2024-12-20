import { Component } from "react"
import { Link, Outlet } from "react-router"
import "./App.css"
import http from "../utils/http"

http({
  url: "/public/data/data.json",
})
  .then((res) => {
    console.log(res.data.name)
  })
  .catch((err) => {
    console.log(err)
  })

export default class App extends Component {
  state = {
    urlArr: [
      { name: "服务", path: "/serve" },
      { name: "案例", path: "/case" },
      { name: "评价", path: "/evaluate" },
      { name: "首页", path: "/" },
      { name: "保障", path: "/safeguard" },
      { name: "问题", path: "/problem" },
      { name: "关于", path: "/about" },
    ],
    activeIndex: 3,
  }
  render() {
    return (
      <div className="container">
        <div className="bg"></div>
        <div className="content">
          <header>
            <div className="img">
              <img
                src="/src/assets/six_flower.jpg"
                alt=""
              />
            </div>
            <div className="title">六六六花花</div>
            <ul>
              <li>
                联系六六六花花<span>666-666-666</span>
              </li>
              <li>
                联系六六六花花<span>666-666-666</span>
              </li>
              <li>
                联系六六六花花<span>666-666-666</span>
              </li>
              <li>
                联系六六六花花<span>666-666-666</span>
              </li>
            </ul>
          </header>
          <nav>
            {this.state.urlArr.map((item, index) => (
              <Link
                to={item.path}
                key={item.path}
                className={index === this.state.activeIndex ? "active" : ""}
                onClick={() => this.setState({ activeIndex: index })}>
                {index === this.state.activeIndex ? (
                  <img
                    src="/src/assets/address.png"
                    alt=""
                    style={{ width: "20px", height: "20px" }}
                  />
                ) : (
                  item.name
                )}
              </Link>
            ))}
          </nav>
          <Outlet />
          <footer>
            <div className="main">
              <div>
                <h3>六六六花花科技有限公司</h3>
                <p>与我携手，坐拥全球领先的技术服务</p>
              </div>
              <div>
                <img
                  src="/src/assets/six_flower.jpg"
                  alt=""
                />
                <img
                  src="/src/assets/six_flower.jpg"
                  alt=""
                />
                <img
                  src="/src/assets/six_flower.jpg"
                  alt=""
                />
              </div>
            </div>
            <ul>
              {this.state.urlArr.map((item, index) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => this.setState({ activeIndex: index })}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bottom">六六六花花已备案</div>
          </footer>
        </div>
      </div>
    )
  }
}
