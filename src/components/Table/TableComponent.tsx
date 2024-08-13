import TableBody from "@/components/Table/TableBody";
import { useState } from "react";

const TableComponent = () => {

  const columns = ['Nome', 'Valor total', 'Criado em'];

  const [data, setData] = useState([
    { name: 'Aniversário Manu', valorTotal: 'R$152,45', data: '12/08/2024' },
    { name: 'Confraternização Empresa', valorTotal: 'R$750,00', data: '25/12/2024' },
    { name: 'Churrasco Amigos', valorTotal: 'R$350,90', data: '15/09/2024' },
  ]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Minha Tabela</h1>
      <TableBody columns={columns} data={data} />
    </div>
  );
}

export default TableComponent;