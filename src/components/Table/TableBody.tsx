import Link from "next/link";
import Skeleton from '@mui/material/Skeleton';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { TableProps } from "@/interfaces/TableData";

const TableBody: React.FC<TableProps> = ({ columns, data, sortDirection, sortColumn, onSort, loading }) => {
  return (
    <div className="overflow-x-auto shadow-lg shadow-black-500/50 bg-white dark:bg-[#3c3c3c]">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            { columns.map( (column, index) => (
              <th 
                key={index}
                className={`
                  border 
                  border-gray-300
                  px-4
                  py-2
                  ${ column === 'Nome' ? 'w-1/2': 'w-1/4 hidden md:table-cell'}
                `}
              >
                <span className="cursor-pointer" onClick={ () => onSort(column) }>
                  { column }
                  { sortColumn === column && (
                    <span className="ml-2">
                      { sortDirection === 'asc' ? <NorthIcon /> : <SouthIcon /> }
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          { loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                {columns.map((_, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 px-4 py-2 hidden md:table-cell">
                    <Skeleton variant="text" width="100%" height={40} />
                  </td>
                ))}
              </tr>
            ))
          ) : (
            data.map( (item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 cursor-pointer">
                  <Link href={`/detalhes/${item.id}`}>
                    { item.name }
                  </Link>
                </td>
                <td className="border border-gray-300 px-4 py-2 hidden md:table-cell">
                  { item.valorTotal }
                </td>
                <td className="border border-gray-300 px-4 py-2 hidden md:table-cell">
                  { item.date }
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableBody;