import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DataPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date("2024-08-30"));
  return (
    <>
     <div className='popup-container'>
        <div className="popup">
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </div>
      <div className="date-container">
        <DatePicker
            selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          dateFormat="dd/MM/yy"
          className="custom-date-input"
        />
        <span className="separator">-</span>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          dateFormat="dd/MM/yy"
          className="custom-date-input"
        />
      </div>
    </>
  )
}

export default DataPicker