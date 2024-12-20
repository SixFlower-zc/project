import { Carousel } from "antd"
import { Component } from "react"
import "./ServePage.css"

export default class ServePage extends Component {
  CarouselImg = ["/src/assets/slideshow2.jpg", "/src/assets/slideshow2.jpg", "/src/assets/slideshow2.jpg", "/src/assets/slideshow2.jpg"]

  render() {
    return (
      <>
        <div className="serve-page-carousel">
          <Carousel
            autoplay
            autoplaySpeed={1500}
            arrows>
            {this.CarouselImg.map((v, index) => (
              <div key={index}>
                <img
                  src={v}
                  alt="carousel"
                  style={{ width: "100%" }}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="serve-page-main">
          <div>
            <div>
              <div className="content">
                <h1>Welcome to Sixflower</h1>
                <p>六花是被中二病拯救的女孩是注视着你憧憬着你的中二病以及坚强信念的女孩是被你的力量迷倒并试图模仿你的力量的女孩所以她选择的是富堅君非富悭君不可</p>
              </div>
            </div>
            <div>
              <div className="content">
                <h1>Welcome to Sixflower</h1>
                <p>六花是被中二病拯救的女孩是注视着你憧憬着你的中二病以及坚强信念的女孩是被你的力量迷倒并试图模仿你的力量的女孩所以她选择的是富堅君非富悭君不可</p>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <div>
              <div className="content">
                <h1>Welcome to Sixflower</h1>
                <p>六花是被中二病拯救的女孩是注视着你憧憬着你的中二病以及坚强信念的女孩是被你的力量迷倒并试图模仿你的力量的女孩所以她选择的是富堅君非富悭君不可</p>
              </div>
            </div>
            <div>
              <div className="content">
                <h1>Welcome to Sixflower</h1>
                <p>六花是被中二病拯救的女孩是注视着你憧憬着你的中二病以及坚强信念的女孩是被你的力量迷倒并试图模仿你的力量的女孩所以她选择的是富堅君非富悭君不可</p>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <div>
              <div className="content">
                <h1>Welcome to Sixflower</h1>
                <p>六花是被中二病拯救的女孩是注视着你憧憬着你的中二病以及坚强信念的女孩是被你的力量迷倒并试图模仿你的力量的女孩所以她选择的是富堅君非富悭君不可</p>
              </div>
            </div>
            <div>
              <div className="content">
                <h1>Welcome to Sixflower</h1>
                <p>六花是被中二病拯救的女孩是注视着你憧憬着你的中二病以及坚强信念的女孩是被你的力量迷倒并试图模仿你的力量的女孩所以她选择的是富堅君非富悭君不可</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </>
    )
  }
}
