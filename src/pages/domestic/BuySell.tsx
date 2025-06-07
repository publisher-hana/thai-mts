import { useState } from "react";
import TabBar from "../../components/common/TabBar"

const BuySell = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };
  const tabClass = selectedTab === 1 ? 'sell' : selectedTab === 2 ? 'change' : '';
  return (
    <section>
      <div className={`trading-box ${tabClass}`}>
         <TabBar items={['Buy', 'Sell', 'Change']} 
          onTabChange={handleTabChange}
          className="trading-type"
        />
      </div>
    </section>
  )
}

export default BuySell 