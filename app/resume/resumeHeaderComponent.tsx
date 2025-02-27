import Link from "next/link";

export default function ResumeHeader() {
    return (
      <nav className="fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
          {/* Name/Logo */}
          <Link href="/" className="text-xl font-medium">
            Noah Nelson
          </Link>
  
          {/* Navigation Links */}
          <div className="space-x-4 text-sm">
              <Link href="/about" className="hover:text-gray-600">
                ABOUT
              </Link>
              <Link href="/resume" className="font-bold hover:text-gray-600">
                RÉSUMÉ
              </Link>
            <Link href="/" className="hover:text-gray-600">
              HOME
            </Link>
          </div>
        </div>
      </nav>
    );
  }
  