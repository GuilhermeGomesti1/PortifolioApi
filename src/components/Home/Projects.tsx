import { Project } from "@/types/Home";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectsProps {
  projects: Project[];
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [totalRepositories, setTotalRepositories] = useState<number>(0);

  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchImageUrl = async (repoName: string) => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/GuilhermeGomesti1/${repoName}/main/public/images/image_url`
      );
      if (response.status === 404) {
        const masterResponse = await fetch(
          `https://raw.githubusercontent.com/GuilhermeGomesti1/${repoName}/master/public/images/image_url`
        );
        if (masterResponse.status === 404) {
          return "";
        } else {
          const masterData = await masterResponse.text();
          const masterImageUrl = masterData.trim();
          return masterImageUrl;
        }
      } else {
        const data = await response.text();
        const imageUrl = data.trim();
        return imageUrl;
      }
    } catch (error) {
      console.error("Erro ao buscar a URL da imagem:", error);
      return "";
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/GuilhermeGomesti1/repos"
      );
      const data = await response.json();
      const ignoredRepos = [
        "GuilhermeGomesti1",
        "hortifruti",
        "cronometro",
        "biscoitodasorte",
        "ant-design",
        "java-script-alura",
        "projeto-social",
        "HTML-CSS",
        "projeto-android",
        "projeto-cordel",
        "javascript",
        "Projeto-musicforall",
        "Musicforall",
        "node",
        "Organo",
        "testes-e2e-com-cypress",
      ];
      const mappedProjects = await Promise.all(
        data.map(async (repo: any, index: number) => {
          if (ignoredRepos.includes(repo.name)) {
            return null;
          }
          await new Promise((resolve) => setTimeout(resolve, 0.1 * index));
          const imageUrl = await fetchImageUrl(repo.name);
          return {
            slug: repo.name,
            name: repo.name,
            image: {
              url: imageUrl,
              alt: "Project Image",
            },
            html_url: repo.html_url,
            description: repo.description,
          };
        })
      );
      const filteredProjects = mappedProjects.filter(
        (project) => project !== null
      ); // Remove os projetos nulos (repositórios ignorados)
      setProjects(filteredProjects);
      setTotalRepositories(data.length);
    } catch (error) {
      console.error("Erro ao buscar projetos", error);
    }
  };

  return (
    <article className="space-y-1 flex flex-col items-center xl:items-start text-center xl:text-left">
      <div className="mb-8 max-w-[1440px] mx-auto">
        {" "}
        <h2 className="text-2xl md:text-4xl text-blue-500 text-center mx-auto mb-12">
          Experiência
        </h2>
        <div className="mb-4 text-left">
          {" "}
          {/* Justifica o texto */}
          <h3 className="text-1xl md:text-1xl font-semibold">
            DESENVOLVEDOR WEB- FULL STACK
          </h3>
          <p className="text-xs mb-2 sm:text-base sm:mb-2">
            Music For All- Escola de Música | Agosto/2023 - Março/2024
          </p>
          <p className="text-xs   mb-2 sm:text-sm sm:mb-2">
            . Implementação e manutenção de uma plataforma educacional
            interativa que permite aos visitantes explorar cursos, agendar aulas
            e conhecer virtualmente a escola.
          </p>
          <p className="text-xs   mb-2 sm:text-sm sm:mb-2">
            . Sistema de interação social, metrônomo digital, vídeo aulas e
            download de materiais para alunos autenticados.
          </p>
          <p className="text-xs  mb-2 sm:text-sm sm:mb-2">
            . Loja online, com uma API própria alcançando 100% de eficácia na
            gestão e vendas.
          </p>
          <p className="text-xs  sm:text-sm sm:mb-2">
            . Implementação de testes automatizados garantindo a qualidade do
            software e redução de erros.
          </p>
          <a
            href="https://escolamusicforall.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline text-xs"
          >
            Link para o site
          </a>
        </div>
        <div className="mb-4 text-left">
          {" "}
          <h3 className="text-1xl  md:text-1xl font-semibold">
            DESENVOLVEDOR WEB- FULL STACK
          </h3>
          <p className="text-xs mb-2 sm:text-base sm:mb-2">
            Vida Saudável- Nutrição | Janeiro 2023 - Junho/2023
          </p>
          <p className="text-xs mb-2 sm:text-sm sm:mb-2">
            . Criação de uma infraestrutura de e-commerce, habilitando a venda
            de e-books e outras publicações digitais.
          </p>
          <p className="text-xs mb-2 sm:text-sm sm:mb-2">
            . Integração com sistemas de gerenciamento de conteúdo (CMS),
            permitindo ao cliente a autogestão eficiente do conteúdo, reduzindo
            significativamente a necessidade de manutenção, garantindo autonomia
            total e economia de tempo para o cliente.
          </p>
          <p className="text-xs mb-2 sm:text-sm sm:mb-2">
            . Loja online, com uma API própria alcançando 100% de eficácia na
            gestão e vendas.
          </p>
          <p className="text-xs  sm:text-sm sm:mb-2">
            . Implementação de testes automatizados garantindo a qualidade do
            software e redução de erros.
          </p>
          <a
            href="https://gisleneoliveira.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline underline text-xs"
          >
            Link para o site
          </a>
        </div>{" "}
      </div>
      <div className="mt-4 mb-4 text-center mx-auto">
        <a
          href="https://github.com/GuilhermeGomesti1"
          target="_blanck"
          rel="noopener noreferrer"
          title="Conferir no GitHub"
          className="text-center mx-auto"
        >
          {" "}
          <p className="text-center mx-auto underline text-xs">
            Total de Projetos no GitHub: {""}
            {totalRepositories}
          </p>{" "}
        </a>
        <h2 className="text-2xl md:text-4xl text-blue-500 text-center mx-auto mb-8">
          Projetos Recentes
        </h2>
        <p className="text-center text-xs sm:text-sm mx-auto mb-8">
          &quot; Os projetos abaixo são exibidos utilizando integração direta
          com a API do GitHub para recuperação e exibição de informações e
          imagens dos projetos desenvolvidos. &quot;
        </p>
      </div>

      <ul className="flex flex-wrap gap-16 justify-center ">
        {projects.map(({ slug, name, image, description }, index) => (
          <Link href={`/projects/${slug}`} key={name + index}>
            <div
              className=" shadow-md overflow-visible w-[300px] h-[400px] sm:w-[20rem] rounded-xl "
              style={{ backgroundColor: "#223050" }}
            >
              <li className="text-md relative flex flex-col justify-between">
                <div className="bg-h-blue-500 rounded-xl w-10 h-10 text-center flex justify-center items-center text-2xl relative z-1 top-[23.2rem] left-[18rem] mb-[-2rem]">
                  <span>{index + 1}</span>
                </div>
                <div className="flex items-center justify-center h-[200px] bg-white mt-[-1.3rem] rounded-t-xl ">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="object-contain max-h-[200px]  mt-[0rem] rounded-t-xl"
                    priority={true}
                  />
                </div>
                <div className="p-4">
                  <span className="block font-medium text-xl text-center  text-white">
                    {name}
                  </span>

                  <p
                    className="text-sm text-gray-400 max-w-[20rem] justify-center mt-2 "
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 3,
                    }}
                  >
                    {description}
                  </p>
                </div>
              </li>
            </div>
          </Link>
        ))}
      </ul>
    </article>
  );
};
