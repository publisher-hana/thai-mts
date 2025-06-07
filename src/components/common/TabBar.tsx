import { useState } from "react";

type tabProps = {
  items: string[];
  onTabChange?: (index: number) => void;
  className ?: string
};
const TabBar = ({ items, onTabChange, className }: tabProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index: number) => {
    setActiveIndex(index);
    onTabChange?.(index);
  };
  return (
    <div className={`tab-bar ${className}`}> 
      <ul className='tab-list'>
       {items.map((item, index) => (
          <li key={index}>
            <button
              className={activeIndex === index ? 'on' : ''}
              onClick={() => handleClick(index)}
            >{item}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TabBar