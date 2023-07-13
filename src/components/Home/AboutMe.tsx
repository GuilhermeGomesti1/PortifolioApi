import Link from "next/link";
import Image from "next/image";
export const AboutMe = () => {
  return (
    <main>
      <div>
        <h1> Prazer, sou &nbsp;</h1>
        <span>Guilherme</span>
        <div>
          <h2>Sou um desenvolvedor front-end</h2>
          <Link href="/contatos">Converse comigo</Link>
        </div>
        <ul>
          <li style={{ backgroundColor: "#2f74c0", color: " #FFFFFF" }}>
            typescript
          </li>
          <li style={{ backgroundColor: "#68ddfa", color: " #000000" }}>
            react
          </li>
          <li style={{ backgroundColor: "#EFD81D", color: " #000000" }}>
            javascript
          </li>
          <li style={{ backgroundColor: "#000000", color: "  #FFFFFF" }}>
            next-js
          </li>
          <li style={{ backgroundColor: "#000000", color: "  #FFFFFF" }}>
            node
          </li>
        </ul>
      </div>
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/106498363?u=69944eb7c6a61b6f01b54fa9d6d953c60725ecf6&v=4"
          unoptimized
          width={500}
          height={500}
          alt="imagem de perfil github encontrar ela"
        />
        <p>
          <span>2+</span>
          <br />
          anos de experiencia
        </p>
      </div>
    </main>
  );
};
