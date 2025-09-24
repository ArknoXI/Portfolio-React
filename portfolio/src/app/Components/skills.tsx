"use client";

import { useState } from "react";
import Image from "next/image";

const skills = [
  {
    name: "React",
    icon: "/icons/REACT.png",
    description:
      "Em desenvolvimento na cadeira de WEB & Mobile da faculdade. Esse portfolio foi realizado por meio do REACT - NEXT",
  },
  {
    name: "Java",
    icon: "/icons/Java.png",
    description:
      "Adquiri o conhecimento da linguagem JAVA por meio da faculdade. O aprendizado foi eficiente pois eu já havia experiência com POO.",
  },
  {
    name: "Python",
    icon: "/icons/python.png",
    description:
      "Aprendi a utilizar a linguagem Python ao inicio da faculdade, por ser uma linguagem de utilização simples foi um conhecimento rapido de adquirir.",
  },
  {
    name: "JavaScript",
    icon: "/icons/JS.png",
    description:
      "Adquiri conhecimento em JavaScript através da faculdade e prática ao criar uma Extensão de navegador para a navegação entre sites.",
  },
  {
    name: "GDScript",
    icon: "/icons/Godot.png",
    description:
      "Linguagem de programação utilizada para o desenvolvimento de jogos na Game Engine GODOT. Ela é uma linguagem semelhante a Python e juntamente possui características da Linguagem LUA.",
  },
  {
    name: "LUA",
    icon: "/icons/Lua.png",
    description:
      "Tive a experiência de utilizar a linguagem LUA enquanto aprendia a desenvolver jogos na Roblox Studios.",
  },
  {
    name: "C",
    icon: "/icons/C.png",
    description:
      "Aprendi a Linguagem C na faculdade, juntamente com os conceitos de Estrutura de Dados e Árvores.",
  },
  {
    name: "C#",
    icon: "/icons/Csharp.png",
    description:
      "Adquiri o conhecimento da linguagem C# por meio da Game Engine Unity. Sendo ela a primeira linguagem de programação que tive contato.",
  },
];

export default function Skills() {
  const [selectedSkillName, setSelectedSkillName] = useState(null);

  const handleToggle = (name: any) => {
    setSelectedSkillName((prev) => (prev === name ? null : name));
  };

  const activeSkill = skills.find((s) => s.name === selectedSkillName);

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-bold mb-10 text-center">Habilidades</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => handleToggle(skill.name)}
              aria-expanded={selectedSkillName === skill.name}
              aria-controls={`skill-desc-${skill.name}`}
              className={`flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition border-2 ${
                selectedSkillName === skill.name
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className="mb-3"
              />
              <span className="text-lg font-medium">{skill.name}</span>
            </button>
          ))}
        </div>

        {activeSkill && (
          <div
            id={`skill-desc-${activeSkill.name}`}
            className="mt-10 bg-gray-800 p-6 rounded-xl shadow-md text-center animate-fadeIn"
          >
            <h3 className="text-2xl font-semibold mb-4">{activeSkill.name}</h3>
            <p className="text-gray-300 leading-relaxed">
              {activeSkill.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
