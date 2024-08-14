import { TableProps } from "@/interfaces/TableData";
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

const TableBody: React.FC<TableProps> = ({ columns, data, sortDirection, sortColumn, onSort }) => {
  return (
    <div className="overflow-x-auto shadow-lg shadow-black-500/50 bg-white dark:bg-[#3c3c3c]">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            { columns.map( (column, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">
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
          { data.map( (item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                { item.name }
              </td>
              <td className="border border-gray-300 px-4 py-2">
                { item.valorTotal }
              </td>
              <td className="border border-gray-300 px-4 py-2">
                { item.data }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableBody;