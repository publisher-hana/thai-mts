import { SlArrowDown } from 'react-icons/sl'
import DataPicker from '../DataPicker'

  
const OvernightStat = () => {
 
  return (
    <section className='overnight-stat'>
      <div className='tit-area'>
        <h2 className='sec-tit'>Overnight Status</h2>
        <p className='sub-tit'>ตรวจสอบสถานะของคำสั่ง</p>
      </div>
      <div className="btns-fileds">
        <button className="filed-item w120">
          Active Order
          <span className='ico-arr'><SlArrowDown /></span>
        </button>
         <DataPicker />
      </div>
    </section>
  )
}

export default OvernightStat