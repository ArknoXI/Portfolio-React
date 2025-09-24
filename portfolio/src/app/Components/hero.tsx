import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-100 to-white">
      <Image
        src="/icons/Godot.png"
        width={100}
        height={100}
        alt="Icone da Game Engine GODOT"
        className="absolute top-35 left-52 opacity-20 animate-spin-slow w-12 md:w-16"
      />
      <Image
        src="/icons/Godot.png"
        width={100}
        height={100}
        alt="Icone da Game Engine GODOT"
        className="absolute bottom-20 right-32 opacity-20 hidden md:block w-10 md:w-14"
      />
      <Image
        src="/icons/Asesprite.png"
        width={100}
        height={100}
        alt="Icone da ferramenta de pixelart - Asesprite"
        className="absolute top-1/3 right-1/4 opacity-80 hidden lg:block w-12 lg:w-20"
      />
      <Image
        src="/icons/VSCODE.png"
        width={100}
        height={100}
        alt="Icone da IDE Visual Studio Code"
        className="absolute bottom-10 left-1/4 opacity-20 animate-spin-slow w-12 md:w-16"
      />
      <h2 className="text-4xl font-bold">Leandro Lima</h2>
      <p className="text-lg text-gray-600 mt-2">Desenvolvedor de jogos digitais | <b>Godot</b></p>
      <p className="text-lg text-gray-600 mt-2">Artista de pixelart | <b>Asesprite</b></p>
      <Link href="/Forca">
        <button className="bg-gray-500 text-white px-6 py-3 mt-4 rounded-lg text-lg hover:bg-gray-900 transition">
          Jogar Forca 🎮
        </button>
      </Link>
    </section>
  );
}