import React, { useState } from 'react';
import { Shield, ChevronRight, Download } from 'lucide-react';
import { FormStep } from './components/FormStep';
import { Button } from './components/Button';
import { ProgressBar } from './components/ProgressBar';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const steps = [
    { title: 'Personal Information', fields: ['name', 'address', 'phone'] },
    { title: 'Respondent Details', fields: ['respondentName', 'relationship'] },
    { title: 'Incident Description', fields: ['incidentDate', 'description'] },
    { title: 'Relief Requested', fields: ['reliefType', 'duration'] },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(current => current + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(current => current - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">FreeDV</h1>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <ProgressBar steps={steps} currentStep={currentStep} />
          
          <div className="mt-8">
            <FormStep
              step={steps[currentStep]}
              formData={formData}
              onChange={(field, value) => 
                setFormData(prev => ({ ...prev, [field]: value }))
              }
            />
          </div>

          <div className="mt-8 flex justify-between">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              variant="secondary"
            >
              Back
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button onClick={() => console.log('Generate PDF')}>
                <Download className="w-4 h-4 mr-2" />
                Download Form
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;