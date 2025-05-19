import './common.scss'

interface Props {
  num: string;
  className1?: string;
  className2?: string;
  num2: string;
}

const IndexVal = ({ num, className1,className2, num2 }: Props) => {
  return (
    <div className={`index-vals ${className1 || ''}`}>
      <strong className={`index-main ${className2 || ''}`}>{num}</strong>
      <span>{num2}</span>
    </div>
  )
}

export default IndexVal