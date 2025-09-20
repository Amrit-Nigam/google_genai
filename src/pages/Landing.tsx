import React from 'react';
import { Link } from 'react-router-dom';
import { NBCard } from '../components/NBCard';
import { NBButton } from '../components/NBButton';
import { ArrowRight, Target, Map, Zap } from 'lucide-react';

export const Landing = () => {
  return (
    <div className="min-h-screen light-rays-bg">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-accent-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">
                CareerFlow
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-foreground font-medium hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/details" className="text-foreground font-medium hover:text-accent transition-colors">
                Start
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Map your future,
            <br />
            <span className="text-accent">one skill at a time.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get personalized career advice powered by AI. Visualize your career path, 
            discover new opportunities, and bridge skill gaps with our interactive flowchart.
          </p>
          <Link to="/details">
            <NBButton size="lg" className="text-lg px-8 py-4">
              Start Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </NBButton>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Why Choose CareerFlow?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <NBCard className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Personalized Advice
              </h3>
              <p className="text-muted-foreground">
                Get tailored career recommendations based on your skills, interests, 
                and goals. Our AI analyzes your profile to suggest the best path forward.
              </p>
            </NBCard>

            <NBCard className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Visual Career Flowchart
              </h3>
              <p className="text-muted-foreground">
                See your career journey as an interactive flowchart. Explore courses, 
                internships, jobs, and companies in a visual, easy-to-understand format.
              </p>
            </NBCard>

            <NBCard className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Skill-Gap Mapping
              </h3>
              <p className="text-muted-foreground">
                Identify exactly what skills you need to develop for your dream job. 
                Get specific recommendations for courses, certifications, and experiences.
              </p>
            </NBCard>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-accent-foreground">1</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Enter Your Details
              </h3>
              <p className="text-muted-foreground">
                Tell us about your skills, education, interests, and career goals. 
                The more details you provide, the better our recommendations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                See Your Career Path
              </h3>
              <p className="text-muted-foreground">
                Get a personalized flowchart showing your recommended career journey, 
                including courses, internships, and job opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Explore Opportunities
              </h3>
              <p className="text-muted-foreground">
                Discover alternative career paths, skill requirements, and real-world 
                opportunities that match your profile and interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/80 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="text-foreground font-bold">© 2025 CareerFlow (demo)</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
