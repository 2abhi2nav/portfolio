export default function Home() {
  return (
    <div className="space-y-12">
      <br />
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-lg text-gray-700">Hey, I'm</p>
          <h1 className="text-7xl font-semibold text-black">Abhinav Renjith</h1>
        </div>
        
        <div className="space-y-2">
          <ul className="text-lg text-black space-y-1">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
              DevOps Engineer
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
              UI/UX Designer
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
              Game Developer
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
              Front-end Developer
            </li>
          </ul>
        </div>
      </section>

      <br /><br />
      {/* About Me Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-black">About Me</h2>
        <p className="text-gray-700 max-w-2xl leading-relaxed">
          I'm a passionate developer with expertise across multiple domains. From creating solid user experiences
          to building resilient back-end systems, I employ a perfectionistic and quality-oriented mindset in everything I create. My journey spans
          DevOps automation, UI/UX design, game development, and web-application development.
        </p>
        <p className="text-gray-700 max-w-2xl leading-relaxed">
          When I'm not coding, you'll find me exploring new technologies, learning foreign languages, producing music, and designing.
        </p>
      </section>
      <br /><br />
    </div>
  );
}