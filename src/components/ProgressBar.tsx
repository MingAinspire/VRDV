import React from 'react';
import { Check } from 'lucide-react';

interface ProgressBarProps {
  steps: Array<{ title: string }>;
  currentStep: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
  return (
    <div className="relative">
      <div className="absolute top-4 w-full h-0.5 bg-gray-200">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>

      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center
                  transition-colors duration-300
                  ${isCompleted ? 'bg-blue-600' : isCurrent ? 'bg-blue-600' : 'bg-gray-200'}
                  ${isCompleted || isCurrent ? 'text-white' : 'text-gray-500'}
                `}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span className="mt-2 text-xs text-gray-500">{step.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};