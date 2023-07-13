import { Title } from "@material-ui/icons";
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
        <Head><title> 404 </title></Head>
        <div>
           <div>
            <h1>404</h1>
  
        <p>Ops, não conseguimos encontrar essa página!</p>
        <span>Clique no botão abaixo para ser redirecionado à Página Inicial</span>

            </div>
            <Link href="/">Ir para página inicial</Link>
        </div>
        </>
        
    )
}

export default NotFound;