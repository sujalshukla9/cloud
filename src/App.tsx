import React, { useState } from 'react';
import {
  Zap,
  Shield,
  Lock,
  Upload,
  FolderOpen,
  Settings,
  Users,
  HardDrive,
  Search,
} from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleSignIn = () => {
    // Simulating sign in functionality
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setShowUploadModal(false);
  };

  const handleUpload = () => {
    if (!isSignedIn) {
      alert('Please sign in to upload files');
      return;
    }
    setShowUploadModal(true);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert('Please enter a search term');
      return;
    }
    alert(`Searching for: ${searchQuery}`);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800" role="main">
      {/* Navigation */}
      <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700" role="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-1">
                <Zap className="w-8 h-8 text-white stroke-[3]" />
                <Zap className="w-8 h-8 text-white stroke-[3]" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">Cloud</span>
            </div>
            <div className="flex items-center space-x-4">
              {!isSignedIn ? (
                <button 
                  onClick={handleSignIn}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Sign In
                </button>
              ) : (
                <button 
                  onClick={handleSignOut}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Sign Out
                </button>
              )}
              <button 
                onClick={() => alert('Get started with a new account!')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Secure Cloud Storage for Your Digital World
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Store, share, and collaborate with enterprise-grade security
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={handleUpload}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium flex items-center transition-colors duration-200"
            >
              <Upload className="w-5 h-5 mr-2" />
              Start Uploading
            </button>
            <button 
              onClick={() => setShowLearnMore(!showLearnMore)}
              className="border border-gray-500 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200"
            >
              Learn More
            </button>
          </div>
          
          {/* Learn More Content */}
          {showLearnMore && (
            <div className="mt-8 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-left">
              <h3 className="text-2xl font-bold text-white mb-4">About SS Cloud</h3>
              <p className="text-gray-300 mb-4">
                SS Cloud offers enterprise-grade cloud storage solutions with advanced security features,
                intelligent file management, and seamless team collaboration tools. Our platform is designed
                to meet the needs of both individuals and organizations.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Military-grade encryption for all your files</li>
                <li>Real-time collaboration features</li>
                <li>Automatic backup and version control</li>
                <li>24/7 technical support</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Upload Files</h3>
            <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center mb-4">
              <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-gray-300">Drag and drop files here or click to browse</p>
            </div>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={() => alert('Upload started!')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors duration-200 cursor-pointer"
               onClick={() => alert('Enterprise security features overview')}>
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Enterprise Security
            </h3>
            <p className="text-gray-400">
              End-to-end encryption and advanced security protocols to protect your data
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors duration-200 cursor-pointer"
               onClick={() => alert('Smart organization features overview')}>
            <FolderOpen className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Smart Organization
            </h3>
            <p className="text-gray-400">
              Intelligent file management with advanced search and categorization
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors duration-200 cursor-pointer"
               onClick={() => alert('Team collaboration features overview')}>
            <Users className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Team Collaboration
            </h3>
            <p className="text-gray-400">
              Seamless sharing and real-time collaboration tools for teams
            </p>
          </div>
        </div>
      </div>

      {/* Storage Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-200"
                 onClick={() => alert('Storage details')}>
              <HardDrive className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">2TB</div>
              <div className="text-gray-400">Storage Capacity</div>
            </div>
            <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-200"
                 onClick={() => alert('Security details')}>
              <Lock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">256-bit</div>
              <div className="text-gray-400">AES Encryption</div>
            </div>
            <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-200"
                 onClick={() => alert('System status')}>
              <Settings className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search your files..."
            className="w-full pl-10 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </form>
      </div>
    </div>
  );
}

export default App;