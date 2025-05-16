import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./StickyTable.css";


const columns = ["등락", "대비", "기준가", "거래량", "전일대비"];
const data = [
  { name: "570", values: ["+30.00%", "▲2670", "8,xxx", "9,xxx", "+30%"] },
  { name: "085", values: ["+29.99%", "▲481", "1,xxx", "8,xxx", "+29%"] }
];


export default function StickyTable() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="table-wrapper">
      {/* 고정된 종목명 열 */}
      <div className="fixed-column">
        <div className="cell header">종목</div>
        {data.map((row, i) => (
          <div className="cell" key={i}>{row.name}</div>
        ))}
      </div>

      {/* 슬라이드 컬럼 */}
      <div className="sliding-columns">
        <Slider {...settings}>
          {columns.map((col, colIdx) => (
            <div key={colIdx}>
              <div className="cell header">{col}</div>
              {data.map((row, i) => (
                <div className="cell" key={i}>{row.values[colIdx]}</div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}