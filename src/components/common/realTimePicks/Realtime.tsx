import Table from "../Table";

const Realtime = () => {
  const stockData = [
    {
      time: "16:07:00",
      stock: "BEM",
      last: 218.0,
      singlePrice: 0.91,
      change: "rise", // 또는 "fall", "flat"
    },
    {
      time: "14:01:00",
      stock: "STAR5001",
      last: 116.26,
      singlePrice: 2.56,
      change: "fall",
    },
    {
      time: "14:02:00",
      stock: "HSI28C2411A",
      last: 226.47,
      singlePrice: 23.11,
      change: "flat",
    },
  ];
  return (
    <section className="realtime-pick">
      <h2 className="sec-tit">HERO Real-time Picks</h2>
      <Table>
          <colgroup>
            <col style={{ width: "20%" }}  />
            <col />
              <col style={{ width: "17%" }}  />
              <col style={{ width: "24%" }}  />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col" className="left">Stock</th>
              <th scope="col" className="right">Last</th>
              <th scope="col" className="right">Single Price</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.time}</td>
                <td className={`left ${item.change}`}>{item.stock}</td>
                <td className={`right ${item.change}`}>{item.last.toFixed(2)}</td>
                <td className="right">{item.singlePrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    </section>
  )
}

export default Realtime