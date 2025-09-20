import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NBCard } from '../components/NBCard';
import { NBButton } from '../components/NBButton';
import { FlowChart } from '../components/FlowChart';
import { SummaryPanel } from '../components/SummaryPanel';
import { BGPattern } from '../components/ui/bg-pattern';
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
    <div className="min-h-screen light-rays-bg relative">
      {/* Header */}
      <header className="border-b border-border/20 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
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
      <div className="py-8 px-4 relative">
        <BGPattern variant="dots" mask="fade-edges" size={36} fill="rgba(139, 92, 246, 0.04)" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid xl:grid-cols-3 gap-8">
            {/* Summary Panel */}
            <div className="xl:col-span-1 order-2 xl:order-1">
              <SummaryPanel 
                recommendation={results} 
                userName={profile.name} 
              />
            </div>

            {/* Flow Chart */}
            <div className="xl:col-span-2 order-1 xl:order-2">
              <NBCard className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="p-6 pb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Your Career Journey
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Explore your AI-generated career path. Click and drag to navigate, 
                    zoom in/out to see details, and discover the connections between 
                    different opportunities.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <FlowChart 
                    nodes={results.careerPath.nodes}
                    edges={results.careerPath.edges}
                    className="w-full"
                  />
                </div>
              </NBCard>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8">
            <NBCard className="border-border/50 bg-card/50 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-foreground mb-6">
                Career Path Legend
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="flex items-center space-x-3 group">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm group-hover:scale-110 transition-transform"></div>
                  <span className="text-sm font-medium text-foreground">Courses</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-5 h-5 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-sm group-hover:scale-110 transition-transform"></div>
                  <span className="text-sm font-medium text-foreground">Internships</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-5 h-5 bg-gradient-to-br from-accent to-green-600 rounded-lg shadow-sm group-hover:scale-110 transition-transform"></div>
                  <span className="text-sm font-medium text-foreground">Jobs</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-5 h-5 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-sm group-hover:scale-110 transition-transform"></div>
                  <span className="text-sm font-medium text-foreground">Companies</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <div className="w-5 h-5 bg-gradient-to-br from-slate-500 to-slate-600 rounded-lg shadow-sm group-hover:scale-110 transition-transform"></div>
                  <span className="text-sm font-medium text-foreground">Skills</span>
                </div>
              </div>
            </NBCard>
          </div>
        </div>
      </div>
    </div>
  );
};
