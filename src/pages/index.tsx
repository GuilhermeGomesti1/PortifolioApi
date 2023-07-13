import Head from "next/head";

import Link from "next/link";



const Home = () =>  {
  return (
    <>
     <Head>
     <title>Página inicial</title>
     </Head>
    <main>
      <h1> Hello world</h1>
      <Link href='/contatos' > ir para contatos</Link>
     
    </main>
    </>
    
  );
};

export default Home;