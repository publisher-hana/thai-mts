import { useState } from 'react';
import TabBar from '../TabBar'
import Table from '../Table';
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

const TopMovers = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };
  const stockData1 = [
    {
      star: true,
      stock: "BEM",
      last: 218.0,
      chg: 218.0,
      chgper: 218.0,
      change: "rise", // 또는 "fall", "flat"
    },
    {
      star: false,
      stock: "STAR5001",
      last: 116.26,
      chg: 226.47,
      chgper: 226.47,
      change: "rise",
    },
    {
      star: false,
      stock: "EA",
      last: 0.75,
      chg: 0.75,
      chgper: 0.75,
      change: "rise",
    },
    {
      star: false,
      stock: "SCB",
      last: 0.75,
      chg: 0.75,
      chgper: 0.75,
      change: "rise",
    },
  ];
  const stockData2 = [
    {
      star: false,
      stock: "BEM",
      last: 218.0,
      chg: 218.0,
      chgper: -218.0,
      change: "fall",
    },
    {
      star: false,
      stock: "LH",
      last: 116.26,
      chg: 226.47,
      chgper: -226.47,
      change: "fall",
    },
    {
      star: false,
      stock: "CPALL",
      last: 0.75,
      chg: 0.75,
      chgper: -0.75,
      change: "fall",
    },
    {
      star: false,
      stock: "SCB",
      last: 0.75,
      chg: 0.75,
      chgper: -0.75,
      change: "fall",
    },
  ];
  return (
     <section className='top_movers'>
        <h2 className='sec-tit'>Top Gain/Lose</h2>
        <TabBar items={['Gainer', 'Loser']} 
          onTabChange={handleTabChange}
        />
        {selectedTab === 0 && (
          <Table>
            <colgroup>
              <col style={{ width: "10%" }}  />
              <col />
                <col style={{ width: "17%" }}  />
                <col style={{ width: "20%" }}  />
                <col style={{ width: "20%" }}  />
            </colgroup>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" className="left">Stock</th>
                <th scope="col" className="right">Last</th>
                <th scope="col" className="right">Chg.</th>
                <th scope="col" className="right">%Chg.</th>
              </tr>
            </thead>
            <tbody>
              {stockData1.map((item, idx) => (
                <tr key={idx}>
                  <td colSpan={2} className={`left ${item.change}`}>
                    <div className='flex'>
                      {item.star ? <MdOutlineStar /> : <MdOutlineStarBorder />}{item.stock}
                    </div>
                  </td>
                  <td className={`right ${item.change}`}>{item.last.toFixed(2)}</td>
                  <td className={`right ${item.change}`}>{item.chg.toFixed(2)}<span className={`price_arrow ${item.change}`}></span></td>
                  <td className={`right ${item.change}`}>{item.chgper.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {selectedTab === 1 && (
          <Table>
            <colgroup>
              <col style={{ width: "10%" }}  />
              <col />
              <col style={{ width: "17%" }}  />
              <col style={{ width: "20%" }}  />
              <col style={{ width: "20%" }}  />
            </colgroup>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col" className="left">Stock</th>
                <th scope="col" className="right">Last</th>
                <th scope="col" className="right">Chg.</th>
                <th scope="col" className="right">%Chg.</th>
              </tr>
            </thead>
            <tbody>
              {stockData2.map((item, idx) => (
                <tr key={idx}>
                   <td colSpan={2} className={`left ${item.change}`}>
                    <div className='flex'>
                      {item.star ? <MdOutlineStar /> : <MdOutlineStarBorder />}{item.stock}
                    </div>
                  </td>
                  <td className={`right ${item.change}`}>{item.last.toFixed(2)}</td>
                  <td className={`right ${item.change}`}>{item.chg.toFixed(2)}<span className={`price_arrow ${item.change}`}></span></td>
                  <td className={`right ${item.change}`}>{item.chgper.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>
  )
}

export default TopMovers