import Image from 'next/image';
import styles from '@/styles/login.module.css';

const Login = () => {

  return (
    <div className={`w-screen h-screen bg-red-600 flex justify-center items-center`}>
      <div className={`w-[50vw] h-full overflow-hidden ${styles.imgContainer}`}>
        <Image 
          src="/login/bg-login.jpg"
          alt="Imagem de fundo"
          width={4000}
          height={6000}
          priority 
        />
      </div>
      <div className={`w-[50vw] h-full bg-blue-500`}>
        meu formmeu formmeu formmeu formmeu form
      </div>
    </div>
  );
};

export default Login;
