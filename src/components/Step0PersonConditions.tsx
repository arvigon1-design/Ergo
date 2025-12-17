import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { PersonConditions } from "../types";
import Heading2 from "../imports/Heading2";

interface Step0Props {
  onNext: (data: PersonConditions) => void;
  initialData?: PersonConditions | null;
}

export function Step0PersonConditions({ onNext, initialData }: Step0Props) {
  const [formData, setFormData] = useState<PersonConditions>(
    initialData || {
      qualitativeEvaluation: false,
      seniorWorker: false,
      pregnancy: false,
      telework: false,
      screenWork: false
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
          <Heading2 />
        </div>
        <p className="text-gray-700 mb-2">
          Selecciona todas las opciones que correspondan.
        </p>
        <p className="text-gray-600 italic mb-8">
          Estas preguntas ayudarán a identificar las metodologías oficiales más apropiadas para tu evaluación ergonómica.
        </p>
      </div>

      <div className="space-y-4">
        {/* Evaluación cualitativa */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-ergo-blue transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="qualitativeEvaluation"
              checked={formData.qualitativeEvaluation}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, qualitativeEvaluation: checked as boolean })
              }
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="qualitativeEvaluation" className="cursor-pointer text-gray-900">
                ¿Quieres realizar una evaluación inicial cualitativa del puesto?
              </Label>
              <p className="text-gray-600 mt-2">
                Una evaluación inicial permite identificar rápidamente los principales factores de riesgo antes de aplicar métodos específicos más detallados.
              </p>
            </div>
          </div>
        </div>

        {/* Trabajador senior */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-ergo-blue transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="seniorWorker"
              checked={formData.seniorWorker}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, seniorWorker: checked as boolean })
              }
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="seniorWorker" className="cursor-pointer text-gray-900">
                ¿La persona que realiza la tarea tiene 50 años o más?
              </Label>
              <p className="text-gray-600 mt-2">
                Los trabajadores senior requieren una evaluación que considere las características específicas del envejecimiento activo.
              </p>
            </div>
          </div>
        </div>

        {/* Embarazo */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-ergo-blue transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="pregnancy"
              checked={formData.pregnancy}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, pregnancy: checked as boolean })
              }
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="pregnancy" className="cursor-pointer text-gray-900">
                ¿La tarea se realiza por una trabajadora embarazada o estás evaluando su adecuación durante el embarazo?
              </Label>
              <p className="text-gray-600 mt-2">
                El embarazo requiere una evaluación específica y prioritaria según la normativa de prevención de riesgos laborales.
              </p>
            </div>
          </div>
        </div>

        {/* Teletrabajo */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-ergo-blue transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="telework"
              checked={formData.telework}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, telework: checked as boolean })
              }
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="telework" className="cursor-pointer text-gray-900">
                ¿La tarea se realiza total o parcialmente en teletrabajo?
              </Label>
              <p className="text-gray-600 mt-2">
                El teletrabajo presenta características ergonómicas específicas que requieren evaluación adaptada.
              </p>
            </div>
          </div>
        </div>

        {/* Pantallas */}
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-ergo-blue transition-colors">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="screenWork"
              checked={formData.screenWork}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, screenWork: checked as boolean })
              }
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="screenWork" className="cursor-pointer text-gray-900">
                ¿Se utilizan pantallas (ordenador, portátil, tablet) más de 2 horas al día?
              </Label>
              <p className="text-gray-600 mt-2">
                El trabajo continuado con pantallas de visualización requiere evaluación ergonómica específica según normativa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-6 border-t">
        <Button 
          type="submit" 
          className="bg-ergo-blue hover:bg-ergo-blue-dark text-white"
        >
          Siguiente →
        </Button>
      </div>
    </form>
  );
}