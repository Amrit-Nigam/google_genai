import React from 'react';
import { NBCard } from './NBCard';
import { CareerRecommendation } from '../lib/types';

interface SummaryPanelProps {
  recommendation: CareerRecommendation;
  userName: string;
}

export const SummaryPanel: React.FC<SummaryPanelProps> = ({ 
  recommendation, 
  userName 
}) => {
  return (
    <div className="space-y-6">
      <NBCard variant="accent">
        <h2 className="text-2xl font-bold text-white mb-4">
          Hello, {userName}! 👋
        </h2>
        <p className="text-gray-200 leading-relaxed">
          {recommendation.summary}
        </p>
      </NBCard>

      <NBCard>
        <h3 className="text-xl font-bold text-white mb-4">
          Your Career Path: {recommendation.primaryCareer}
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-white mb-2">Related Roles:</h4>
            <div className="flex flex-wrap gap-2">
              {recommendation.relatedRoles.map((role, index) => (
                <span
                  key={index}
                  className="bg-primary/20 text-white px-3 py-1 rounded-full text-sm font-medium border border-primary/30"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </NBCard>

      <NBCard>
        <h3 className="text-xl font-bold text-white mb-6">
          Alternative Career Options
        </h3>
        <div className="space-y-4">
          {recommendation.alternatives.map((alt) => (
            <div
              key={alt.id}
              className="group bg-gradient-to-r from-card to-card/50 border border-border/50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-white text-base group-hover:text-primary transition-colors">
                  {alt.title}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">{alt.matchScore}%</div>
                    <div className="text-xs text-gray-300">match</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary/30 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                {alt.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-gray-200">
                  <span className="text-primary">💰</span>
                  <span className="font-medium">{alt.salary}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-primary">📈</span>
                  <span className={`font-medium px-2 py-1 rounded-full text-xs ${
                    alt.growth === 'high' 
                      ? 'bg-green-500/20 text-green-400' 
                      : alt.growth === 'medium'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {alt.growth} growth
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </NBCard>
    </div>
  );
};
