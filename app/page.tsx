import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "AI Wingman",
    description: "Dating Chat Bot",
    color: "bg-secondary",
    link: "https://www.wsj.com/articles/grindr-aims-to-build-the-dating-worlds-first-ai-wingman-8039e091",
    image: "/images/projectCover.webp",
  },
  {
    title: "A-List",
    description: "AI generated roster",
    color: "bg-primary",
    link: "https://www.bloomberg.com/news/articles/2025-01-21/grindr-plans-chat-summaries-new-discovery-features-in-ai-push",
    image: "/images/projectCover.webp",
  },
  {
    title: "Project Three",
    description: "UI/UX design system",
    color: "bg-purple-500",
    link: "#",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium">
            Noah Nelson
          </Link>
          <div className="space-x-4 text-sm">
            <Link href="/about" className="hover:text-gray-600">
              about.
            </Link>
            <Link href="/resume" className="hover:text-gray-600">
              résumé.
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              contact.
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-8 max-w-5xl mx-auto">
        {/* Profile Section */}
        <div className="mb-16">
          <div className="relative w-[200px] h-[200px] mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-2xl transform -rotate-6"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                className="rounded-full"
                src="/images/me2.jpg"
                alt="Main Photo"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Mobile developer and software engineer passionate about building innovative and user-friendly applications.
            Specializing in modern mobile technologies with experience in Jetpack Compose, and always eager to learn and
            grow in the field.
          </p>
        </div>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <ul className="space-y-6">
            {projects.map((project, index) => (
              <li key={index} className="group">
                <Link
                  href={project.link}
                  className="flex items-center space-x-4 p-4 rounded-lg transition-colors hover:bg-gray-100"
                >
                  <div
                    className={`w-16 h-16 ${project.color} rounded-md flex items-center justify-center overflow-hidden`}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={64}
                      height={64}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

