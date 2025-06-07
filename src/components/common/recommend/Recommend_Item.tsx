interface Props {
  label: string;
  title: string;
  text: string;
  rate: string;
  btTitle: string;
  btText: string;
  className?: string;
}

const Recommend_Item = ({ label, title,text, className,rate, btTitle, btText }: Props) => {
  return (
    <div className="slide-item">
        <div className='slide-in'>
            <div className="label">{label}</div>
          <strong>{title}</strong>
          <span>{text}</span>
          <span className={`rate ${className}`}>{rate}</span>
        </div>
        <div className='bottom'>
          <strong className={`rate ${className}`}>{btTitle}</strong>
          <p>{btText}</p>
        </div>
      </div>
  )
}

export default Recommend_Item