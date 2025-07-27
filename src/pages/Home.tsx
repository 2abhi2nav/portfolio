export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-lg text-gray-700">Hey, I'm</p>
          <h1 className="text-6xl font-bold text-black">Full Name</h1>
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

      {/* About Me Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-black">About Me</h2>
        <p className="text-gray-700 max-w-2xl leading-relaxed">
          I'm a passionate developer with expertise across multiple domains. From creating seamless user experiences 
          to building robust backend systems, I bring a comprehensive approach to every project. My journey spans 
          DevOps automation, intuitive UI/UX design, engaging game development, and modern web applications.
        </p>
        <p className="text-gray-700 max-w-2xl leading-relaxed">
          When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
          or mentoring aspiring developers. I believe in creating digital experiences that are not only functional 
          but also delightful to use.
        </p>
      </section>
    </div>
  );
}