import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'web-development',
      title: 'Web development',
      description: 'Modern web applications built with React, TypeScript, and Node.js',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'User-centered design solutions and interactive prototypes',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'game-development',
      title: 'Game Development',
      description: 'Interactive games and immersive digital experiences',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-black">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card 
            key={project.id}
            className="cursor-pointer hover:shadow-lg transition-all hover:border-green-300 overflow-hidden bg-white border-gray-200"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <div className="bg-gray-100 p-4 text-center border-b border-gray-200">
              <h3 className="font-semibold text-black">{project.title}</h3>
            </div>
            <CardContent className="p-0">
              <div className="bg-gray-50 aspect-square flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}