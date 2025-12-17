import { useEffect } from "react";

interface Step2TMEIntroductionProps {
  onNext: () => void;
  onBack: () => void;
}

// Declarar el tipo para HubSpot
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region: string;
          target: string;
          onFormSubmit?: (form: any) => void;
        }) => void;
      };
    };
  }
}

export function Step2TMEIntroduction({ onNext, onBack }: Step2TMEIntroductionProps) {
  useEffect(() => {
    // Cargar el script de HubSpot si no está cargado
    if (!window.hbspt) {
      const script = document.createElement('script');
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        createForm();
      };
    } else {
      createForm();
    }
  }, []);

  const createForm = () => {
    if (window.hbspt) {
      setTimeout(() => {
        window.hbspt!.forms.create({
          portalId: "26581627",
          formId: "147c48fe-d67f-4f51-8b2d-68b99cafab35",
          region: "eu1",
          target: "#hubspot-form-container",
          onFormSubmit: () => {
            setTimeout(() => {
              onNext();
            }, 1000);
          }
        });
      }, 100);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header con badge y título */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="bg-[#eff6ff] flex gap-1 items-center px-4 py-2 rounded-[25px] border border-white shadow-[0px_3px_8px_0px_rgba(29,29,27,0.1)]">
          <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#1C1B1F', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
            verified
          </span>
          <p className="font-['Inter_Tight',sans-serif] font-medium leading-[16px] text-[#1d1d1b] text-[16px] whitespace-nowrap">
            La importancia de las metodologías científicamente validadas
          </p>
        </div>
        <h2 className="font-['Inter_Tight',sans-serif] text-[#1d1d1b] text-[42px] leading-[48px] text-center">
          Evaluación de Riesgos Ergonómicos
        </h2>
      </div>

      {/* Párrafo introductorio */}
      <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[26px] mb-6">
        Los <span className="font-semibold">trastornos musculoesqueléticos (TME)</span> representan el problema de salud laboral más común en Europa, 
        afectando a millones de trabajadores y generando importantes costes económicos y sociales.
      </p>

      {/* Caja "El desafío de la evaluación ergonómica" */}
      <div className="bg-[#eff6ff] border border-[#bedbff] rounded-[10px] p-8 mb-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center mb-1">
              <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#61A4D7', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
                swords
              </span>
              <h3 className="font-['Inter_Tight',sans-serif] text-[#61a4d7] text-[28px]">
                El desafío de la evaluación ergonómica
              </h3>
            </div>
            <p className="font-['Inter',sans-serif] text-[#364153] text-[14px] leading-[20px]">
              La prevención de TME requiere evaluar múltiples factores de riesgo:
            </p>
          </div>

          {/* Lista de factores con iconos de check */}
          <div className="flex flex-wrap gap-3">
            <div className="bg-[rgba(255,255,255,0.7)] border border-white flex gap-3 items-center px-3 py-2 rounded-[20px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#5B9BD5" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[24px] whitespace-nowrap">
                Manipulación manual de cargas
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.7)] border border-white flex gap-3 items-center px-3 py-2 rounded-[20px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#5B9BD5" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[24px] whitespace-nowrap">
                Posturas forzadas y mantenidas
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.7)] border border-white flex gap-3 items-center px-3 py-2 rounded-[20px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#5B9BD5" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[24px] whitespace-nowrap">
                Movimientos repetitivos
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.7)] border border-white flex gap-3 items-center px-3 py-2 rounded-[20px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#5B9BD5" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[24px] whitespace-nowrap">
                Aplicación de fuerzas
              </p>
            </div>
            <div className="bg-[rgba(255,255,255,0.7)] border border-white flex gap-3 items-center px-3 py-2 rounded-[20px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#5B9BD5" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[24px] whitespace-nowrap">
                Vibraciones y condiciones ambientales
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Párrafo sobre metodologías */}
      <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[26px] mb-6">
        Para realizar evaluaciones rigurosas y sistemáticas, es fundamental utilizar{" "}
        <span className="font-semibold">metodologías científicamente validadas y reconocidas técnicamente</span> que permitan:
      </p>

      {/* Tarjetas de beneficios */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: Objetivar el riesgo */}
        <div className="rounded-[10px] border-[3px] border-[#eff6ff] p-6 flex flex-col items-center gap-3" style={{ background: 'linear-gradient(139.43deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%)' }}>
          <div className="flex items-center justify-center p-8 rounded-full" style={{ background: 'radial-gradient(circle, rgba(91,155,213,0.7) 24%, rgba(173,205,234,0.35) 62%, rgba(255,255,255,0) 100%)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'white', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
              emergency_home
            </span>
          </div>
          <h4 className="font-['Inter_Tight',sans-serif] text-[#101828] text-[24px] leading-[24px] text-center">
            Objetivar el riesgo
          </h4>
          <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px] leading-[20px] text-center">
            Cuantificar niveles de exposición con criterios estandarizados (ISO, EN, etc.)
          </p>
        </div>

        {/* Card 2: Priorizar acciones */}
        <div className="rounded-[10px] border-[3px] border-[#eff6ff] p-6 flex flex-col items-center gap-3" style={{ background: 'linear-gradient(139.199deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%)' }}>
          <div className="flex items-center justify-center p-8 rounded-full" style={{ background: 'radial-gradient(circle, rgba(91,155,213,0.7) 24%, rgba(173,205,234,0.35) 62%, rgba(255,255,255,0) 100%)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'white', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
              zone_person_urgent
            </span>
          </div>
          <h4 className="font-['Inter_Tight',sans-serif] text-[#101828] text-[24px] leading-[24px] text-center">
            Priorizar acciones
          </h4>
          <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px] leading-[20px] text-center">
            Identificar qué puestos requieren intervención urgente según el nivel de riesgo
          </p>
        </div>

        {/* Card 3: Cumplir normativa */}
        <div className="rounded-[10px] border-[3px] border-[#eff6ff] p-6 flex flex-col items-center gap-3" style={{ background: 'linear-gradient(139.199deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%)' }}>
          <div className="flex items-center justify-center p-8 rounded-full" style={{ background: 'radial-gradient(circle, rgba(91,155,213,0.7) 24%, rgba(173,205,234,0.35) 62%, rgba(255,255,255,0) 100%)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'white', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
              fact_check
            </span>
          </div>
          <h4 className="font-['Inter_Tight',sans-serif] text-[#101828] text-[24px] leading-[24px] text-center">
            Cumplir normativa
          </h4>
          <p className="font-['Inter',sans-serif] text-[#4a5565] text-[14px] leading-[20px] text-center">
            Demostrar cumplimiento legal ante inspecciones y auditorías
          </p>
        </div>
      </div>

      {/* Bloque azul "¿Quieres aplicar..." */}
      <div className="rounded-[10px] p-8 mb-8" style={{ background: 'linear-gradient(to bottom, #5b9bd5, #4682b4)' }}>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-start">
            <div className="bg-[rgba(255,255,255,0.2)] flex items-center justify-center p-3 rounded-full">
              <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'white', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
                automation
              </span>
            </div>
            <h3 className="font-['Inter_Tight',sans-serif] text-white text-[28px] leading-[normal] flex-1">
              ¿Quieres aplicar estas metodologías de forma guiada y generar informes automáticos?
            </h3>
          </div>
          <div className="bg-[rgba(255,255,255,0.1)] rounded-[12px] p-3">
            <p className="font-['Inter',sans-serif] text-[#eff6ff] text-[16px] leading-[24px]">
              <span className="font-semibold">Ergo/IBV</span> integra estas metodologías (ISO 11228, OCRA, REBA, RULA, etc.) en una única herramienta de software. 
              Te guía paso a paso en la recogida de datos y calcula automáticamente los índices de riesgo, reduciendo errores y acelerando el proceso.
            </p>
          </div>
          <p className="font-['Inter',sans-serif] text-[#eff6ff] text-[16px] leading-[24px]">
            Genera informes profesionales listos para auditoría y planificación preventiva, facilitando la toma de decisiones técnicas fundamentadas.
          </p>
        </div>
      </div>

      {/* Sección "¿Qué metodologías son apropiadas..." */}
      <div className="bg-[#eff6ff] border border-[#bedbff] rounded-[10px] p-6 mb-6">
        <div className="flex flex-col gap-3">
          <h3 className="font-['Inter_Tight',sans-serif] text-[#5b9bd5] text-[28px] leading-[normal]">
            ¿Qué metodologías son apropiadas para tu evaluación?
          </h3>
          <p className="font-['Inter',sans-serif] text-[#364153] text-[16px] leading-[24px]">
            Basándonos en las características del puesto de trabajo que has descrito, hemos identificado las metodologías más adecuadas para tu caso.
          </p>
          <p className="font-['Inter',sans-serif] font-medium text-[#364153] text-[16px] leading-[24px]">
            Para acceder a los resultados personalizados, por favor completa el siguiente formulario:
          </p>
        </div>
      </div>

      {/* Caja blanca con icono de persona y formulario */}
      <div className="bg-white rounded-[10px] border border-[#5b9bd5] p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined" style={{ fontSize: '32px', color: '#5B9BD5', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
            account_circle
          </span>
          <h3 className="font-['Inter_Tight',sans-serif] text-[#5b9bd5] text-[28px]">
            Accede a tu recomendación personalizada
          </h3>
        </div>
        <div id="hubspot-form-container"></div>
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between pt-6 border-t">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#5b9bd5] text-[#5b9bd5] rounded-md hover:bg-blue-50 transition-colors"
        >
          ← Atrás
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#5b9bd5] text-white rounded-md hover:bg-[#4a8bc2] transition-colors"
        >
          Acceder →
        </button>
      </div>
    </div>
  );
}