import type { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}
const Table = ({ children }: TableProps) => {
  return (
    <div className="table-wrapper">
      <table className="table-style">
        {children}
      </table>
    </div>
  )
}

export default Table