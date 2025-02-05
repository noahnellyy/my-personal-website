import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Project One",
    description: "Full-stack web application",
    color: "bg-secondary",
    link: "#",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Project Two",
    description: "Mobile app development",
    color: "bg-primary",
    link: "#",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Project Three",
    description: "UI/UX design system",
    color: "bg-muted",
    link: "#",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Project Four",
    description: "API integration",
    color: "bg-accent",
    link: "#",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Project Five",
    description: "Mobile development",
    color: "bg-destructive",
    link: "#",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    title: "Project Six",
    description: "Android application",
    color: "bg-card",
    link: "#",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="project-card">
              <div className={`project-card-content ${project.color}`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={200}
                    height={200}
                    className="project-card-image"
                  />
                </div>
              </div>

              <div className="project-card-overlay">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}