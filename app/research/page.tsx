import Link from "next/link";

export default function Research() {
  const currentResearch = [
    {
      id: 1,
      title: "Bias in Large Language Models",
      description: "Studying mitigation strategies for demographic bias in generative AI systems and developing more equitable language models.",
      leads: ["Sarah Chen", "Marcus Rodriguez"],
      status: "Active",
      links: {
        github: "https://github.com/uoft-tmi/llm-bias",
        paper: "#",
        slides: "#"
      },
      tags: ["NLP", "Fairness", "LLMs"]
    },
    {
      id: 2,
      title: "AI for Energy Auditing",
      description: "Applying computer vision and OCR techniques to detect inefficiencies in building energy systems and promote sustainability.",
      leads: ["Elena Vasquez", "David Liu"],
      status: "Active",
      links: {
        github: "https://github.com/uoft-tmi/energy-audit",
        demo: "#"
      },
      tags: ["Computer Vision", "Sustainability", "OCR"]
    },
    {
      id: 3,
      title: "Privacy-Preserving Federated Learning",
      description: "Developing robust federated learning frameworks that protect individual privacy while maintaining model performance.",
      leads: ["Ryan Mitchell", "Alex Kim"],
      status: "Active",
      links: {
        paper: "#",
        code: "#"
      },
      tags: ["Privacy", "Federated Learning", "Security"]
    },
    {
      id: 4,
      title: "Explainable AI for Healthcare Decisions",
      description: "Creating interpretable machine learning models for medical diagnosis that provide clear reasoning for healthcare professionals.",
      leads: ["Priya Patel", "Maria Santos"],
      status: "Active",
      links: {
        paper: "#",
        demo: "#"
      },
      tags: ["Healthcare", "XAI", "Medical AI"]
    }
  ];

  const pastResearch = [
    {
      id: 5,
      title: "Medical Imaging Fairness (2024)",
      description: "Benchmarking diagnostic AI systems across different demographic groups to ensure equitable healthcare outcomes.",
      leads: ["Alumni: Dr. Jennifer Walsh"],
      outcome: "Published at MICCAI 2024",
      links: {
        paper: "#",
        dataset: "#"
      },
      tags: ["Medical Imaging", "Fairness", "Healthcare"]
    },
    {
      id: 6,
      title: "Robustness in Autonomous Systems (2023)",
      description: "Investigating adversarial attacks and defenses for safety-critical AI systems in autonomous vehicles.",
      leads: ["Alumni: Michael Chen"],
      outcome: "Published at ICCV 2023",
      links: {
        paper: "#",
        code: "#"
      },
      tags: ["Autonomous Systems", "Robustness", "Safety"]
    },
    {
      id: 7,
      title: "Algorithmic Transparency in Hiring (2023)",
      description: "Developing tools to audit and explain AI-driven recruitment systems for bias and discrimination.",
      leads: ["Alumni: Dr. Rachel Kim"],
      outcome: "Published at FAccT 2023",
      links: {
        paper: "#",
        tool: "#"
      },
      tags: ["Transparency", "Hiring", "Auditing"]
    }
  ];

  const publications = [
    {
      title: "Mitigating Bias in Large Language Models: A Comprehensive Survey",
      authors: "S. Chen, M. Rodriguez, et al.",
      venue: "ArXiv preprint, 2024",
      link: "#"
    },
    {
      title: "Energy Efficiency Through AI: Computer Vision for Building Audits",
      authors: "E. Vasquez, D. Liu, et al.",
      venue: "ICML Workshop on Climate Change AI, 2024",
      link: "#"
    },
    {
      title: "Privacy-Preserving Federated Learning: A Systematic Review",
      authors: "R. Mitchell, A. Kim, et al.",
      venue: "IEEE Transactions on AI, 2024",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Research</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Advancing trustworthy machine intelligence through rigorous research and real-world impact
          </p>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-200 dark:bg-red-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-200 dark:bg-yellow-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-50 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Our research explores trustworthy machine intelligence at UofT, spanning fairness, robustness, explainability, and real-world impact. Below are highlights from current and past projects that demonstrate our commitment to developing AI systems society can trust.
          </p>
        </div>
      </section>

      {/* Current Research */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Current Research
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our ongoing projects are addressing today's most pressing challenges in trustworthy AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentResearch.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-sm font-semibold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                      {project.status}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Research Leads: </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{project.leads.join(", ")}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.links.github && (
                      <a href={project.links.github} className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.links.paper && (
                      <a href={project.links.paper} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Paper
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Research */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Past Research & Alumni Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Completed projects that have contributed to the field and launched successful careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastResearch.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300 opacity-90 hover:opacity-100">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      Completed
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-50 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{project.leads[0]}</div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">{project.outcome}</div>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.links.paper && (
                      <a href={project.links.paper} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                        Paper
                      </a>
                    )}
                    {project.links.code && (
                      <a href={project.links.code} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        Code
                      </a>
                    )}
                    {project.links.dataset && (
                      <a href={project.links.dataset} className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                        Dataset
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Publications & Outputs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our research contributions to the academic community
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                      {pub.venue}
                    </p>
                  </div>
                  <a 
                    href={pub.link}
                    className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
            <p className="text-blue-700 dark:text-blue-300 italic">
              We are preparing outputs from ongoing initiatives — check back soon for more publications!
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Get Involved in Research
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Interested in contributing to trustworthy AI research? Join our community and help shape the future of machine intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join Our Research
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-indigo-600 transition-all duration-200"
            >
              Meet Our Researchers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
