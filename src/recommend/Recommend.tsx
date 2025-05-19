import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Recommend.scss'
const Recommend = () => {
  let setting = {
    dots:false,
    infinite:false,
    speed:500,
    slidesToShow :1.4,
    slidesToScroll:1,
  }
  return (
    <section className='recommend'>
      <h2 className='sec-tit'>Finansia Recommend</h2>
      <Slider {...setting}>
          <div className="slide-item">
            <div className='slide-in'>
              
            </div>

          </div>
          <div className="slide-item">
            <div className='slide-in'></div>
          </div>
      </Slider>

    </section>
  )
}

export default Recommend