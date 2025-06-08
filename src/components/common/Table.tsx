import type { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className ?:string;
}
const Table = ({ children, className }: TableProps) => {
  return (
    <div className="table-wrapper">
      <table className={`table-style ${className}`}>
        {children}
      </table>
    </div>
  )
}

export default Table