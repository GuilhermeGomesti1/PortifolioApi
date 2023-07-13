import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

export const Header = () => {
  return (
    <header className={`${roboto.className} bg-h-blue-900 text-sm flex py-3 px-5 justify-between items-center stick top-0 z-20` }>
      <Link href="/">
        <Image
          src="/favicon.ico"
          width={55}
          height={55}
          alt="icone da pagina"
        />
      </Link>
      <nav className="hidden md:flex items-center gap-10 text-md">
        <Link href="/"> Sobre mim </Link>
        <Link href="/portifolio"> Portifolio </Link>
        <Link href="/contato"> COntato </Link>
      </nav>
    </header>
  );
};
