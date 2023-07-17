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
      ];
      const mappedProjects = await Promise.all(
        data.map(async (repo: any, index: number) => {
          if (ignoredRepos.includes(repo.name)) {
            return null;
          }
          await new Promise((resolve) => setTimeout(resolve, 0.1 * index));
          const imageUrl = await fetchImageUrl(repo.name); // Busca a URL da imagem correspondente ao projeto
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
    <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left">
      <a
        href="https://github.com/GuilhermeGomesti1"
        target="_blanck"
        rel="noopener noreferrer"
        title="Conferir no GitHub"
        className="text-center mx-auto"
      >
        {" "}
        <p className="text-center mx-auto">
          Total de Projetos no GitHub: {""}
          {totalRepositories}
        </p>{" "}
      </a>
      <h2 className="text-2xl md:text-4xl text-blue-500 text-center mx-auto">
        Projetos Recentes
      </h2>

      <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
        {projects.map(({ slug, name, image /*description*/ }, index) => (
          <Link href={`/projects/${slug}`} key={name + index}>
            <li className="text-md relative">
              <Image
                src={image.url}
                alt={image.alt}
                width={300}
                height={300}
                className="object-cover rounded-2xl h-[18.75rem] mb-4"
                priority={true}
              />
              <span>{name}</span>
              <div className="bg-h-blue-500 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
                <span>{index + 1}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
};
