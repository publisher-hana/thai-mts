import CandleChart from "../../components/chart/CandleChart"
import Favorite from "../../components/common/favorite/Favorite"
import IndexVal from "../../components/common/IndexVal"
import News from "../../components/common/news/News"
import Realtime from "../../components/common/realTimePicks/Realtime"
import Recommend from "../../components/common/recommend/Recommend"
import TopMovers from "../../components/common/topMovers/TopMovers"
import Currency from "../home/Currency"
import './domestic.scss'
const Domestic = () => {
  return (
    <>
      <section className="market-stock">
        <div className="top-sec">
          <div className="value">
            <IndexVal num="1,445.91" className1="fz16" className2="fz28" num2="+15.00 (+0.14%)"/>
          </div>
          <div className="val-box">
            <ul>
              <li><span className="text">High</span><span className="val">1,460.55</span></li>
              <li><span className="text">Low</span><span className="val">1,460.60</span></li>
              <li><span className="text">Value(M)</span><span className="val">1,460.50</span></li>
            </ul>
          </div>
        </div>
        <CandleChart />
      </section>
      <Realtime />
      <Favorite />
      <Recommend />
      <TopMovers />
      <Currency />
      <News />
    </>
  )
}

export default Domestic