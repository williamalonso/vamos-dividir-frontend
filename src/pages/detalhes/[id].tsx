import { useRouter } from "next/router";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";

const Detail = () => {

  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

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