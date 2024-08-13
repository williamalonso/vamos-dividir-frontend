import { TableProps } from "@/interfaces/TableData";

const TableBody: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            { columns.map( (column, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">
                { column }
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