import { LineChart } from "../chart/LineChart"
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
      <section className="index-sec">
        <Slider {...setting}>
          <div className="slide-item">
            <div className="label">SET</div>
            <LineChart type="up" />
            <IndexVal num="1,338.13" className2="fz16" num2="-2.81 (-0.21%)"/>
          </div>
          <div className="slide-item">
            <div className="label nasdak">NASDAK</div>
            <LineChart data={[20, 30, 20, 15, 20]}/>
            <IndexVal num="1,338.13" className1="fall" className2="fz16" num2="-2.81 (-0.21%)"/>
          </div>
          <div className="slide-item">
            <div className="label vietnam">VIETNAM</div>
            <LineChart data={[20, 30, 20, 15, 20]}/>
            <IndexVal num="1,338.13" className1="fall" className2="fz16" num2="-2.81 (-0.21%)"/>
          </div>
        </Slider>
      </section>
    </>
  )
}

export default Index