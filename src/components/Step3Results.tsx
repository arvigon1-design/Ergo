import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { FormData, Methodology } from "../types";
import { methodologies } from "../data/methodologies";

interface Step3Props {
  formData: FormData;
  onBack: () => void;
  onRestart: () => void;
}

export function Step3Results({ formData, onBack, onRestart }: Step3Props) {
  const getRecommendedMethodologies = (): Methodology[] => {
    if (!formData.personConditions || !formData.physicalTaskLoad) return [];

    const { qualitativeEvaluation, seniorWorker, pregnancy, telework, screenWork } = formData.personConditions;
    const { manualHandling, pushPull, repetitiveMovements, forcedPostures, toolsForceVibration } = formData.physicalTaskLoad;

    let recommended: Methodology[] = [];

    // PASO 1: Condiciones de Persona (orden de prioridad)
    
    // PRIORITARIO: Embarazo
    if (pregnancy) {
      const ergomater = methodologies.find(m => m.id === "ergomater");
      if (ergomater) recommended.push(ergomater);
    }

    // Trabajador senior (+50 años)
    if (seniorWorker) {
      const ergo50 = methodologies.find(m => m.id === "ergo50");
      if (ergo50) recommended.push(ergo50);
    }

    // Evaluación inicial cualitativa
    if (qualitativeEvaluation) {
      const ergocheck = methodologies.find(m => m.id === "ergocheck");
      if (ergocheck) recommended.push(ergocheck);
    }

    // Teletrabajo
    if (telework) {
      const teletrabajoTool = methodologies.find(m => m.id === "teletrabajo");
      if (teletrabajoTool) recommended.push(teletrabajoTool);
    }

    // Trabajo con PVD (Pantallas de Visualización)
    if (screenWork) {
      const pvd = methodologies.find(m => m.id === "pvd");
      if (pvd) recommended.push(pvd);
    }

    // PASO 2: Carga Física

    // Manipulación manual de cargas
    if (manualHandling) {
      const mmc = methodologies.find(m => m.id === "mmc");
      if (mmc) recommended.push(mmc);
    }

    // Empujes y arrastres
    if (pushPull) {
      const empuje = methodologies.find(m => m.id === "empuje");
      if (empuje) recommended.push(empuje);
    }

    // Movimientos repetitivos
    if (repetitiveMovements) {
      const ocra = methodologies.find(m => m.id === "ocra");
      if (ocra) recommended.push(ocra);
    }

    // Posturas forzadas - recomendar OWAS, REBA y RULA
    if (forcedPostures) {
      const owas = methodologies.find(m => m.id === "owas");
      const reba = methodologies.find(m => m.id === "reba");
      const rula = methodologies.find(m => m.id === "rula");
      if (owas) recommended.push(owas);
      if (reba) recommended.push(reba);
      if (rula) recommended.push(rula);
    }

    // Herramientas con fuerza o vibración
    if (toolsForceVibration) {
      const fuerzaVib = methodologies.find(m => m.id === "fuerza-vibracion");
      if (fuerzaVib) recommended.push(fuerzaVib);
    }

    // Eliminar duplicados manteniendo el orden
    const uniqueRecommended = Array.from(new Map(recommended.map(item => [item.id, item])).values());

    // Si no hay recomendaciones, sugerir evaluación inicial
    if (uniqueRecommended.length === 0) {
      const ergocheck = methodologies.find(m => m.id === "ergocheck");
      if (ergocheck) uniqueRecommended.push(ergocheck);
    }

    return uniqueRecommended;
  };

  const recommendedMethodologies = getRecommendedMethodologies();

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-green-100 text-green-800 border-green-200";
    }
  };

  const getRiskText = (riskLevel: string) => {
    switch (riskLevel) {
      case "high": return "Evaluación Detallada";
      case "medium": return "Evaluación Estándar";
      default: return "Evaluación Inicial";
    }
  };

  const handleDownloadPDF = () => {
    // Simulación de generación de PDF
    alert("Funcionalidad de descarga PDF disponible en la versión completa");
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-[rgb(97,164,215)] mb-4 font-[Inter_Tight] text-[36px]">Resultados: Metodologías Recomendadas</h2>
        <p className="text-gray-600">
          Basándonos en las condiciones de trabajo identificadas, le recomendamos las siguientes 
          metodologías de evaluación ergonómica:
        </p>
      </div>

      {/* Resumen de entrada */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-[rgb(97,164,215)] mb-2 flex items-center font-[Inter_Tight] text-[28px]">
          Resumen de su evaluación
        </h3>
        <div className="space-y-3 text-sm">
          <div>
            <span className="text-gray-600 block mb-1">Condiciones de la persona:</span>
            <div className="flex flex-wrap gap-2">
              {formData.personConditions?.qualitativeEvaluation && (
                <Badge variant="secondary">Evaluación cualitativa</Badge>
              )}
              {formData.personConditions?.seniorWorker && (
                <Badge variant="secondary">Trabajador senior</Badge>
              )}
              {formData.personConditions?.pregnancy && (
                <Badge variant="secondary">Embarazo</Badge>
              )}
              {formData.personConditions?.telework && (
                <Badge variant="secondary">Teletrabajo</Badge>
              )}
              {formData.personConditions?.screenWork && (
                <Badge variant="secondary">Pantallas +2h</Badge>
              )}
            </div>
          </div>
          
          <div>
            <span className="text-gray-600 block mb-1">Carga física de la tarea:</span>
            <div className="flex flex-wrap gap-2">
              {formData.physicalTaskLoad?.manualHandling && (
                <Badge variant="secondary">Cargas ≥3 kg</Badge>
              )}
              {formData.physicalTaskLoad?.pushPull && (
                <Badge variant="secondary">Empuje/arrastre</Badge>
              )}
              {formData.physicalTaskLoad?.repetitiveMovements && (
                <Badge variant="secondary">Mov. repetitivos</Badge>
              )}
              {formData.physicalTaskLoad?.forcedPostures && (
                <Badge variant="secondary">Posturas forzadas</Badge>
              )}
              {formData.physicalTaskLoad?.toolsForceVibration && (
                <Badge variant="secondary">Herramientas fuerza/vibración</Badge>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Metodologías recomendadas */}
      <div className="space-y-4">
        <h3 className="text-gray-900 flex items-center">
          ✓ {recommendedMethodologies.length} {recommendedMethodologies.length === 1 ? 'Metodología Recomendada' : 'Metodologías Recomendadas'}
        </h3>

        {recommendedMethodologies.map((method, index) => (
          <Card key={method.id} className="p-6 hover:shadow-lg transition-shadow flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="text-ergo-blue border-ergo-blue">
                    #{index + 1}
                  </Badge>
                  <h4 className="text-gray-900 font-['Inter_Tight'] text-2xl">{method.name}</h4>
                </div>
                <Badge className={getRiskColor(method.riskLevel)}>
                  {getRiskText(method.riskLevel)}
                </Badge>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{method.description}</p>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>Áreas:</span>
              <div className="flex flex-wrap gap-1">
                {method.bodyArea.map((area) => (
                  <Badge key={area} variant="secondary" className="text-xs">
                    {area === "handArms" && "Brazos"}
                    {area === "back" && "Espalda"}
                    {area === "lowerLimbs" && "Piernas"}
                    {area === "wholebody" && "Cuerpo completo"}
                  </Badge>
                ))}
              </div>
            </div>

            {method.link && (
              <Button 
                variant="outline"
                className="border-ergo-blue text-ergo-blue hover:bg-ergo-blue hover:text-white w-full md:w-fit md:px-4 md:self-start"
                onClick={() => window.open(method.link, "_blank")}
              >
                Más información →
              </Button>
            )}
          </Card>
        ))}
      </div>

      {/* Recomendaciones adicionales */}
      <Card className="p-6 bg-yellow-50 border-yellow-200">
        <h3 className="text-gray-900 mb-3 text-[28px] font-[Inter_Tight]">Recomendaciones</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Consulte con un especialista en ergonomía para una evaluación detallada del puesto de trabajo.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Las metodologías pueden combinarse para obtener una evaluación más completa.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Visite <a href="https://www.ergoibv.com" target="_blank" rel="noopener noreferrer" className="text-ergo-blue underline">www.ergoibv.com</a> para acceder a herramientas de evaluación profesionales.</span>
          </li>
        </ul>
      </Card>

      {/* Acciones */}
      <div className="flex flex-wrap gap-3 pt-6 border-t justify-between">
        <Button 
          onClick={onBack}
          variant="outline"
          className="border-ergo-gray text-ergo-gray-dark hover:bg-gray-50"
        >
          ← Modificar Respuestas
        </Button>
        
        <div className="flex gap-3">
          <Button 
            onClick={handleDownloadPDF}
            variant="outline"
            className="border-ergo-blue text-ergo-blue hover:bg-ergo-blue hover:text-white"
          >
            ⬇ Descargar PDF
          </Button>
          <Button 
            onClick={() => window.location.href = 'https://www.ergoibv.com/es/contacta/'}
            variant="outline"
            className="border-ergo-blue text-ergo-blue hover:bg-ergo-blue hover:text-white"
          >
            💬 Contacto
          </Button>
          <Button 
            onClick={() => window.location.href = 'https://www.ergoibv.com/es/'}
            variant="outline"
            className="border-ergo-blue text-ergo-blue hover:bg-ergo-blue hover:text-white"
          >
            ℹ️ +info sobre Ergo/IBV
          </Button>
          <Button 
            onClick={onRestart}
            className="bg-ergo-blue hover:bg-ergo-blue-dark text-white"
          >
            Nueva Evaluación
          </Button>
        </div>
      </div>
    </div>
  );
}