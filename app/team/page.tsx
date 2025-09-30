import Link from "next/link";

export default function Team() {
  const executives = [
    {
      name: "Sarah Chen",
      role: "President",
      program: "PhD Computer Science",
      bio: "Leading research in AI safety and alignment. Previously at Vector Institute.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP Research",
      program: "MSc Machine Learning",
      bio: "Focused on fairness and interpretability in deep learning systems.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Priya Patel",
      role: "VP Events",
      program: "PhD Philosophy",
      bio: "Specializing in ethics of AI and algorithmic decision-making.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "James Thompson",
      role: "VP Communications",
      program: "MSc Computer Science",
      bio: "Building bridges between technical research and public understanding.",
      image: "/api/placeholder/150/150"
    }
  ];

  const generalMembers = [
    {
      name: "Elena Vasquez",
      program: "PhD Computer Science",
      focus: "Robustness in computer vision",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Alex Kim",
      program: "MSc Statistics",
      focus: "Bias detection in hiring algorithms",
      image: "/api/placeholder/120/120"
    },
    {
      name: "David Liu",
      program: "Undergraduate CS",
      focus: "Explainable AI for healthcare",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Maria Santos",
      program: "PhD Law",
      focus: "AI governance and policy",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Ryan Mitchell",
      program: "MSc Computer Science",
      focus: "Privacy-preserving machine learning",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Sophie Zhang",
      program: "Undergraduate Engineering",
      focus: "Human-AI interaction design",
      image: "/api/placeholder/120/120"
    }
  ];

  const advisors = [
    {
      name: "Prof. Lisa Wang",
      title: "Faculty Advisor",
      department: "Computer Science",
      bio: "Professor of Machine Learning, expert in algorithmic fairness and AI safety.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Prof. Michael Foster",
      title: "Ethics Advisor",
      department: "Philosophy",
      bio: "Chair of AI Ethics Committee, leading researcher in technology ethics.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Amanda Clarke",
      title: "Industry Liaison",
      department: "Vector Institute",
      bio: "Senior Research Scientist, bridging academic research with industry applications.",
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            The passionate individuals driving trustworthy AI research and community at UofT
          </p>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-orange-200 dark:bg-orange-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-50 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Our diverse team brings together students, researchers, and faculty from across disciplines, united by our commitment to developing AI systems that society can trust. From computer science and philosophy to law and social sciences, we collaborate to tackle the most pressing challenges in trustworthy machine intelligence.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Executive Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our leadership team guides the strategic direction and day-to-day operations of TMI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executives.map((exec, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {exec.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exec.name}
                  </h3>
                  
                  <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exec.role}
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {exec.program}
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exec.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Members */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              General Members
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our active community members contributing to research, events, and outreach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {member.program}
                    </div>
                    
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      {member.focus}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-full">
              <span className="text-gray-600 dark:text-gray-300 mr-2">And</span>
              <span className="font-bold text-gray-900 dark:text-white">25+ more active members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Advisors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experienced faculty and industry experts who guide our research and strategic initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {advisor.name}
                  </h3>
                  
                  <div className="text-purple-600 dark:text-purple-400 font-semibold mb-1">
                    {advisor.title}
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {advisor.department}
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {advisor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            We're always looking for passionate individuals who share our commitment to trustworthy AI. Whether you're a student, researcher, or industry professional, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Apply to Join
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Attend Our Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
