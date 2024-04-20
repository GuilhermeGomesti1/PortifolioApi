import Head from "next/head";
const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portifólio</title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-7 mt-7 text-blue-500">
          Portifólio
        </h1>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500 ">
            Educação
          </h2>

          <p>
            . ANÁLISE E DESENVOLVIMENTO DE SISTEMAS NA UNIFCV - CENTRO
            UNIVERSITÁRIO CIDADE VERDE - CURSANDO (EAD)
          </p>
          <p>
            . CURSOS COM CERTIFICADO DE HTML5 E CSS3 | APIS | REACTJS |
            TYPESCRIPT | NEXTJS | TESTES | JAVASCRIPT
          </p>
          <p> . INGLÊS - FISK</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">
            Habilidades
          </h2>

          <p>
            . Front-End: React | Next.js | JavaScript | TypeScript | SCSS | SASS
            | Tailwind CSS | Styled Components | CSS Modules
            <br /> . Back-End: Node.js | Express <br /> . Design e Prototipagem:
            Figma | UX/UI Design <br />
            . Bancos de Dados: MySQL | MongoDB <br />
            . Ferramentas e Controle de Versão: GIt <br />
            . APIs: Integração com APIs RESTful
            <br /> . Metodologias Ágeis: Scrum <br />
            . Testes de Software: Cypress <br />
            . Experiência Profissional em Música: Músico profissional com 12
            anos de experiência, fundador de uma escola de música e líder da
            equipe.
            <br />
            Ativo em projetos voluntários, promoveu aulas de Violão pela
            prefeitura local. Premiado pelo projeto Seresta ao Luar
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">
            Experiência
          </h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              Desenvolvedor Web | Front-end
            </h3>
            <p className="text-sm mb-1">
              Freelancer | Janeiro 2023 - Março 2023
            </p>
            <p>
              Desenvolvimento de Site Completo com Sistema de Gestão de Conteúdo
              utilizando Next.js, TypeScript, JavaScript, HTML e SCSS.
            </p>
            <p>
              Habilidade em programação para construir todas as funcionalidades
              do site de forma responsiva.
            </p>
            <p>
              Implementação bem-sucedida de Sistema de Gestão de Conteúdo para
              permitir atualização autônoma de conteúdo pelo cliente.
            </p>
            <p>Entrega do site com sucesso ao cliente.</p>
            <a
              href="https://healthy-life-3x0qh2huz-guilhermegomesti1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Link para o site
            </a>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Professor de Música</h3>
            <p className="text-sm mb-1">
              Prefeitura Municipal de João Monlevade | Fevereiro 2013 - 2022
            </p>
            <p>
              Ministrei aulas de violão na Fundação Casa de Cultura e nas
              escolas municipais.
            </p>
            <p>
              Desenvolvimento de aulas e apresentações junto com a equipe da
              rede cultural.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Empreendedor</h3>
            <p className="text-sm mb-1">
              Escola de Música Music for All | Fevereiro 2013 - Atual
            </p>
            <p>Gerenciamento de divulgação e redes sociais.</p>
            <p>
              Participação nos processos de contratação de novos funcionários.
            </p>
            <p>Responsável pela contabilidade da empresa.</p>
            <p>Responsável pelo plano pedagógico da empresa.</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">
            Exemplos de Projetos Concluídos
          </h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Healthy Life Nutrition</h3>
            <p>
              Este projeto tem como objetivo um site para vendas de ebooks e
              postagens de dicas e receitas, proporcionando uma plataforma
              moderna e atualizada, que ofereça uma experiência de navegação
              intuitiva e agradável. Utilizando as tecnologias mais atuais como
              HTML, SCSS, JS, TypeScript e Next.js, todas as funcionalidades do
              site foram desenvolvidas para atender às necessidades do cliente.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Newsystem Tickets</h3>
            <p>
              Desenvolvimento de uma aplicação com sistema de login completo,
              utilizando Firebase para proteger as informações dos usuários. A
              aplicação permite a adição de clientes e abertura de chamados para
              diferentes tipos de atendimentos, com itens editáveis e
              responsivos para melhor experiência do usuário.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Prime-Flix-Filmes</h3>
            <p>
              A aplicação Prime-Flix-Filmes utiliza uma API externa para buscar
              informações sobre os filmes em cartaz no momento. A aplicação
              exibe detalhes do filme, como imagem de cartaz, informações
              relevantes e trailer do filme obtido do Youtube. É possível
              adicionar filmes aos favoritos, editá-los e visualizar mais
              detalhes.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">APIREST</h3>
            <p>
              Desenvolvi uma API REST completa, com CRUD de usuários, utilizando
              Node, Express, TypeScript e MongoDB. Também fiz o deploy da
              aplicação no Railway. Durante o desenvolvimento, aprendi
              princípios do SOLID, injeção de dependência e o uso do Repository
              Pattern. Essa experiência me proporcionou conhecimentos práticos
              valiosos no desenvolvimento de APIs REST e aplicação de conceitos
              fundamentais.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Favorite-Bands</h3>
            <p>
              Desenvolvimento de uma página com sistema de login que permite aos
              usuários selecionar um estilo musical dentre vários disponíveis e
              adicionar sua banda favorita para o estilo escolhido. Cada estilo
              musical possui um design diferente para a exibição dos cards das
              bandas, que incluem link de imagem e informações relevantes. O
              site é totalmente responsivo, adaptando-se a todos os
              dispositivos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
