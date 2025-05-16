import { LineChart } from "./LineChart"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import IndexVal from "../common/IndexVal";
const Index = () => {
  let setting = {
    dots:false,
    infinite:false,
    speed:500,
    slidesToShow :2.4,
    slidesToScroll:1,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
  }
  return (
    <>
    <div className="index-sec">
      <Slider {...setting}>
        <div className="slide-item">
          <div className="label">SET</div>
          <LineChart type="up" />
          <div className="texts">
            <IndexVal num="1,338.13" className="fz16 f-bold"/>
            <span>-2.81 (-0.21%)</span>
          </div>
        </div>
        <div className="slide-item">
          <div className="label nasdak">NASDAK</div>
          <LineChart />
          <div className="texts fall">
            <IndexVal num="1,338.13" className="fz16 f-bold fall"/>
            <span>-2.81 (-0.21%)</span>
          </div>
        </div>
        <div className="slide-item">
          <div className="label vietnam">VIETNAM</div>
          <LineChart />
        </div>
      </Slider>
    </div>
    </>
  )
}

export default Index