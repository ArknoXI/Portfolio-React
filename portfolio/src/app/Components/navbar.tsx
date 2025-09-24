import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Portfólio</h1>
        <ul className="flex space-x-6">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">Sobre</Link></li>
          <li><Link href="#skills">Habilidades</Link></li>
          <li><Link href="#projects">Projetos</Link></li>
        </ul>
      </nav>
    </header>
  );
}