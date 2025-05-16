import './common.scss'

interface Props {
  num: string;
  className?: string;
}

const IndexVal = ({ num, className }: Props) => {
  return (
     <span className={`index-val ${className || ''}`}>{num}</span>
  )
}

export default IndexVal