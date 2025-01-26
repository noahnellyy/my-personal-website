export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
          Hello! I'm [Your Name], a passionate [Your Profession] based in [Your Location]. I specialize in [Your
          Specialties] and have a keen interest in [Your Interests].
        </p>
        <p className="mb-4">
          With [X] years of experience in the field, I've worked on various projects ranging from [Project Type 1] to
          [Project Type 2]. My goal is to [Your Professional Goal].
        </p>
        <p className="mb-4">
          When I'm not coding, you can find me [Your Hobbies or Interests]. I believe in [Your Personal or Professional
          Philosophy].
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Skills</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
          <li>Skill 5</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Education</h2>
        <p className="mb-2">
          <strong>[Degree Name]</strong> - [University Name], [Graduation Year]
        </p>
        <p>[Brief description of your educational background or achievements]</p>
      </div>
    </div>
  )
}

