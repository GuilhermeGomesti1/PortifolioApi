import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const AboutMe = () => {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text=white flex flex-col items-center xl:items:start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[80px]">
          {" "}
          &nbsp;
          <strong>Guilherme Gomes</strong>
        </h1>{" "}
        <div className="mb-4">
          <div className="mb-2 max-w-4xl mx-auto">
            {" "}
            <h2 className="text-1xl md:text-1xl lg:text-base text-white text-justify mx-auto sm:text-lg ">
              Desenvolvedor full stack com três anos de experiência, focado em
              desenvolver sites responsivos usando Next.js e React.js,
              gerenciamento de banco de dados e APIs. No seu último trabalho,
              promoveu um aumento de mais de 60% na busca de produtos e serviços
              para uma empresa local.
            </h2>
          </div>
        </div>
        <Link
          href="/contatos"
          className="p-3  bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80 mb-8"
        >
          Converse comigo
        </Link>
        <ul className="flex flex-wrap justify-center  xl:grid-cols-8 xl:2-fit gap-2 text-xl ">
          <li
            style={{ backgroundColor: "#2f74c0", color: " #FFFFFF" }}
            className="w-fit p-2 rounded-md"
          >
            TypesSript
          </li>
          <li
            style={{ backgroundColor: "#68ddfa", color: " #000000" }}
            className="w-fit p-2 rounded-md"
          >
            React
          </li>
          <li
            style={{ backgroundColor: "#EFD81D", color: " #000000" }}
            className="w-fit p-2 rounded-md"
          >
            JavasSript
          </li>
          <li
            style={{ backgroundColor: "#000000", color: "  #FFFFFF" }}
            className="w-fit p-2 rounded-md"
          >
            Next-js
          </li>
          <li
            style={{ backgroundColor: "#FFFFFF", color: " #37474F" }}
            className="w-fit p-2 rounded-md"
          >
            Node.js
          </li>
          <li
            style={{ backgroundColor: "#FFFFFF", color: " #388E3C" }}
            className="w-fit p-2 rounded-md"
          >
            MongoDB
          </li>
          <li
            style={{ backgroundColor: "black", color: " #ffffff" }}
            className="w-fit p-2 rounded-md"
          >
            Cypress
          </li>
          <li
            style={{ backgroundColor: "#FB6BFF", color: " #FFFFFF" }}
            className="w-fit p-2 rounded-md"
          >
            APIs RESTful
          </li>
        </ul>
      </div>
      <div className="relative" style={{ zIndex: 1 }}>
        <div className="pr-3 sm:pr-20">
          <Image
            src="https://avatars.githubusercontent.com/u/106498363?u=69944eb7c6a61b6f01b54fa9d6d953c60725ecf6&v=4"
            unoptimized
            width={500}
            height={500}
            alt="imagem de perfil github encontrar ela"
            className="rounded-full"
          />
        </div>
        <p className="p-2 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm-bottom-3">
          <span className="text-3xl">3+</span>
          <br />
          anos de experiencia
        </p>
      </div>
    </main>
  );
};
