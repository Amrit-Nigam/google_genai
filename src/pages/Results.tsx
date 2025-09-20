import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NBCard } from '../components/NBCard';
import { NBButton } from '../components/NBButton';
import { FlowChart } from '../components/FlowChart';
import { SummaryPanel } from '../components/SummaryPanel';
import { useUserStore } from '../lib/stores/userStore';
import { toast } from 'sonner';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export const Results = () => {
  const navigate = useNavigate();
  const { profile, results, clearData } = useUserStore();

  useEffect(() => {
    if (!profile || !results) {
      navigate('/details');
      return;
    }
    
    // Show success toast
    toast.success('Career path generated! (demo)');
  }, [profile, results, navigate]);

  const handleStartOver = () => {
    clearData();
    navigate('/details');
  };

  if (!profile || !results) {
    return null;
  }

  return (
    <div className="min-h-screen light-rays-bg">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
              <h1 className="text-2xl font-bold text-foreground">
                Your Career Path
              </h1>
            </div>
            <div className="flex space-x-2">
              <NBButton
                variant="secondary"
                onClick={handleStartOver}
                className="flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Start Over</span>
              </NBButton>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Summary Panel */}
            <div className="lg:col-span-1">
              <SummaryPanel 
                recommendation={results} 
                userName={profile.name} 
              />
            </div>

            {/* Flow Chart */}
            <div className="lg:col-span-2">
              <NBCard>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Your Career Journey
                </h3>
                <p className="text-muted-foreground mb-6">
                  Explore your AI-generated career path. Click and drag to navigate, 
                  zoom in/out to see details, and discover the connections between 
                  different opportunities.
                </p>
                <FlowChart 
                  nodes={results.careerPath.nodes}
                  edges={results.careerPath.edges}
                  className="w-full"
                />
              </NBCard>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8">
            <NBCard>
              <h4 className="text-lg font-bold text-foreground mb-4">
                Legend
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm text-foreground">Courses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-sm text-foreground">Internships</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-foreground">Jobs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-sm text-foreground">Companies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-500 rounded"></div>
                  <span className="text-sm text-foreground">Skills</span>
                </div>
              </div>
            </NBCard>
          </div>
        </div>
      </div>
    </div>
  );
};
