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
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-12">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to Noah Nelson&apos;s personal website
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/noahnellyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Noah Nelson
          </Link>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center gap-8 mb-16">
        <div className="relative w-[200px] h-[200px]">
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
        <h1 className="text-4xl font-bold text-center">Noah Nelson</h1>
        <p className="text-xl text-gray-600 text-center max-w-2xl">
          Web developer and software engineer passionate about creating innovative solutions. Specializing in modern web
          technologies and always eager to learn and grow in the field.
        </p>
      </div>

      <div className="w-full max-w-5xl mb-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="group relative w-[250px] h-[250px] md:w-[220px] md:h-[220px] overflow-hidden rounded-lg flex items-center justify-center"
            >
              <div
                className={`absolute inset-0 ${project.color} transition-transform duration-300 group-hover:scale-95`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={180}
                    height={180}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm a passionate web developer with expertise in modern technologies. My journey in tech has led me to work
            on diverse projects, always pushing the boundaries of what's possible on the web.
          </p>
          <Link href="/about" className="text-blue-500 hover:text-blue-600 transition-colors">
            Learn more about my background →
          </Link>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in collaborating or have a project in mind? I'd love to hear from you! Feel free to reach out for
            any inquiries or just to say hello.
          </p>
          <Link href="/contact" className="text-blue-500 hover:text-blue-600 transition-colors">
            Get in touch →
          </Link>
        </div>
      </div>
    </main>
  )
}
