import Image from 'next/image';
// import styles from '@/styles/login.module.css';

const Login = () => {

  return (
    <div className={`w-screen h-screen flex justify-center items-center`}>
      <div className={`w-[50vw] h-full overflow-hidden flex items-center justify-center`}>
        <Image 
          className='h-auto object-contain'
          src="/login/bg-login.jpg"
          alt="Imagem de fundo"
          width={4000}
          height={6000}
          priority 
        />
      </div>
      <div className={`w-[50vw] h-full flex items-center justify-center`}>
        <div className="text-center w-full max-w-[382px]">
          <h2 className="text-3xl font-bold mb-4 text-left">Acesse sua conta</h2>
          <div className="mb-4 w-full text-left">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-[#000000]" />
          </div>
          <div className="mb-4 w-full text-left">
            <label htmlFor="password" className="block mb-1">Senha</label>
            <input type="password" id="password" className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 text-[#000000]" />
            <p className="text-xs text-gray-500 mt-1">Possui 8 caracteres ou mais</p>
          </div>
          <button className="bg-customGreen w-full text-white px-4 py-2 hover:bg-blue-600 transition duration-300 h-[56px] rounded-[64px]">Continuar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
