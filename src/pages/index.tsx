import Link from 'next/link';

const Page = () => {
  return (
    <div>
      Hello World!
      <Link href="/login">
        Ir para Login
      </Link>
    </div>
  );
}
 
export default Page;