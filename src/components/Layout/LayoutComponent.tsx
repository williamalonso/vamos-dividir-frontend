import { ReactNode } from "react";
import MenuComponent from "../Menu/MenuComponent";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

const LayoutComponent = ( {children}: LayoutProps) => {

  const router = useRouter();

  return(
    <div>
      {/* Renderiza o Menu somente se não estiver na rota raiz ("/") ou na rota "/login" */}
      {router.pathname !== '/' && router.pathname !== '/login' && <MenuComponent />}
      <main>{children}</main>
    </div>
  );
}

export default LayoutComponent;