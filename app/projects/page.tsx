import Image from "next/image"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its key features.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2 and its key features.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3 and its key features.",
    image: "/placeholder.svg?height=200&width=300",
    link: "#",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

