import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import TableBody from "@/components/Table/TableBody";
import { TableData } from "@/interfaces/TableData";

const TableComponent = () => {

  const [sortDirection, setSortDirection] = useState('asc');
  const [sortColumn, setSortColumn] = useState('Nome');
  const [data, setData] = useState<TableData[]>([]);
  const [loading, setLoading] = useState(true);

  const columns = ['Nome', 'Valor total', 'Criado em'];

  const fetchData = async() => {
    try {
      setLoading(true);
      // Buscando o token do localStorage
      const authToken = localStorage.getItem('token');
      if (!authToken) {
        throw new Error('Token de autenticação não encontrado no localStorage');
      }
      const response = await axios.post('/api/tableDemand/tableService', {
        token: authToken
      });
      setData(response.data);
    } catch(e) {
      console.error('Erro ao buscar dados no componente de tabela: ', e);
    } finally {
      setLoading(false);
    }
  }

  useEffect( () => {
    fetchData();
  }, []); // O array vazio indica que o efeito é executado apenas uma vez após a montagem do componente

  const onSort = (column: string) => {
    const newDirection = (sortColumn === column && sortDirection === 'asc') ? 'desc' : 'asc';
    setSortDirection(newDirection);
    setSortColumn(column);
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
        const [dayA, monthA, yearA] = a.date.split('/').map(Number);
        const [dayB, monthB, yearB] = b.date.split('/').map(Number);
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
      <h1 className="text-2xl font-bold mb-4">Minhas Demandas</h1>
      <TableBody 
        columns={columns}
        data={sortedData}
        onSort={onSort}
        sortDirection={sortDirection}
        sortColumn={sortColumn}
        loading={loading}
      />
      <div className="mt-4 bg-[#24A78A] text-white px-4 py-2 rounded hover:bg-[#1E8A74] w-[200px] flex justify-center items-center cursor-pointer">
        <Link href="/criar-demanda">
          Criar Nova Demanda
        </Link>
      </div>
    </div>
  );
}

export default TableComponent;