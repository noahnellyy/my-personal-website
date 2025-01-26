export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Git",
    "SQL",
    "Responsive Design",
    "UI/UX Design",
  ]

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-white rounded-lg shadow p-4 text-center">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

