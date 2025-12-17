import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { PhysicalTaskLoad } from "../types";
import Heading2Step2 from "../imports/Heading2-12-182";

interface Step1Props {
  onNext: (data: PhysicalTaskLoad) => void;
  onBack: () => void;
  initialData?: PhysicalTaskLoad | null;
}

export function Step1PhysicalTaskLoad({ onNext, onBack, initialData }: Step1Props) {
  const [formData, setFormData] = useState<PhysicalTaskLoad>(
    initialData || {
      manualHandling: false,
      pushPull: false,
      repetitiveMovements: false,
      forcedPostures: false,
      posturalEvaluationType: '',
      toolsForceVibration: false
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <div className="mb-4">
          <Heading2Step2 />
        </div>
        <p className="text-gray-700 mb-2">
          Describe las exigencias físicas y características de la tarea a evaluar.
        </p>
        <p className="text-gray-600 italic mb-8">
          Estas preguntas determinarán qué metodologías específicas (ISO 11229, OCRA, REBA, etc.) se recomendarán.
        </p>
      </div>

      <div className="space-y-4">
        {/* Cargas de 3 kg o más */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-ergo-blue transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="manualHandling"
              checked={formData.manualHandling}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, manualHandling: checked as boolean })
              }
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="manualHandling" className="cursor-pointer text-gray-900">
                ¿Se levantan, bajan o transportan cargas de 3 kg o más?
              </Label>
              <p className="text-gray-600 mt-2">
                La manipulación manual de cargas a partir de 3 kg puede suponer riesgo ergonómico según ISO 11228.
              </p>
            </div>
          </div>
        </div>

        {/* Empujes o arrastres */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-ergo-blue transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="pushPull"
              checked={formData.pushPull}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, pushPull: checked as boolean })
              }
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="pushPull" className="cursor-pointer text-gray-900">
                ¿Se realizan empujes o arrastres de forma relevante?
              </Label>
              <p className="text-gray-600 mt-2">
                El empuje y arrastre de cargas sobre ruedas (carros, contenedores) puede generar esfuerzo físico significativo.
              </p>
            </div>
          </div>
        </div>

        {/* Movimientos repetitivos */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-ergo-blue transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="repetitiveMovements"
              checked={formData.repetitiveMovements}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, repetitiveMovements: checked as boolean })
              }
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="repetitiveMovements" className="cursor-pointer text-gray-900">
                ¿La tarea exige movimientos repetitivos de manos, muñecas o brazos?
              </Label>
              <p className="text-gray-600 mt-2">
                Los movimientos repetitivos de extremidad superior pueden causar trastornos musculoesqueléticos según ISO 11228-3.
              </p>
            </div>
          </div>
        </div>

        {/* Posturas forzadas */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-ergo-blue transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="forcedPostures"
              checked={formData.forcedPostures}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, forcedPostures: checked as boolean })
              }
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="forcedPostures" className="cursor-pointer text-gray-900">
                ¿Se adoptan posturas forzadas o estáticas (tronco flexionado, brazos elevados, etc.)?
              </Label>
              <p className="text-gray-600 mt-2">
                Las posturas forzadas prolongadas son un factor de riesgo ergonómico importante.
              </p>
              
              {/* Sub-selector que aparece cuando está marcado */}
              {formData.forcedPostures && (
                <div className="mt-4 pl-4 border-l-4 border-ergo-blue bg-white rounded-r-lg p-4 space-y-3">
                  <p className="font-medium text-gray-900 mb-3">
                    ¿Qué tipo de evaluación postural necesitas?
                  </p>
                  
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="posturalEvaluationType"
                      value="sampling"
                      checked={formData.posturalEvaluationType === 'sampling'}
                      onChange={(e) => setFormData({ ...formData, posturalEvaluationType: e.target.value })}
                      className="mt-1 w-4 h-4 text-ergo-blue focus:ring-ergo-blue"
                    />
                    <div className="flex-1">
                      <span className="text-gray-900 group-hover:text-ergo-blue transition-colors">
                        Quiero realizar un muestreo de posturas a lo largo de la jornada.
                      </span>
                    </div>
                  </label>
                  
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="posturalEvaluationType"
                      value="wholebody"
                      checked={formData.posturalEvaluationType === 'wholebody'}
                      onChange={(e) => setFormData({ ...formData, posturalEvaluationType: e.target.value })}
                      className="mt-1 w-4 h-4 text-ergo-blue focus:ring-ergo-blue"
                    />
                    <div className="flex-1">
                      <span className="text-gray-900 group-hover:text-ergo-blue transition-colors">
                        Quiero analizar posturas específicas considerando la totalidad del cuerpo.
                      </span>
                    </div>
                  </label>
                  
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="posturalEvaluationType"
                      value="upperlimb"
                      checked={formData.posturalEvaluationType === 'upperlimb'}
                      onChange={(e) => setFormData({ ...formData, posturalEvaluationType: e.target.value })}
                      className="mt-1 w-4 h-4 text-ergo-blue focus:ring-ergo-blue"
                    />
                    <div className="flex-1">
                      <span className="text-gray-900 group-hover:text-ergo-blue transition-colors">
                        Quiero analizar posturas específicas dando prioridad a los miembros superiores.
                      </span>
                    </div>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Herramientas con fuerza o vibración */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-ergo-blue transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="toolsForceVibration"
              checked={formData.toolsForceVibration}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, toolsForceVibration: checked as boolean })
              }
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="toolsForceVibration" className="cursor-pointer text-gray-900">
                ¿Se usan herramientas que requieren fuerza elevada o vibran?
              </Label>
              <p className="text-gray-600 mt-2">
                Las herramientas que requieren esfuerzo importante o transmiten vibraciones pueden generar fatiga y lesiones.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6 border-t">
        <Button 
          type="button"
          onClick={onBack}
          variant="outline"
          className="border-ergo-gray text-ergo-gray-dark hover:bg-gray-50"
        >
          ← Atrás
        </Button>
        <Button 
          type="submit" 
          className="bg-green-600 hover:bg-green-700 text-white px-6"
        >
          Ver resultados →
        </Button>
      </div>
    </form>
  );
}