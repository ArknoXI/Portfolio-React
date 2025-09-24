// components/Projects.jsx
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Jogo da Forca",
    description: "Jogo da forca pedido no projeto de Web&Mobile.",
    image: "/projects/Forca.png",
    github: "/Forca",
    Type: "link",
  },
  {
    name: "Extensão WEB",
    description: "Extensão Web para a transição entre jogos diários da WEB. Utilizando JS.",
    image: "/icons/JS.png",
    github: "https://github.com/ArknoXI/Web_Extension_Dailies",
    Type: "a",
  },
  {
    name: "Gods At Dungeon",
    description: "Repositório do meu jogo Gods At Dungeon. Utilizando Godot Engine.",
    image: "/icons/Godot.png",
    github: "https://github.com/ArknoXI/GOD_Repository",
    Type: "a",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-100 to-white text-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Projetos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className = "bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <div className="relative w-full h-48">
                <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                />
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  {project.github && project.Type === "link" && (
                    <Link
                      href={project.github}
                      className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
                    >
                      Acessar
                    </Link>
                  )}
                  {project.github && project.Type === "a" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
