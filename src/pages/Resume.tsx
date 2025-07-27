import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    // Simulate download delay
    setTimeout(() => {
      // In a real application, you would download the actual PDF file
      const link = document.createElement('a');
      link.href = '/sample-resume.pdf'; // You would replace this with your actual resume PDF
      link.download = 'Full_Name_Resume.pdf';
      link.click();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-black">My Resume</h1>
        
        <Button 
          onClick={handleDownload}
          disabled={isLoading}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          {isLoading ? 'Downloading...' : 'Download'}
        </Button>
      </div>

      {/* PDF Viewer Area */}
      <div className="bg-white border-2 border-gray-200 rounded-lg p-8 min-h-[600px] flex items-center justify-center shadow-sm">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-600 text-lg">PDF Resume Viewer</p>
          <p className="text-gray-500 text-sm">
            In a production environment, this would display your actual resume PDF.<br/>
            You can integrate libraries like react-pdf or pdf.js for full PDF viewing functionality.
          </p>
        </div>
      </div>
    </div>
  );
}