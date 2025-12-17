import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { PhysicalLoad } from "../types";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Step2Props {
  onNext: (data: PhysicalLoad) => void;
  onBack: () => void;
  initialData?: PhysicalLoad | null;
}

export function Step2PhysicalLoad({ onNext, onBack, initialData }: Step2Props) {
  const [formData, setFormData] = useState<PhysicalLoad>(
    initialData || {
      forceLevel: "",
      frequency: "",
      handArms: false,
      back: false,
      lowerLimbs: false,
      wholebody: false
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const hasBodyArea = formData.handArms || formData.back || formData.lowerLimbs || formData.wholebody;
  const isFormValid = formData.forceLevel && formData.frequency && hasBodyArea;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-ergo-blue mb-6">Paso 2: Carga Física y Áreas Afectadas</h2>
        <p className="text-gray-600 mb-8">
          Especifique el nivel de esfuerzo físico y las partes del cuerpo más expuestas.
        </p>
      </div>

      {/* Nivel de fuerza */}
      <div className="space-y-3">
        <Label className="text-gray-900">¿Qué nivel de fuerza se requiere?</Label>
        <RadioGroup 
          value={formData.forceLevel} 
          onValueChange={(value) => setFormData({ ...formData, forceLevel: value })}
        >
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="minimal" id="force-minimal" />
            <Label htmlFor="force-minimal" className="cursor-pointer flex-1">
              Mínima (trabajo de oficina, sin esfuerzo significativo)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="light" id="force-light" />
            <Label htmlFor="force-light" className="cursor-pointer flex-1">
              Ligera (manipulación de objetos pequeños, esfuerzo leve)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="moderate" id="force-moderate" />
            <Label htmlFor="force-moderate" className="cursor-pointer flex-1">
              Moderada (levantamiento ocasional, fuerza media)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="high" id="force-high" />
            <Label htmlFor="force-high" className="cursor-pointer flex-1">
              Alta (levantamiento frecuente, fuerza considerable)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="very-high" id="force-very-high" />
            <Label htmlFor="force-very-high" className="cursor-pointer flex-1">
              Muy alta (cargas pesadas, esfuerzo máximo)
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Frecuencia */}
      <div className="space-y-3">
        <Label className="text-gray-900">¿Con qué frecuencia se realiza el esfuerzo?</Label>
        <RadioGroup 
          value={formData.frequency} 
          onValueChange={(value) => setFormData({ ...formData, frequency: value })}
        >
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="sporadic" id="freq-sporadic" />
            <Label htmlFor="freq-sporadic" className="cursor-pointer flex-1">
              Esporádica (menos de 1 vez por hora)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="occasional" id="freq-occasional" />
            <Label htmlFor="freq-occasional" className="cursor-pointer flex-1">
              Ocasional (1-5 veces por hora)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="frequent" id="freq-frequent" />
            <Label htmlFor="freq-frequent" className="cursor-pointer flex-1">
              Frecuente (5-15 veces por hora)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="very-frequent" id="freq-very-frequent" />
            <Label htmlFor="freq-very-frequent" className="cursor-pointer flex-1">
              Muy frecuente (más de 15 veces por hora)
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
            <RadioGroupItem value="continuous" id="freq-continuous" />
            <Label htmlFor="freq-continuous" className="cursor-pointer flex-1">
              Continua (sin pausas significativas)
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Áreas corporales */}
      <div className="space-y-4">
        <Label className="text-gray-900">¿Qué partes del cuerpo están más afectadas? (seleccione todas las que apliquen)</Label>
        <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-3 p-3 bg-white rounded hover:bg-gray-50">
            <Checkbox 
              id="handArms"
              checked={formData.handArms}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, handArms: checked as boolean })
              }
            />
            <Label htmlFor="handArms" className="cursor-pointer flex-1">
              Manos, muñecas y brazos
            </Label>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-white rounded hover:bg-gray-50">
            <Checkbox 
              id="back"
              checked={formData.back}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, back: checked as boolean })
              }
            />
            <Label htmlFor="back" className="cursor-pointer flex-1">
              Espalda (cuello, zona lumbar)
            </Label>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-white rounded hover:bg-gray-50">
            <Checkbox 
              id="lowerLimbs"
              checked={formData.lowerLimbs}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, lowerLimbs: checked as boolean })
              }
            />
            <Label htmlFor="lowerLimbs" className="cursor-pointer flex-1">
              Extremidades inferiores (piernas, rodillas, pies)
            </Label>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-white rounded hover:bg-gray-50">
            <Checkbox 
              id="wholebody"
              checked={formData.wholebody}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, wholebody: checked as boolean })
              }
            />
            <Label htmlFor="wholebody" className="cursor-pointer flex-1">
              Todo el cuerpo
            </Label>
          </div>
        </div>
        {!hasBodyArea && (
          <p className="text-red-600 text-sm">Por favor, seleccione al menos un área corporal</p>
        )}
      </div>

      <div className="flex justify-between pt-6 border-t">
        <Button 
          type="button"
          onClick={onBack}
          variant="outline"
          className="border-ergo-gray text-ergo-gray-dark hover:bg-gray-50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
        </Button>
        <Button 
          type="submit" 
          disabled={!isFormValid}
          className="bg-ergo-blue hover:bg-ergo-blue-dark text-white"
        >
          Ver Resultados <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
