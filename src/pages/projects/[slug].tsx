import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  slug: string;
  name: string;
  image: {
    url: string;
    alt: string;
  };
  html_url: string;
  description: string;
}

const ProjectDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [project, setProject] = useState<Project | null>(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const toggleLessDescription = () => {
    setShowFullDescription(false);
  };

  let descriptionToShow = project?.description;
  if (!showFullDescription) {
    const descriptionLines = project?.description?.split("\n") ?? [];
    const maxLines = 15;
    descriptionToShow = descriptionLines.slice(0, maxLines).join("\n");
  }

  useEffect(() => {
    if (slug) {
      fetchProject(slug as string);
    }
  }, [slug]);

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

  const fetchProject = async (slug: string) => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/GuilhermeGomesti1/${slug}`
      );
      const data = await response.json();

      const imageUrl = await fetchImageUrl(slug); // Busca a URL da imagem correspondente ao projeto

      const readmeResponse = await fetch(
        `https://raw.githubusercontent.com/GuilhermeGomesti1/${slug}/main/README.md`
      );

      if (readmeResponse.status === 404) {
        // Caso o arquivo README.md não seja encontrado na branch "main", tenta buscar na branch "master"
        const masterReadmeResponse = await fetch(
          `https://raw.githubusercontent.com/GuilhermeGomesti1/${slug}/master/README.md`
        );
        if (masterReadmeResponse.status === 404) {
          throw new Error("Arquivo README.md não encontrado.");
        } else {
          const readmeData = await masterReadmeResponse.text();
          const project: Project = {
            slug: data.name,
            name: data.name,
            image: {
              url: imageUrl,
              alt: "Imagem do Projeto",
            },
            html_url: data.html_url,
            description: readmeData,
          };
          setProject(project);
        }
      } else {
        const readmeData = await readmeResponse.text();
        const project: Project = {
          slug: data.name,
          name: data.name,
          image: {
            url: imageUrl,
            alt: "Imagem do Projeto",
          },
          html_url: data.html_url,
          description: readmeData,
        };
        setProject(project);
      }
    } catch (error) {
      console.error("Erro ao buscar os detalhes do projeto:", error);
    }
  };

  if (!project) {
    return <div>Carregando...</div>;
  }

  return (
    <div
      style={{
        paddingTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="text-2xl md:text-3xl pb-10">
        Detalhes do Projeto: <strong className="text-blue-500">{project.name}</strong>
      </h1>
      <Image
        src={project.image.url}
        alt={project.image.alt}
        width={500}
        height={300}
        className="object-cover rounded-2xl mb-10 mt-2 "
      />
      <div className="flex flex-col items-center justify-center w-3/4 ">
        <div className="  px-4 py-5  border border-h-blue-500 rounded-lg shadow-lg text-center ">
          <p className="text-lg md:text-xl  ">
            {descriptionToShow}
            {!showFullDescription && (
              <button
                className="text-blue-500 hover:underline focus:outline-none"
                onClick={toggleDescription}
              >
                Leia mais
              </button>
            )}
            {showFullDescription && (
              <button
                className="text-blue-500 hover:underline focus:outline-none"
                onClick={toggleLessDescription}
              >
                Leia menos
              </button>
            )}
          </p>
        </div>
      </div>
      <strong className="pt-4">  <a href={project.html_url} target="_blank" rel="noopener noreferrer"  style={{ backgroundColor: "#2f74c0", color: " #FFFFFF" }}
            className="w-fit p-2 rounded-md">
        Ver no GitHub
      </a></strong>
    
    </div>
  );
};

export default ProjectDetails;
