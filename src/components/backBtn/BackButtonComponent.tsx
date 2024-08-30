import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButtonComponent = () => {
  return (
    <div className="mb-4">
      <Link href="/home">
        <ArrowBackIcon />
        <span>Voltar</span>
      </Link>
    </div>
  );
}
 
export default BackButtonComponent;