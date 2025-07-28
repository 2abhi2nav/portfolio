import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf'; // Import Document and Page from react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css'; // Import styles for annotations
import 'react-pdf/dist/Page/TextLayer.css'; // Import styles for text layer
import sampleResume from '@/assets/Abhinav_Renjith_Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Resume() {
  const [isLoading, setIsLoading] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfFile = sampleResume; // Path to your PDF file in the public directory

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1); // Reset to the first page when a new document loads
  };

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const handleDownload = async () => {
    setIsLoading(true);
    // Simulate download delay
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = pdfFile; // Use the same PDF file for download
      link.download = 'Abhinav_Renjith_Resume.pdf';
      link.click();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold text-black">My Resume</h1>
        
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
      <div className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-sm overflow-auto" style={{ maxHeight: '800px' }}>
        <div className="text-center mb-4">
          {numPages && (
            <p className="text-gray-600">
              Page {pageNumber} of {numPages}
            </p>
          )}
          <div className="flex justify-center space-x-2 mt-2">
            <Button
              onClick={previousPage}
              disabled={pageNumber <= 1}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Previous
            </Button>
            <Button
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Next
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
            className="border" // Add a border for visual separation
          >
            <Page pageNumber={pageNumber} renderTextLayer={true} renderAnnotationLayer={true} />
          </Document>
        </div>
        {!numPages && ( // Show placeholder if PDF hasn't loaded yet
          <div className="min-h-[600px] flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg">Loading PDF Resume...</p>
              <p className="text-gray-500 text-sm">
                If the PDF does not load, ensure 'sample-resume.pdf' is in your public directory.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}