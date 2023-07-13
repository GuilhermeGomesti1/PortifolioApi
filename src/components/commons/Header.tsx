import Link from "next/link"

export const Header = () =>
 {
    return(
        <header>
            <Link href="/">
            <img src="/favicon.ico" alt="icone da pagina"/>
            </Link>
            <nav>
                <Link href="/"> Sobre mim </Link>
                <Link href="/portifolio"> Portifolio </Link>
                <Link href="/contato"> COntato </Link>
            </nav>
        </header>
    )
 }