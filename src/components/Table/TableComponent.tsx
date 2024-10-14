import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { RootState } from '@/redux/store';
import { useEffect, useState } from "react";
import { TableData } from "@/interfaces/TableData";
import { setData } from "@/redux/slices/tableSlice";
import TableBody from "@/components/Table/TableBody";
import { useDispatch, useSelector } from "react-redux";

const TableComponent = () => {

  const dispatch = useDispatch();
  const [sortDirection, setSortDirection] = useState('asc');
  const [sortColumn, setSortColumn] = useState('Nome');
  const data: TableData[] = useSelector((state: RootState) => state.table.data);
  const [loading, setLoading] = useState(true);
  
  const columns = ['Nome', 'Valor total', 'Criado em'];

  const fetchData = async () => {
    if (data.length === 0) {
      try {
        setLoading(true);
  
        // Buscando o token do localStorage
        let accessToken = localStorage.getItem('accessToken');
  
        // Se não encontrar o accessToken, tenta renová-lo usando o refreshToken
        if (!accessToken) {
          
          const refreshResponse = await axios.post('/api/auth/renewToken/renewtokenService', {}, {
            withCredentials: true, // Envia o cookie refreshToken automaticamente
          });
  
          // Verifica se a renovação foi bem-sucedida
          if (refreshResponse.status === 200) {
            accessToken = refreshResponse.data.accessToken;
  
            // Armazena o novo accessToken no localStorage apenas se não for null
            if (accessToken) {
              localStorage.setItem('accessToken', accessToken);
            } else {
              throw new Error('Não foi possível renovar o accessToken, pois ele é null.');
            }
          } else {
            throw new Error('Falha ao renovar o accessToken.');
          }
        }
  
        // Faz a requisição à serverless function com o accessToken atualizado
        const response = await axios.post('/api/tableDemand/tableService', {
          token: accessToken,
        });
  
        // Armazena os dados no estado global
        dispatch(setData(response.data));
  
      } catch (e) {
        console.error('Erro ao buscar dados no componente de tabela: ', e);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect( () => {
    fetchData();
  }, [dispatch]);

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
    <>
      <Head>
        <title>Início | Vamos Dividir</title>
        <meta name="description" content="Página de detalhes" />
      </Head>
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
    </>
  );
}

export default TableComponent;