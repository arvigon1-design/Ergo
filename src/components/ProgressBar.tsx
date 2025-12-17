interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;
  
  const steps = [
    { id: 1, label: "Persona" },
    { id: 2, label: "Tarea" },
    { id: 3, label: "Formulario" },
    { id: 4, label: "Resultados" }
  ];
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-700">Progreso</span>
        <span className="font-medium text-ergo-blue">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-ergo-blue h-3 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-gray-500">
        {steps.map((step) => (
          <span 
            key={step.id}
            className={step.id === currentStep ? "font-semibold" : ""}
          >
            {step.label}
          </span>
        ))}
      </div>
    </div>
  );
}