import Image from "next/image";

const tools = [
    { name: "React", icon: "/icons/REACT.png" },
    { name: "VS Code", icon: "/icons/VSCODE.png" },
    { name: "Godot Engine", icon: "/icons/Godot.png" },
    { name: "Asesprite", icon: "/icons/Asesprite.png" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">Sobre Mim</h2>

        <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-200 text-center">
          Sou um estudante de <span className="font-semibold">Ciência da Computação</span> apaixonado por tecnologia
          e desenvolvimento de jogos.  
          Trabalho principalmente com <span className="font-semibold">Godot</span>, mas estou expandindo meus conhecimentos
          para a área Fullstack e inteligência artificial.  
          Minha meta é criar soluções a partir das minhas experiencias em <span className="font-semibold">desenvolvimento de sistemas</span>.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition"
            >
              <Image
                src={tool.icon}
                alt={tool.name}
                width={50}
                height={50}
                className="mb-3"
              />
              <span className="text-lg font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}