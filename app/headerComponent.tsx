import Link from "next/link";

export default function AboutHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Name/Logo */}
        <Link href="/" className="text-xl font-medium">
          About Me
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4 text-sm">
          <Link href="/" className="hover:text-gray-600">
            home.
          </Link>
        </div>
      </div>
    </nav>
  );
}
