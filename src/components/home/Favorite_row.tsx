import { MdOutlineStar } from "react-icons/md";
import { LineChart } from "../chart/LineChart";

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
};

const Favorite_row = ({ title, type, data, labels, borderWidth, w, h, res, className }: LineChartProps) => {
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
        <span className="current-price">495.00</span>
        <span className={`block rate ${className}`}>-20,000(-20.00%)</span>
      </div>
    </div>
  )
}

export default Favorite_row