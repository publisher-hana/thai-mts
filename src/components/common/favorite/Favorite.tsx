import { SlArrowDown } from "react-icons/sl";
import './favorite.scss'
import Favorite_row from "./Favorite_row";
const Favorite = () => {
  return (
    <section className='favorite'>
      <h2 className='sec-tit'>Favorite</h2>
      <div className='btns-fileds'>
        <button className='filed-item'>
          Favorite 1
          <span className='ico-arr'><SlArrowDown /></span>
        </button>
        <button className='filed-item'>
          TFEX
           <span className='ico-arr'><SlArrowDown /></span>
        </button>
      </div>
      <Favorite_row
        title = 'AOT'
        type="down"
        labels={['1','2','3','4','5','6','7','8','9','10','11','12']}
        data={[40, 40, 30, 30, 25, 10, 20, 15, 20, 20, 10, 10]}
        borderWidth={1}
        w={50}
        h={22}
        res={false}
        className="down"
        currentVal="495.00"
        currentRate1="-4.08"
        currentRate2="-1.50"
      />
       <Favorite_row
        title = 'S50Z24'
        type="up"
        labels={['1','2','3','4','5','6','7','8','9','10','11','12']}
        data={[10, 10, 20, 20, 15, 20, 20, 10 , 25, 30, 30, 40, 40]}
        borderWidth={1}
        w={50}
        h={22}
        res={false}
        currentVal="495.00"
        currentRate1="+0.50"
        currentRate2="+0.50"
      />
      <Favorite_row
        title = 'S50Z24'
        type="up"
        labels={['1','2','3','4','5','6','7','8','9','10','11','12']}
        data={[10, 10, 20, 20, 15, 20, 20, 10 , 25, 30, 30, 40, 40]}
        borderWidth={1}
        w={50}
        h={22}
        res={false}
        currentVal="495.00"
        currentRate1="+0.50"
        currentRate2="+0.50"
      />
       <Favorite_row
        title = 'S50Z24'
        type="up"
        labels={['1','2','3','4','5','6','7','8','9','10','11','12']}
        data={[10, 10, 20, 20, 15, 20, 20, 10 , 25, 30, 30, 40, 40]}
        borderWidth={1}
        w={50}
        h={22}
        res={false}
        currentVal="495.00"
        currentRate1="+0.50"
        currentRate2="+0.50"
      />
    </section>
  )
}

export default Favorite