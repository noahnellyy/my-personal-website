import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1 and its key features.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2 and its key features.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3 and its key features.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

