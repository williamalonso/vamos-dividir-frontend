import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";
import axios from "axios";
import BackButtonComponent from "@/components/backBtn/BackButtonComponent";
import { TableData } from "@/interfaces/TableData";

const Detail: React.FC<TableData> = () => {

  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<TableData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchData = async() => {
      try {
        setLoading(true);
        // Buscando o token do localStorage
        const authToken = localStorage.getItem('token');
        if (!authToken) {
          throw new Error('Token de autenticação não encontrado no localStorage');
        }
        const response = await axios.post('/api/detailDemand/detailService', {
          token: authToken,
          demandId: id
        });
        setItem(response.data);
      } catch(e) {
        console.error('Erro ao buscar demanda por id: ', e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [router.query.id]);
  
  console.log(item);

  return(
    <div className="container mx-auto">
      <BackButtonComponent />
      {item?.name}
      <div className="mx-auto bg-red-300 w-full max-w-[1200px]">
        <div className="row flex w-full justify-between">
          <div className="leftContent flex flex-col">
            <div>Gin</div>
            <div>pago por <b>mim</b></div>
          </div>
          <div className="rightContent text-right">
            <div>R$ 27,90</div>
            <div>11/05/2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;