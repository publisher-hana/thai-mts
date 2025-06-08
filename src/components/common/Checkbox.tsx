interface Props {
  chkId: string;
  title: string;
}

const Checkbox = ({ chkId, title, }: Props) => {
  return (
    <>
       <label className="checkbox-label">
        <input type="checkbox" id={chkId}/>
        <span className="custom-checkbox">
          <svg viewBox="0 0 24 24">
            <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.4-1.4z"/>
          </svg>
        </span>
        <span className="title">{title}</span>
      </label>
    </>
  )
}

export default Checkbox