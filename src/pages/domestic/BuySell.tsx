import { useState } from "react";
import TabBar from "../../components/common/TabBar"
import { SlArrowDown } from "react-icons/sl";
import Checkbox from "../../components/common/Checkbox";
import Table from "../../components/common/Table";
import OvernightStat from "../../components/common/overnightStat/OvernightStat";

const BuySell = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };
  const tabClass = selectedTab === 1 ? 'sell' : selectedTab === 2 ? 'change' : '';
  const stockData = [
    {
      vol1: 677100,
      bid: 73.50,
      offer: 73.75,
      vol2: 1212000,
      change: "rise", 
    },
    {
      vol1: 931400,
      bid: 73.25,
      offer: 74.00,
      vol2: 1905400,
      change: "rise", 
    },
    {
      vol1: 2820100,
      bid: 73.00,
      offer: 74.25,
      vol2: 1449300,
      change: "rise", 
    },
    {
      vol1: 1479700,
      bid: 72.50,
      offer: 74.75,
      vol2: 1107300,
      change: "rise", 
    },
  ];
  return (
    <>
      <section className="buysell">
        <TabBar items={['Buy', 'Sell', 'Change']} 
          onTabChange={handleTabChange}
          className="trading-type"
        />
        {selectedTab === 0 && (
          <>
            <ul className="header-stats">
              <li>
                <span className="tit">High</span>
                <span className="val txt-rise">73.50</span>
              </li>
              <li>
                <span className="tit">Low</span>
                <span className="val txt-fall">70.75</span>
              </li>
              <li>
                <span className="tit">Average</span>
                <span className="val">73.50</span>
              </li>
            </ul>
            <div className={`trading-box ${tabClass}`}>
              <div className="flex-space-bw trading-info">
                <div className="col"><span>หุ้นไทย</span><span>123456-7</span></div>
                <div className="col"><span>Credit Available</span><span>500,000.00</span></div>
              </div>
              <div className="btns-fileds">
                <button className="filed-item full">
                  Type 1 : Next Trading Day
                  <span className='ico-arr'><SlArrowDown /></span>
                </button>
              </div>
              <div className="trading-fileds">
                <div className="row flex-space-bw">
                  <div className="trading-input"><span>volume</span>
                    <div className="counter-wrapper">
                      <button className="counter-button">−</button>
                      <span className="counter-value"></span>
                      <button className="counter-button active">+</button>
                    </div>
                  </div>
                  <div className="unit-r">
                    In Port
                    <span>00,000,000</span>
                  </div>
                </div>
                <div className="row flex-space-bw">
                  <div className="trading-input"><span>Price</span>
                    <div className="counter-wrapper">
                      <button className="counter-button">−</button>
                      <span className="counter-value"></span>
                      <button className="counter-button active">+</button>
                    </div>
                    <span className="unit">
                      Limit
                    </span>
                  </div>
                  <Checkbox chkId='cond' title="Cond."/>
                </div>
              </div>
              <div className="flex-space-bw">
                <Checkbox chkId='nvdr' title="NVDR"/>
                <button className="btn-clear">clear</button>
              </div>
              <button className="btn-submit">ส่งคำสั่งซื้อ</button>
              <Table className="bd-none">
                  <colgroup>
                    <col />
                    <col style={{ width: "17%" }}  />
                    <col style={{ width: "17%" }}  />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" className="right">Vol.</th>
                      <th scope="col" className="right">Bid</th>
                      <th scope="col" className="left">Offer</th>
                      <th scope="col"  className="left">Vol.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockData.map((item, idx) => (
                      <tr key={idx}>
                        <td className="right">{item.vol1.toLocaleString()}</td>
                        <td className={`right ${item.change}`}>{item.bid.toFixed(2)}</td>
                        <td className={`left ${item.change}`}>{item.offer.toFixed(2)}</td>
                        <td className="left">{item.vol2.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
              </Table>
            </div>
          </>
        )}
        {selectedTab === 1 && (
          <>
            <ul className="header-stats">
                <li>
                  <span className="tit">High</span>
                  <span className="val txt-rise">73.50</span>
                </li>
                <li>
                  <span className="tit">Low</span>
                  <span className="val txt-fall">70.75</span>
                </li>
                <li>
                  <span className="tit">Average</span>
                  <span className="val">73.50</span>
                </li>
              </ul>
            <div className={`trading-box ${tabClass}`}>
              <div className="flex-space-bw trading-info">
                <div className="col"><span>หุ้นไทย</span><span>123456-7</span></div>
                <div className="col"><span>Credit Available</span><span>500,000.00</span></div>
              </div>
              <div className="btns-fileds">
                <button className="filed-item full">
                  Type 1 : Next Trading Day
                  <span className='ico-arr'><SlArrowDown /></span>
                </button>
              </div>
              <div className="trading-fileds">
                <div className="row flex-space-bw">
                  <div className="trading-input"><span>volume</span>
                    <div className="counter-wrapper">
                      <button className="counter-button">−</button>
                      <span className="counter-value"></span>
                      <button className="counter-button active">+</button>
                    </div>
                  </div>
                  <div className="unit-r">
                    In Port
                    <span>00,000,000</span>
                  </div>
                </div>
                <div className="row flex-space-bw">
                  <div className="trading-input"><span>Price</span>
                    <div className="counter-wrapper">
                      <button className="counter-button">−</button>
                      <span className="counter-value"></span>
                      <button className="counter-button active">+</button>
                    </div>
                    <span className="unit">
                      Limit
                    </span>
                  </div>
                  <Checkbox chkId='cond' title="Cond."/>
                </div>
              </div>
              <div className="flex-space-bw">
                <Checkbox chkId='nvdr' title="NVDR"/>
                <button className="btn-clear">clear</button>
              </div>
              <button className="btn-submit">ส่งคำสั่งขาย</button>
              <Table className="bd-none">
                  <colgroup>
                    <col />
                    <col style={{ width: "17%" }}  />
                    <col style={{ width: "17%" }}  />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" className="right">Vol.</th>
                      <th scope="col" className="right">Bid</th>
                      <th scope="col" className="left">Offer</th>
                      <th scope="col"  className="left">Vol.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockData.map((item, idx) => (
                      <tr key={idx}>
                        <td className="right">{item.vol1.toLocaleString()}</td>
                        <td className={`right ${item.change}`}>{item.bid.toFixed(2)}</td>
                        <td className={`left ${item.change}`}>{item.offer.toFixed(2)}</td>
                        <td className="left">{item.vol2.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
              </Table>
            </div>
          </>
        )}
        {selectedTab === 2 && (
          <>
            <ul className="header-stats">
              <li>
                <span className="tit">High</span>
                <span className="val txt-rise">73.50</span>
              </li>
              <li>
                <span className="tit">Low</span>
                <span className="val txt-fall">70.75</span>
              </li>
              <li>
                <span className="tit">Average</span>
                <span className="val">73.50</span>
              </li>
            </ul>
            <div className={`trading-box ${tabClass}`}>
              <Table className="bd-none">
                  <colgroup>
                    <col />
                    <col style={{ width: "17%" }}  />
                    <col style={{ width: "17%" }}  />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" className="right">Vol.</th>
                      <th scope="col" className="right">Bid</th>
                      <th scope="col" className="left">Offer</th>
                      <th scope="col"  className="left">Vol.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockData.map((item, idx) => (
                      <tr key={idx}>
                        <td className="right">{item.vol1.toLocaleString()}</td>
                        <td className={`right ${item.change}`}>{item.bid.toFixed(2)}</td>
                        <td className={`left ${item.change}`}>{item.offer.toFixed(2)}</td>
                        <td className="left">{item.vol2.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
              </Table>
            </div>
          </>
        )}
      </section>
      <OvernightStat />
    </>
  )
}

export default BuySell 