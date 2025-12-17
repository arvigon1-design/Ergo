import { useState, useEffect } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ProgressBar } from "./components/ProgressBar";
import { Welcome } from "./components/Welcome";
import { Step0PersonConditions } from "./components/Step0PersonConditions";
import { Step1PhysicalTaskLoad } from "./components/Step1PhysicalTaskLoad";
import { Step2TMEIntroduction } from "./components/Step2TMEIntroduction";
import { Step3Results } from "./components/Step3Results";
import { FormData, PersonConditions, PhysicalTaskLoad } from "./types";
import logoIBV from "figma:asset/746fd544d01074bf19880b77406c2a0d9504b480.png";
import logoErgoIBV from "figma:asset/8724d0bd6c29b247ac4b11e29df549b26b5a4354.png";

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    personConditions: null,
    physicalTaskLoad: null,
    workConditions: null,
    physicalLoad: null
  });

  // Scroll al inicio cuando cambia el paso
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleStep0Complete = (data: PersonConditions) => {
    setFormData({ ...formData, personConditions: data });
    setCurrentStep(2);
  };

  const handleStep1Complete = (data: PhysicalTaskLoad) => {
    setFormData({ ...formData, physicalTaskLoad: data });
    setCurrentStep(3);
  };

  const handleStep2Complete = () => {
    setCurrentStep(4);
  };

  const handleBackToStep0 = () => {
    setCurrentStep(1);
  };

  const handleBackToStep1 = () => {
    setCurrentStep(2);
  };

  const handleBackToStep2 = () => {
    setCurrentStep(3);
  };

  const handleRestart = () => {
    setFormData({
      personConditions: null,
      physicalTaskLoad: null,
      workConditions: null,
      physicalLoad: null
    });
    setCurrentStep(0);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Header con logo */}
        <header className="mb-8 text-center">
          <div className="mb-6 flex items-center justify-center">
            <div className="flex items-center justify-center gap-3 md:gap-12">
              <img 
                src={logoIBV}
                alt="Logo IBV - Instituto de Biomecánica de Valencia" 
                className="h-10 md:h-[42px] w-auto object-contain"
              />
              <img 
                src={logoErgoIBV}
                alt="Logo Ergo/IBV" 
                className="h-10 md:h-[42px] w-auto object-contain"
              />
            </div>
          </div>
        </header>
        
        {/* Barra de progreso */}
        {currentStep > 0 && (
          <ProgressBar currentStep={currentStep} totalSteps={4} />
        )}
        
        {/* Contenido dinámico */}
        <main className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {currentStep === 0 && <Welcome onStart={handleStart} />}
          
          {currentStep === 1 && (
            <Step0PersonConditions 
              onNext={handleStep0Complete}
              initialData={formData.personConditions}
            />
          )}
          
          {currentStep === 2 && (
            <Step1PhysicalTaskLoad 
              onNext={handleStep1Complete}
              onBack={handleBackToStep0}
              initialData={formData.physicalTaskLoad}
            />
          )}
          
          {currentStep === 3 && (
            <Step2TMEIntroduction 
              onNext={handleStep2Complete}
              onBack={handleBackToStep1}
            />
          )}
          
          {currentStep === 4 && (
            <Step3Results 
              formData={formData}
              onBack={handleBackToStep2}
              onRestart={handleRestart}
            />
          )}
        </main>
        
        {/* Footer */}
        <footer className="mt-8 text-center text-gray-600">
          <p>&copy; 2025 Instituto de Biomecánica de Valencia (IBV) - <a href="https://www.ergoibv.com/es/" target="_blank" rel="noopener noreferrer" className="text-ergo-blue hover:underline">www.ergoibv.com</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;