// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white py-6 shadow-inner">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <p className="text-gray-600">© 2025 Leandro Lima. Todos os direitos reservados.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/ArknoXI" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/leandro-lima-168901299/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
