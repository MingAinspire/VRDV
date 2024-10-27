import React from 'react';

interface FormStepProps {
  step: {
    title: string;
    fields: string[];
  };
  formData: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export const FormStep: React.FC<FormStepProps> = ({ step, formData, onChange }) => {
  const getFieldLabel = (field: string) => {
    return field
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">{step.title}</h2>
      
      {step.fields.map(field => (
        <div key={field}>
          <label 
            htmlFor={field}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {getFieldLabel(field)}
          </label>
          
          {field === 'description' ? (
            <textarea
              id={field}
              value={formData[field] || ''}
              onChange={e => onChange(field, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            />
          ) : (
            <input
              type={field.includes('date') ? 'date' : 'text'}
              id={field}
              value={formData[field] || ''}
              onChange={e => onChange(field, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        </div>
      ))}
    </div>
  );
};