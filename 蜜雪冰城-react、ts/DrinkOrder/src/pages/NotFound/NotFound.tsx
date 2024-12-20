import { Component } from "react"
import "./css/index.css"

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <div className="box">
          <div className="number">404</div>
          <div className="text">
            <span>页面找不到了</span>
            <br />
            可能已经被删除
          </div>
        </div>
      </div>
    )
  }
}
