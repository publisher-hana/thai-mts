import { useRef, useEffect, useState } from "react";

.table-wrapper {
  overflow-x: auto;
  position: relative;
  //  width: calc(100% + 2rem); 
  margin-left: -1rem;
  margin-right: -1rem;
  .scroll-indicator {
    position: absolute;
    top: -10%;
    z-index: 10;
    font-size: 18px;
    font-size: 3rem;
    color: var(--color-orange);
    cursor: pointer;
    &.left {
      left: 20%;
    }
    &.right {
      right: 0;
    }
  }

  .scroll-container {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
  }

  .scroll-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
}


.table-style{
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
  th,td{
    background-color: #fff; 
    border: 1px solid #ccc;
    white-space: nowrap;
  }
  .sticky-col {
    position: sticky;
    left: 0;
    z-index: 1;
    background-color: #f9f9f9;
  }
  .sticky-col:nth-child(1) { left: 0; }
  .sticky-col:nth-child(2) { left: 20%; }   
  thead{
    th{
      font-size: var(--fz14);
      padding: .8rem;
      background-color: var(--bg-secondary2);
      border-left: 1px solid var(--border);
      color: var(--primary);
    }
  }
  tbody{
    td{
      padding:.8rem;
      font-size: var(--fz16);
      border-bottom: 1px solid var(--border);
    }
  }
const Realtime = () => {
   const scrollRef = useRef<HTMLDivElement | null>(null); // ✅ 타입 명시
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const  stickyOffset="20%" ;
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft < maxScrollLeft);
  };

  const scrollByAmount = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };
   useEffect(() => {
    handleScroll(); // 초기 상태
  }, []);

  return (
    <section className="realtime-pick">
      <h2 className="sec-tit">HERO Real-time Picks</h2>
      <div className="table-wrapper">
       {/* {showLeft && ( */}
        <div className="scroll-indicator left"  style={{ left: stickyOffset }} onClick={() => scrollByAmount(-100)}>
          &#8249;
        </div>
      {/* )} */}
      {/* {showRight && ( */}
        <div className="scroll-indicator right" onClick={() => scrollByAmount(100)}>
          &#8250;
        </div>
      {/* )} */}
         <div className="scroll-container" ref={scrollRef} onScroll={handleScroll}>
          <table className="table-style">
            <colgroup>
              <col style={{ width: "20%" }}  />
              <col />
               <col style={{ width: "20%" }}  />
               <col style={{ width: "20%" }}  />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="sticky-col" style={{ width: stickyOffset }}>Time</th>
                <th scope="col">Last</th>
                <th scope="col">Last</th>
                <th scope="col">Last</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sticky-col" style={{ width: stickyOffset }}>16:07:00</td>
                <td>218.00</td>
                <td>218.00</td>
                <td>218.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Realtime