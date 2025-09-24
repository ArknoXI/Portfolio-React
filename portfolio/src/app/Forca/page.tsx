"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const palavras = [
  "REACT", "NEXTJS", "JAVASCRIPT", "TAILWIND", "HTML", "CSS",
  "NODE", "PYTHON", "GITHUB", "FRONTEND", "BACKEND", "COMPONENTE",
  "LINK", "STATE", "POO", "WEB", "SITE", "ARRAY", "STRING",
  "BOOLEAN", "INTEGER", "IMPORT", "INPUT", "BUTTON", "ARVORE",
  "FILA", "PILHA", "LISTA", "PROGRAMACAO", "ALGORITMO"
];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Forca() {
  const maxTentativas = 6;

  const [palavra, setPalavra] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [status, setStatus] = useState("jogando");

  const novaPalavra = () => {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavraAleatoria);
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setStatus("jogando");
  };

  useEffect(() => {
    novaPalavra();
  }, []);

  useEffect(() => {
    if (!palavra) return;

    const palavraSet = new Set(palavra.split(""));
    const corretasSet = new Set(letrasCorretas);
    if (palavraSet.size === corretasSet.size) {
      setStatus("vitoria");
    }

    if (letrasErradas.length >= maxTentativas) {
      setStatus("derrota");
    }
  }, [letrasCorretas, letrasErradas, palavra]);

  const clicarLetra = (letra) => {
    if (status !== "jogando") return;
    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) return;

    if (palavra.includes(letra)) {
      setLetrasCorretas([...letrasCorretas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
    }
  };

  const displayPalavra = palavra
    ? palavra
        .split("")
        .map((l) => (letrasCorretas.includes(l) ? l : "_"))
        .join(" ")
    : "";

  const Boneco = () => (
    <svg width="140" height="220" className="mx-auto mb-6">
      <line x1="20" y1="200" x2="120" y2="200" stroke="#4B5563" strokeWidth="4"/>
      <line x1="40" y1="200" x2="40" y2="20" stroke="#4B5563" strokeWidth="4"/>
      <line x1="40" y1="20" x2="100" y2="20" stroke="#4B5563" strokeWidth="4"/>
      <line x1="100" y1="20" x2="100" y2="40" stroke="#4B5563" strokeWidth="3"/>

      {letrasErradas.length > 0 && <circle cx="100" cy="50" r="12" stroke="#EF4444" strokeWidth="3" fill="transparent"/>}
      {letrasErradas.length > 1 && <line x1="100" y1="62" x2="100" y2="110" stroke="#EF4444" strokeWidth="3"/>}
      {letrasErradas.length > 2 && <line x1="100" y1="75" x2="80" y2="95" stroke="#EF4444" strokeWidth="3"/>}
      {letrasErradas.length > 3 && <line x1="100" y1="75" x2="120" y2="95" stroke="#EF4444" strokeWidth="3"/>}
      {letrasErradas.length > 4 && <line x1="100" y1="110" x2="80" y2="140" stroke="#EF4444" strokeWidth="3"/>}
      {letrasErradas.length > 5 && <line x1="100" y1="110" x2="120" y2="140" stroke="#EF4444" strokeWidth="3"/>}
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 bg-gradient-to-b from-blue-50 to-white">
      
      <div className="w-full max-w-5xl px-6 mb-6 flex justify-start">
        <Link href="/">
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
            ← Voltar para Portfolio
          </button>
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Jogo da Forca</h1>

      <Boneco />

      <p className="text-4xl font-mono tracking-widest mt-2 mb-4 text-gray-800">{displayPalavra}</p>

      <p className="text-red-600 mb-2">
        Letras erradas: {letrasErradas.join(", ")}
      </p>
      <p className="text-gray-700 mb-4">Tentativas restantes: {maxTentativas - letrasErradas.length}</p>

      <div className="grid grid-cols-7 gap-2 mb-6 max-w-md">
        {alfabeto.map((letra) => {
          const acertou = letrasCorretas.includes(letra);
          const errou = letrasErradas.includes(letra);
          return (
            <button
              key={letra}
              onClick={() => clicarLetra(letra)}
              disabled={acertou || errou || status !== "jogando"}
              className={`px-3 py-2 rounded font-bold transition ${
                acertou
                  ? "bg-green-500 text-white cursor-not-allowed"
                  : errou
                  ? "bg-red-500 text-white cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
            >
              {letra}
            </button>
          );
        })}
      </div>

      {status === "vitoria" && (
        <p className="text-green-600 text-2xl mt-6">
          🎉 Parabéns! Você adivinhou a palavra: {palavra}
        </p>
      )}
      {status === "derrota" && (
        <p className="text-red-600 text-2xl mt-6">
          💀 Que pena! A palavra era: {palavra}
        </p>
      )}

      <button
        onClick={novaPalavra}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Reiniciar
      </button>
    </div>
  );
}
