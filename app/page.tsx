import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "AI Wingman",
    description: "Dating Chat Bot",
    color: "bg-secondary",
    link: "https://www.wsj.com/articles/grindr-aims-to-build-the-dating-worlds-first-ai-wingman-8039e091",
    image: "/images/android-icon.webp",
  },
  {
    title: "A-List",
    description: "AI Generated Roster",
    color: "bg-primary",
    link: "https://www.bloomberg.com/news/articles/2025-01-21/grindr-plans-chat-summaries-new-discovery-features-in-ai-push",
    image: "/images/projectCover.webp",
  },
  {
    title: "Taken On Grindr",
    description: "Photo Authentication",
    color: "bg-primary",
    link: "https://www.grindr.com/blog/announcing-taken-on-grindr-real-in-app-photos-for-a-better-grindr-experience",
    image: "/images/TOGV2.png",
  },
  {
    title: "Drone Flight Modes",
    description: "Advanced Flight Modes for DJI Drones",
    color: "bg-primary",
    link: "https://www.youtube.com/watch?v=BjOdJLOV0KY",
    image: "/images/dji-icon.jpeg",
  },
]

const contacts = [
  {
    title: "LinkedIn",
    description: "Connect with me on LinkedIn",
    color: "bg-blue-600",
    link: "https://www.linkedin.com/in/nnelson10/",
    image: "/images/linkedIn.png",
  },
  {
    title: "ReadCV",
    description: "View my ReadCV",
    color: "bg-green-600",
    link: "https://read.cv/noahnellyy",
    image: "/images/readCV.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-medium">Noah Nelson</Link>
          <div className="space-x-4 text-sm">
            <Link href="/about" className="hover:text-gray-600">
              ABOUT
            </Link>
            <Link href="/resume" className="hover:text-gray-600">
              RÉSUMÉ
            </Link>
            <Link href="/about" className="font-bold hover:text-gray-600">
              HOME
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6 max-w-5xl mx-auto">
        {/* Profile Section */}
        <div className="mb-16">
        
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
                      className="transition-transform duration-300 group-hover:scale-110 bg-white object-cover"
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

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Contact</h2>
          
          {/* Email Section */}
          <div className="mb-4">
            <p className="text-gray-600">
              Feel free to reach out via email at{" "}
              <a
                href="mailto:nelson.noah2002@gmail.com"
                className="text-blue-500 hover:underline"
              >
                nelson.noah2002@gmail.com
              </a>
            </p>
          </div>
          <ul className="space-y-6">
            {contacts.map((contact, index) => (
              <li key={index} className="group">
                <Link
                  href={contact.link}
                  className="flex items-center space-x-4 p-4 rounded-lg transition-colors hover:bg-gray-100"
                >
                  <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-md">
                    <Image
                      src={contact.image}
                      alt={contact.title}
                      width={64}
                      height={64}
                      className="rounded-md transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{contact.title}</h3>
                    <p className="text-gray-600">{contact.description}</p>
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

