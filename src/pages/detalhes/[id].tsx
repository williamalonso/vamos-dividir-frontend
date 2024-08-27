import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";
import axios from "axios";

const Detail = () => {

  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
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
        console.log('Dados da demanda:', response.data);
      } catch(e) {
        console.error('Erro ao buscar demanda por id: ', e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [router.query.id]);
  
  return(
    <div className="container mx-auto">
      <Link href="/home">
        <ArrowBackIcon />
      </Link>
      <br></br>
      Pagina de detalhe
    </div>
  );
}

export default Detail;