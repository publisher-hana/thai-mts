import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './home.scss'
import IndexVal from '../../components/common/IndexVal';
const Currency = () => {
  let setting = {
    dots:false,
    infinite:false,
    speed:500,
    slidesToShow :2.4,
    slidesToScroll:1,
  }
  return (
    <section className='currency'>
      <h2 className='sec-tit'>Currency</h2>
      <Slider {...setting}>
        <div className='currency-box'>
          <div className='box'>
            <h3>USD/THB</h3>
            <IndexVal num="33.80" className2="fz16" num2="+0.30 (+0.21%)"/>
          </div>
        </div>    
        <div className='currency-box'>
          <div className='box'>
            <h3>EUR/THB</h3>
            <IndexVal num="35.32" className1="fall" className2="fz16" num2="-2.81 (-0.21%)"/>
          </div>
        </div>    
        <div className='currency-box'>
          <div className='box'>
            <h3>JYP/THB</h3>
            <IndexVal num="35.32" className1="fall" className2="fz16" num2="-2.81 (-0.21%)"/>
          </div>
        </div>    
        <div className='currency-box'>
          <div className='box'>
            <h3>KOR/THB</h3>
            <IndexVal num="35.32" className1="fall" className2="fz16" num2="-2.81 (-0.21%)"/>
          </div>
        </div>    
      </Slider>
    </section>
  )
}

export default Currency