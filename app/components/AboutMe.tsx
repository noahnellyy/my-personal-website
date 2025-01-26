import Image from "next/image"

export default function AboutMe() {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <p className="text-lg mb-4">
            Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. I'm passionate about [Your
            Interests/Specialties] and love to [Your Hobbies/Activities].
          </p>
          <p className="text-lg">
            With [X] years of experience in [Your Field], I've worked on various projects and continuously strive to
            improve my skills and stay up-to-date with the latest technologies.
          </p>
        </div>
      </div>
    </section>
  )
}

