import Head from "next/head";
import Link from "next/link";

const Contatos = () =>{
    return(

        <>
        <Head>
            <title>Contatos</title>
        </Head>
        
        <div>
            <h1>Contatos</h1>
            <Link href="/"> Ir para página inicial</Link>
        </div>
        </>
        
    )
}

export default Contatos;