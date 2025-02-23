import Image from "next/image";
import AboutHeader from "../headerComponent";

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <AboutHeader />
      <div className="max-w-3xl mx-auto">

        {/* Profile Image Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-[200px] h-[200px] mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-2xl transform -rotate-6"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                className="rounded-full"
                src="/images/me2.jpg"
                alt="Noah Nelson"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <p>Hi! I&apos;m Noah &#x1F44B;</p>
        <br />
        <p className="mb-4">
          I’m currently a full-time <strong>Android Mobile Developer</strong> at
          <a href="https://www.grindr.com/" className="text-blue-500 hover:text-blue-600"><em> Grindr</em></a>, 
          where I help bring new features to the app as part of the Android Development team. 
          I joined Grindr in April 2024 as the youngest hire on the team after graduating early from the University of 
          Chicago with a 3.7 GPA, earning a degree in Economics and Computer Science.
        </p>

        <p className="mb-4">
          During my time at <strong>Grindr</strong>, I’ve continued to build on my passion for mobile development by contributing 
          to high-impact features and collaborating closely with cross-functional teams to deliver innovative features that improve 
          the user experience.
        </p>

        <p className="mb-4">
          While at the <strong>University of Chicago</strong>, I was deeply involved in various activities beyond academics. 
          I was a student-athlete playing Varsity Baseball, where I earned All-Conference honors. Additionally, I served on the executive 
          board of my fraternity, Psi Upsilon, as Treasurer, where I managed, organized, and oversaw all financial aspects of the organization.
        </p>

        <p className="mb-4">
          In the Summer of &apos;23 I had the opportunity to work as an <strong>Android Platform Engineer Intern</strong> at 
          <a href="https://www.grindr.com/" className="text-blue-500 hover:text-blue-600"><em> Grindr</em></a>; during my time there I was actively working with and uploading code in production. 
          I modernized the analytics infrastructure by integrating a deprecated analytics class with the current version, optimizing it through my understanding of dependency injection and MVVM. 
          Additionally, I led a significant project involving in-depth research, a complete redesign, and diligent testing to introduce a robust circuit breaker mechanism to enhance our application&apos;s dependability.
        </p>

        <p className="mb-4">
          Before Grindr, during the summer of &apos;22, I previously worked as a <strong>Software Engineer Intern</strong> at 
          <a href="https://riis.com/" className="text-blue-500 hover:text-blue-600"><em> RIIS LLC</em></a>, developing applications specific to commercial drones!
        </p>

        <p className="mb-4">
          Although I am not actively seeking full-time positions, I am always open to exploring new opportunities, collaborations, and networking.
        </p>
      </div>
    </div>
  );
}
