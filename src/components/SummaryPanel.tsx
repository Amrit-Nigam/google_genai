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
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Hello, {userName}! 👋
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {recommendation.summary}
        </p>
      </NBCard>

      <NBCard>
        <h3 className="text-xl font-bold text-foreground mb-4">
          Your Career Path: {recommendation.primaryCareer}
        </h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Related Roles:</h4>
            <div className="flex flex-wrap gap-2">
              {recommendation.relatedRoles.map((role, index) => (
                <span
                  key={index}
                  className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </NBCard>

      <NBCard>
        <h3 className="text-xl font-bold text-foreground mb-4">
          Alternative Career Options
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recommendation.alternatives.map((alt) => (
            <div
              key={alt.id}
              className="bg-card border border-border rounded-lg p-4 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-foreground text-sm">{alt.title}</h4>
                <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-bold">
                  {alt.matchScore}% match
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{alt.description}</p>
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">
                  💰 {alt.salary}
                </div>
                <div className="text-xs text-muted-foreground">
                  📈 {alt.growth} growth
                </div>
              </div>
            </div>
          ))}
        </div>
      </NBCard>
    </div>
  );
};
