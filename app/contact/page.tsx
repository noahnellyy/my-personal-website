import Link from "next/link";
import Image from "next/image";

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

export default function Contact() {
  return (
    <div className="min-h-screen max-w-5xl mx-auto px-8 py-24">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      {/* Contact Links */}
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

      {/* Email Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Email Me</h2>
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
    </div>
  );
}
