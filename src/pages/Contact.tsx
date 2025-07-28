import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email ID',
      value: 'abhinavrenji@gmail.com',
      href: 'mailto:abhinavrenji@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone No.',
      value: '+91 9747809006',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/abhinav-renjith-56b42628b/',
      href: 'https://www.linkedin.com/in/abhinav-renjith-56b42628b/'
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold text-black">Contact Me</h1>
      
      <div className="space-y-8 max-w-lg">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="p-2 bg-green-600 rounded-lg">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-black text-lg">{item.label}</h3>
              <a 
                href={item.href}
                className="text-gray-700 hover:text-green-600 transition-colors block"
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              >
                {item.value}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-lg max-w-2xl">
        <h3 className="text-xl font-semibold text-black mb-3">Let's Connect!</h3>
        <p className="text-gray-700 leading-relaxed">
          Feel free to contact me whenever. I'm always open to solving problems, trying out new things, and building things from scratch.
        </p>
      </div>
    </div>
  );
}