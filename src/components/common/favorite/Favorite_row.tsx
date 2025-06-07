import { MdOutlineStar } from "react-icons/md";
import { LineChart } from "../../chart/LineChart";

type LineChartProps = {
  title : string;
  type ?: 'up' | 'down';
  data?: number[];
  labels?: string[];
  borderWidth?: number;
  w?: number;
  h?: number;
  res? : boolean;
  className? : string;
  currentVal : string;
  currentRate1 : string;
  currentRate2 : string;
};

const Favorite_row = ({ title, type, data, labels, borderWidth, w, h, res, className, currentVal, currentRate1, currentRate2}: LineChartProps) => {
  return (
    <div className='row'>
      <div>
        <span className="star"><MdOutlineStar /></span>
        <strong>{title}</strong>  
        <span className="block vol">Vol. 158,302,910</span>
      </div>
      <div className="chart">
        <LineChart
          type={type}
          data={data}
          labels={labels}
          borderWidth={borderWidth}
          w={w}
          h={h}
          res={res}
        />
      </div>
      <div className="rate-area">
        <span className="current-price">{currentVal}</span>
        <span className={`block rate ${className}`}>{currentRate1}({currentRate2}%)</span>
      </div>
    </div>
  )
}

export default Favorite_row