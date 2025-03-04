import ResumeHeader from "./resumeHeaderComponent";

export default function Resume() {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 pt-20">
        <ResumeHeader/>    
  
        {/* Overview Section */}
        <div className="grid grid-cols-[120px_1fr] gap-8 mb-12">
          <h2 className="font-medium">Overview</h2>
          <p>
            Computer Science and Business Economics student at the University of Chicago with experience in software
            engineering and mobile development. Passionate about creating innovative solutions and implementing efficient
            systems.
          </p>
        </div>
  
        {/* Experience Section */}
        <div className="grid grid-cols-[120px_1fr] gap-8">
          <h2 className="font-medium">Experience</h2>
          <div className="relative">
            {/* Timeline entries */}
            <div className="relative">
              {/* Current */}
              <div className="mb-16 relative">
                <div className="absolute left-0 w-12 text-right">
                  <div className="absolute -left-3 top-[0.6rem] w-[5px] h-[1px] bg-black"></div>
                  <span className="text-sm whitespace-nowrap ml-[10px]">Now   .</span>
                </div>
                <div className="absolute left-[1.5rem] top-8 bottom-0 w-[1px] bg-black"></div>
                <div className="ml-16">
                  <h3 className="font-bold">Grindr - Android Engineer</h3>
                  <p className="mb-2 italic">Building high-impact features that improve the user experience:</p>
                  <ul className="list-none space-y-1 pl-5">
                    <li className="relative pl-3">
                        <span className="absolute left-0">•</span> Dating Wingman
                    </li>
                    <li className="relative pl-3">
                        <span className="absolute left-0">•</span> Taken On Grindr
                        </li>
                    <li className="relative pl-3">
                        <span className="absolute left-0">•</span> A-list
                        </li>
                  </ul>
                </div>
              </div>
  
              {/* Grindr */}
              <div className="mb-16 relative">
                <div className="absolute left-0 w-12 text-right">
                  <div className="absolute -left-3 top-[0.6rem] w-[5px] h-[1px] bg-black"></div>
                  <span className="text-sm whitespace-nowrap">Jun '23</span>
                </div>
                <div className="absolute left-[1.5rem] top-8 bottom-0 w-[1px] bg-black"></div>
                <div className="ml-16">
                  <h3 className="font-bold">Grindr — Android Engineering Intern</h3>
                  <p className="mb-2 italic">Led Android development initiatives and system improvements.</p>
                    <ul className="list-none space-y-1 pl-5">
                        <li className="relative pl-3">
                            <span className="absolute left-0">•</span> Led the complete research, integration, testing, and deployment of Android's circuit breaker
                        </li>
                        <li className="relative pl-3">
                            <span className="absolute left-0">•</span> Refactored analytics integration to reduce complexity
                        </li>
                        <li className="relative pl-3">
                            <span className="absolute left-0">•</span> Rewrote legacy Activities/Fragments following MVVM architecture
                        </li>
                    </ul>
                </div>
              </div>
  
              {/* RIIS LLC */}
                <div className="mb-16 relative">
                <div className="absolute left-0 w-12 text-right">
                    <div className="absolute -left-3 top-[0.6rem] w-[5px] h-[1px] bg-black"></div>
                    <span className="text-sm whitespace-nowrap">Jun '22</span>
                </div>
                <div className="absolute left-[1.5rem] top-8 bottom-0 w-[1px] bg-black"></div>
                <div className="ml-16">
                    <h3 className="font-bold">RIIS LLC — Software Engineer Intern</h3>
                    <p className="mb-2 italic font-light">Developed drone control applications and Android solutions.</p>
                    <ul className="list-none space-y-1 pl-5">
                        <li className="relative pl-3 font-light">
                            <span className="absolute left-0">•</span> Built waypoint application for drone flight control
                        </li>
                        <li className="relative pl-3 font-light">
                            <span className="absolute left-0">•</span> Developed Android applications using Kotlin for DJI drone systems
                        </li>
                        <li className="relative pl-3 font-light">
                            <span className="absolute left-0">•</span> Implemented ArduPilot application features in QML
                        </li>
                    </ul>
                </div>
                </div>

                {/* Education */}
                <div className="relative">
                <div className="absolute left-0 w-12 text-right">
                    <div className="absolute -left-3 top-[0.6rem] w-[5px] h-[1px] bg-black"></div>
                        <span className="text-sm whitespace-nowrap">Sep '20</span>
                    </div>
                <div className="absolute left-[1.5rem] top-8 w-[1px] bg-black"></div>
                    <div className="ml-16">
                        <h3 className="font-bold">The University of Chicago</h3>
                        <p className="mb-2 italic">BA in Business Economics, Minor in Computer Science</p>
                        <p className="text-sm pl-5">• GPA: 3.72</p>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
    