import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './recommend.scss'
import Recommend_Item from '../../../components/home/Recommend_Item';
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
      <div className='recomm_box'>
        <Slider {...setting}>
          <Recommend_Item  
            label='หุ้นไทย'
            title='AOT'
            text='ราคาเป้าหมาย 45 บาท'
            rate='Upside 10.23%'
            btTitle='แนะนำซื้อ'
            btText='ราคาเป้าหมายปรับขึ้นอย่างต่อเนื่อง ในสถานการณ์ปัจจุบัน ตามการผัน'
          />
          <Recommend_Item  
            label='หุ้นไทย'
            title='AOT'
            text='ราคาเป้าหมาย 45 บาท'
            rate='Upside 10.23%'
            btTitle='แนะนำซื้อ'
            btText='ราคาเป้าหมายปรับขึ้นอย่างต่อเนื่อง ในสถานการณ์ปัจจุบัน ตามการผัน'
            className='down'
          />
          <Recommend_Item  
            label='หุ้นไทย'
            title='AOT'
            text='ราคาเป้าหมาย 45 บาท'
            rate='Upside 10.23%'
            btTitle='แนะนำซื้อ'
            btText='ราคาเป้าหมายปรับขึ้นอย่างต่อเนื่อง ในสถานการณ์ปัจจุบัน ตามการผัน'
            className='down'
          />
        </Slider>
      </div>

    </section>
  )
}

export default Recommend