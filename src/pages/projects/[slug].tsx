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

      const project: Project = {
        slug: data.name,
        name: data.name,
        image: {
          url: imageUrl,
          alt: "Imagem do Projeto",
        },
        html_url: data.html_url,
        description: data.description,
      };

      setProject(project);
    } catch (error) {
      console.error("Erro ao buscar os detalhes do projeto:", error);
    }
  };

  if (!project) {
    return <div>Carregando...</div>;
  }

  return (
    <div style={{paddingTop:"50px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 className="bt-10">Detalhes do Projeto: {project.name}</h1>
      <Image
        src={project.image.url}
        alt={project.image.alt}
        width={500}
        height={500}
        
      />
      <p>{project.description}</p>
      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
        Ver no GitHub
      </a>
    </div>
  );
};

export default ProjectDetails;