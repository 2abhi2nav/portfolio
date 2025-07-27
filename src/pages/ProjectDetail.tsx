import { useParams, Navigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export default function ProjectDetail() {
  const { projectId } = useParams();

  const projectData = {
    'web-development': {
      title: 'Web Development Projects',
      description: 'A collection of modern web applications showcasing full-stack development skills',
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
          image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API']
        },
        {
          name: 'Task Management App',
          description: 'Collaborative task management tool with real-time updates',
          image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400',
          technologies: ['React', 'WebSocket', 'MongoDB', 'Express']
        },
        {
          name: 'Portfolio Website',
          description: 'Responsive portfolio website with modern design principles',
          image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
          technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
        }
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design Portfolio',
      description: 'User-centered design solutions focusing on accessibility and user experience',
      projects: [
        {
          name: 'Mobile Banking App',
          description: 'Intuitive mobile banking interface with focus on security and ease of use',
          image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
          technologies: ['Figma', 'Adobe XD', 'Principle', 'User Research']
        },
        {
          name: 'Healthcare Dashboard',
          description: 'Complex data visualization dashboard for healthcare professionals',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
          technologies: ['Sketch', 'InVision', 'Zeplin', 'Usability Testing']
        },
        {
          name: 'Educational Platform',
          description: 'Learning management system with gamification elements',
          image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
          technologies: ['Figma', 'Framer', 'Adobe Creative Suite', 'A/B Testing']
        }
      ]
    },
    'game-development': {
      title: 'Game Development Projects',
      description: 'Interactive games and immersive digital experiences across multiple platforms',
      projects: [
        {
          name: '2D Platformer Game',
          description: 'Retro-style platformer with modern game mechanics and pixel art',
          image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
          technologies: ['Unity', 'C#', 'Pixel Art', 'Game Physics']
        },
        {
          name: 'VR Experience',
          description: 'Immersive virtual reality experience for education and training',
          image: 'https://images.pexels.com/photos/3761548/pexels-photo-3761548.jpeg?auto=compress&cs=tinysrgb&w=400',
          technologies: ['Unreal Engine', 'VR SDK', 'Blueprint', '3D Modeling']
        },
        {
          name: 'Mobile Puzzle Game',
          description: 'Addictive puzzle game with social features and leaderboards',
          image: 'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=400',
          technologies: ['Unity', 'C#', 'Mobile Optimization', 'Analytics']
        }
      ]
    }
  };

  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-black">{project.title}</h1>
        <p className="text-gray-700 text-lg max-w-3xl">{project.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {project.projects.map((item, index) => (
          <Card 
            key={index}
            className="overflow-hidden bg-white border-gray-200 shadow-sm"
          >
            <div className="bg-gray-100 p-4 text-center border-b border-gray-200">
              <h3 className="font-semibold text-black">{item.name}</h3>
            </div>
            <CardContent className="p-0">
              <div className="bg-gray-50 aspect-square flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-3">
                <p className="text-sm text-gray-700">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded border border-green-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}