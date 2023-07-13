import Head from "next/head";


const Contatos = () =>{
    return(

        <>
        <Head>
            <title>Contatos</title>
        </Head>
        
        <div>
            <h1>Contatos</h1>
           <ul>
            <li>
                <span>E-mail</span>
                <div>
                    <a href="mailto:guilherme.gomes.ti1@gmail.com">guilherme.gomes.ti1@gmail.com</a>
                </div>
            </li>

            <li>
                <span>E-mail</span>
                <div>
                    <a href="mailto:guilherme.gomes.ti1@gmail.com">guilherme.gomes.ti1@gmail.com</a>
                </div>
            </li>

            <li>
                <span>LInkedin</span>
                <div>
                    <a href="http://Linkedim">guilherme.gomes.ti1@gmail.com</a>
                </div>
            </li>

            <li>
                <span>github</span>
                <div>
                    <a href="github">guilherme.gomes.ti1@gmail.com</a>
                </div>
            </li>

            <li>
                <span>E-mail</span>
                <div>
                    <a href="mailto:guilherme.gomes.ti1@gmail.com">guilherme.gomes.ti1@gmail.com</a>
                </div>
            </li>
           </ul>
        </div>
        </>
        
    )
}

export default Contatos;