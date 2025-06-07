import { useState } from 'react';
import TabBar from '../../../components/common/TabBar'
import './news.scss'
import { CiClock2 } from "react-icons/ci";
const News = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <section className='news'>
      <h2 className='sec-tit'>News</h2>
      <TabBar items={['ทั้งหมด', 'หุ้นไทย', 'หุ้นต่างประเทศ']} 
        onTabChange={handleTabChange}
      />
      {selectedTab === 0 && (
        <ul className='news-list'>
          <li>
            <a href='#' className='news-box'>
              <span className='label'>หุ้นไทย</span>
              <p>หุ้นกลุ่มธนาคารพาณิชย์ส่วนใหญ่ปรับตัว ขึ้น จากเมื่อวาน นำโดย KTB บวก 3.49% มาอยู่ท หุ้นกลุ่มธนาคารพาณิชย์ส่วนใหญ่ปรับตัว</p>
              <div className='tail'>
                <span className='date'><span className='ico'><CiClock2 /></span>25/09/24</span>
                <span className='clock'>12:05:54</span>
              </div>
            </a>
          </li>
          <li>
            <a href='#' className='news-box'>
              <span className='label'>หุ้นไทย</span>
              <p>Nvidia earnings preview: High stakes for the AI trade บัน</p>
              <div className='tail'>
                <span className='date'><span className='ico'><CiClock2 /></span>25/09/24</span>
                <span className='clock'>12:05:54</span>
              </div>
            </a>
          </li>
          <li>
            <a href='#' className='news-box'>
              <span className='label brown'>หุ้นต่างประเทศ</span>
              <p>Nvidia earnings preview: High stakes for the AI trade บัน</p>
              <div className='tail'>
                <span className='date'><span className='ico'><CiClock2 /></span>25/09/24</span>
                <span className='clock'>12:05:54</span>
              </div>
            </a>
          </li>
        </ul>
       )}

      {selectedTab === 1 && (
        <ul className='news-list'>
          <li>
            <a href='#' className='news-box'>
              <span className='label brown'>หุ้นต่างประเทศ</span>
              <p>Nvidia earnings preview: High stakes for the AI trade บัน</p>
              <div className='tail'>
                <span className='date'><span className='ico'><CiClock2 /></span>25/09/24</span>
                <span className='clock'>12:05:54</span>
              </div>
            </a>
          </li>
          <li>
            <a href='#' className='news-box'>
              <span className='label brown'>หุ้นต่างประเทศ</span>
              <p>Nvidia earnings preview: High stakes for the AI trade บัน</p>
              <div className='tail'>
                <span className='date'><span className='ico'><CiClock2 /></span>25/09/24</span>
                <span className='clock'>12:05:54</span>
              </div>
            </a>
          </li>
          <li>
            <a href='#' className='news-box'>
              <span className='label brown'>หุ้นต่างประเทศ</span>
              <p>Nvidia earnings preview: High stakes for the AI trade บัน</p>
              <div className='tail'>
                <span className='date'><span className='ico'><CiClock2 /></span>25/09/24</span>
                <span className='clock'>12:05:54</span>
              </div>
            </a>
          </li>
        </ul>
       )}
       {selectedTab === 2 && (
        <ul className='news-list'>
          <li>
            <a href='#' className='news-box'>
              <span className='label'>หุ้นไทย</span>
              <p>หุ้นกลุ่มธนาคารพาณิชย์ส่วนใหญ่ปรับตัว ขึ้น จากเมื่อวาน นำโดย KTB บวก 3.49% มาอยู่ท หุ้นกลุ่มธนาคารพาณิชย์ส่วนใหญ่ปรับตัว</p>
              <div className='tail'>
                <span className='date'><span className='ico'><CiClock2 /></span>25/09/24</span>
                <span className='clock'>12:05:54</span>
              </div>
            </a>
          </li>
          <li>
            <a href='#' className='news-box'>
              <span className='label brown'>หุ้นต่างประเทศ</span>
              <p>Nvidia earnings preview: High stakes for the AI trade บัน</p>
              <div className='tail'>
                <span className='date'><span className='ico'><CiClock2 /></span>25/09/24</span>
                <span className='clock'>12:05:54</span>
              </div>
            </a>
          </li>
          <li>
            <a href='#' className='news-box'>
              <span className='label'>หุ้นไทย</span>
              <p>หุ้นกลุ่มธนาคารพาณิชย์ส่วนใหญ่ปรับตัว ขึ้น จากเมื่อวาน นำโดย KTB บวก 3.49% มาอยู่ท หุ้นกลุ่มธนาคารพาณิชย์ส่วนใหญ่ปรับตัว</p>
              <div className='tail'>
                <span className='date'><span className='ico'><CiClock2 /></span>25/09/24</span>
                <span className='clock'>12:05:54</span>
              </div>
            </a>
          </li>
        </ul>
       )}
    </section>
  )
}

export default News