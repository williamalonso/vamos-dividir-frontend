import TableBody from "@/components/Table/TableBody";
import { useState } from "react";

const TableComponent = () => {

  const [sortDirection, setSortDirection] = useState('asc');
  const [sortColumn, setSortColumn] = useState('Nome');

  const columns = ['Nome', 'Valor total', 'Criado em'];
  const data = [
    { id: 1, name: 'Aniversário Manu', valorTotal: 'R$152,45', data: '12/08/2024' },
    { id: 2, name: 'Confraternização Empresa', valorTotal: 'R$750,00', data: '25/12/2024' },
    { id: 3, name: 'Churrasco Amigos', valorTotal: 'R$350,90', data: '15/09/2024' },
  ];

  const onSort = (column: string) => {
    const newDirection = (sortColumn === column && sortDirection === 'asc') ? 'desc' : 'asc';
    setSortDirection(newDirection);
    setSortColumn(column);
    // console.log(`clicou em ${column}`);
  }

  const sortedData = [...data].sort((a, b) => {
    
    let columnA, columnB;
  
    switch (sortColumn) {
      case 'Nome':
        columnA = a.name.toLowerCase();
        columnB = b.name.toLowerCase();
        break;
      case 'Valor total':
        columnA = parseFloat(a.valorTotal.replace('R$', '').replace(',', '.'));
        columnB = parseFloat(b.valorTotal.replace('R$', '').replace(',', '.'));
        break;
      case 'Criado em':
        const [dayA, monthA, yearA] = a.data.split('/').map(Number);
        const [dayB, monthB, yearB] = b.data.split('/').map(Number);
        columnA = new Date(yearA, monthA - 1, dayA);
        columnB = new Date(yearB, monthB - 1, dayB);
        break;
      default:
        return 0;
    }
  
    if (columnA < columnB) return sortDirection === 'asc' ? -1 : 1;
    if (columnA > columnB) return sortDirection === 'asc' ? 1 : -1;

    return 0;

  });
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Minha Tabela</h1>
      <TableBody 
        columns={columns}
        data={sortedData}
        onSort={onSort}
        sortDirection={sortDirection}
        sortColumn={sortColumn}
      />
    </div>
  );
}

export default TableComponent;