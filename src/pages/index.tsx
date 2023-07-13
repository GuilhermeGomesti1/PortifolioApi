import { AboutMe } from '@/components/Home/AboutMe'
import Head from "next/head";





const Home = () =>  {
  return (
    <>
     <Head>
     <title>Sobre mim</title>
     <meta name="description" content="Sou um desenvolvedor Front-end"/>
     </Head>
    <div>
      <AboutMe/>
    </div>
    </>
    
  );
};

export default Home;