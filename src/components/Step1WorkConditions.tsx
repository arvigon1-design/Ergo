import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { WorkConditions } from "../types";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Step1Props {
  onNext: (data: WorkConditions) => void;
  onBack: () => void;
  initialData?: WorkConditions | null;
}

export function Step1WorkConditions({ onNext, onBack, initialData }: Step1Props) {
  const [formData, setFormData] = useState<WorkConditions>(
    initialData || {
      workType: "",
      posture: "",
      repetitive: "",
      load: "",
      duration: ""
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const isFormValid = 
    formData.workType && 
    formData.posture && 
    formData.repetitive && 
    formData.load && 
    formData.duration;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-ergo-blue mb-6">Paso 2 de 2: Condiciones de Trabajo</h2>
        <p className="text-gray-600 mb-8">
          Por favor, seleccione las características que mejor describan el puesto de trabajo a evaluar.
        </p>
      </div>

      {/* Tipo de trabajo */}
      <div className="space-y-3">
        <Label className="text-gray-900">¿Qué tipo de trabajo se realiza?</Label>
        <RadioGroup 
          value={formData.workType} 
          onValueChange={(value) => setFormData({ ...formData, workType: value })}
        >
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="static" id="static" />
            <Label htmlFor="static" className="cursor-pointer flex-1">
              Trabajo estático (ej: oficina, ordenador, vigilancia)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="dynamic" id="dynamic" />
            <Label htmlFor="dynamic" className="cursor-pointer flex-1">
              Trabajo dinámico (ej: caminar, desplazamientos frecuentes)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="repetitive" id="repetitive" />
            <Label htmlFor="repetitive" className="cursor-pointer flex-1">
              Tareas repetitivas (ej: cadena de montaje, empaquetado)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="manual" id="manual" />
            <Label htmlFor="manual" className="cursor-pointer flex-1">
              Manipulación manual de cargas
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Postura */}
      <div className="space-y-3">
        <Label className="text-gray-900">¿Cuál es la postura predominante?</Label>
        <RadioGroup 
          value={formData.posture} 
          onValueChange={(value) => setFormData({ ...formData, posture: value })}
        >
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="seated" id="seated" />
            <Label htmlFor="seated" className="cursor-pointer flex-1">
              Sentado la mayor parte del tiempo
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="standing" id="standing" />
            <Label htmlFor="standing" className="cursor-pointer flex-1">
              De pie la mayor parte del tiempo
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="mixed" id="mixed" />
            <Label htmlFor="mixed" className="cursor-pointer flex-1">
              Mixta (alternancia de posturas)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="forced" id="forced" />
            <Label htmlFor="forced" className="cursor-pointer flex-1">
              Posturas forzadas (agachado, brazos elevados, girado)
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Movimientos repetitivos */}
      <div className="space-y-3">
        <Label className="text-gray-900">¿Se realizan movimientos repetitivos?</Label>
        <RadioGroup 
          value={formData.repetitive} 
          onValueChange={(value) => setFormData({ ...formData, repetitive: value })}
        >
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="no" id="rep-no" />
            <Label htmlFor="rep-no" className="cursor-pointer flex-1">
              No, las tareas son variadas
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="occasional" id="rep-occasional" />
            <Label htmlFor="rep-occasional" className="cursor-pointer flex-1">
              Ocasionalmente (menos de 2 horas al día)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="frequent" id="rep-frequent" />
            <Label htmlFor="rep-frequent" className="cursor-pointer flex-1">
              Frecuentemente (2-4 horas al día)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="constant" id="rep-constant" />
            <Label htmlFor="rep-constant" className="cursor-pointer flex-1">
              Constantemente (más de 4 horas al día)
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Manejo de cargas */}
      <div className="space-y-3">
        <Label className="text-gray-900">¿Se manejan cargas o se aplica fuerza?</Label>
        <RadioGroup 
          value={formData.load} 
          onValueChange={(value) => setFormData({ ...formData, load: value })}
        >
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="none" id="load-none" />
            <Label htmlFor="load-none" className="cursor-pointer flex-1">
              No se manejan cargas significativas
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="light" id="load-light" />
            <Label htmlFor="load-light" className="cursor-pointer flex-1">
              Cargas ligeras (menos de 3 kg)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="medium" id="load-medium" />
            <Label htmlFor="load-medium" className="cursor-pointer flex-1">
              Cargas medias (3-15 kg)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="heavy" id="load-heavy" />
            <Label htmlFor="load-heavy" className="cursor-pointer flex-1">
              Cargas pesadas (más de 15 kg)
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Duración */}
      <div className="space-y-3">
        <Label className="text-gray-900">¿Cuánto tiempo se dedica a estas tareas?</Label>
        <RadioGroup 
          value={formData.duration} 
          onValueChange={(value) => setFormData({ ...formData, duration: value })}
        >
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="short" id="duration-short" />
            <Label htmlFor="duration-short" className="cursor-pointer flex-1">
              Menos de 2 horas al día
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="medium" id="duration-medium" />
            <Label htmlFor="duration-medium" className="cursor-pointer flex-1">
              Entre 2 y 4 horas al día
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="long" id="duration-long" />
            <Label htmlFor="duration-long" className="cursor-pointer flex-1">
              Más de 4 horas al día
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="full" id="duration-full" />
            <Label htmlFor="duration-full" className="cursor-pointer flex-1">
              Toda la jornada laboral
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex justify-between pt-6 border-t">
        <Button 
          type="button" 
          onClick={onBack}
          className="bg-ergo-blue hover:bg-ergo-blue-dark text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
        </Button>
        <Button 
          type="submit" 
          disabled={!isFormValid}
          className="bg-ergo-blue hover:bg-ergo-blue-dark text-white"
        >
          Siguiente <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}