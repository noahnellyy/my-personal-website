import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-gray-300">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

