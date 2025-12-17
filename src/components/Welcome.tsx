import svgPaths from "../imports/svg-f11smfiiin";

interface WelcomeProps {
  onStart: () => void;
}

// Icono de varita mágica
function WandStars() {
  return (
    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#1C1B1F', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
      wand_stars
    </span>
  );
}

// Icono del Paso 1 (persona/usuario)
function IconStep1() {
  return (
    <span className="material-symbols-outlined text-[48px]" style={{ fontSize: '48px', color: '#61A4D7', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
      person_text
    </span>
  );
}

// Icono del Paso 2 (actividad física)
function IconStep2() {
  return (
    <span className="material-symbols-outlined text-[48px]" style={{ fontSize: '48px', color: '#61A4D7', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
      body_system
    </span>
  );
}

// Icono del Paso 3 (feedback/comentarios)
function IconStep3() {
  return (
    <span className="material-symbols-outlined text-[48px]" style={{ fontSize: '48px', color: '#61A4D7', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
      reviews
    </span>
  );
}

// Icono de información
function InfoIcon() {
  return (
    <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#61A4D7', fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24' }}>
      info
    </span>
  );
}

// Icono de check
function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_32_79)">
          <path d={svgPaths.p15eed500} stroke="#5B9BD5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} stroke="#5B9BD5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_32_79">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[112px] py-[88px] relative size-full">
      
      {/* Header Section */}
      <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[654px]">
        {/* Badge "Cuestionario y recomendador" */}
        <div className="bg-[#eff6ff] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[25px] shrink-0">
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px] shadow-[0px_3px_8px_0px_rgba(29,29,27,0.1)]" />
          <WandStars />
          <p className="font-['Inter_Tight',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1d1d1b] text-[16px] text-center text-nowrap" style={{ fontWeight: 500 }}>Cuestionario y recomendador</p>
        </div>
        
        {/* Main Title */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
          <p className="basis-0 font-['Inter_Tight',sans-serif] grow leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1b] text-[42px] text-center" style={{ fontWeight: 500 }}>
            Selector de Metodologías de Evaluación Ergonómica
          </p>
        </div>
        
        {/* Description */}
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
          <p className="basis-0 font-['Inter_Tight',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#364153] text-[16px] text-center" style={{ fontWeight: 500 }}>Esta herramienta le ayudará a seleccionar la metodología de evaluación ergonómica más adecuada para su puesto de trabajo, basándose en las condiciones laborales y los factores de riesgo identificados.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[896px]">
        
        {/* Blue Info Box */}
        <div className="bg-gradient-to-r from-[rgba(123,181,227,0.2)] relative rounded-[10px] shrink-0 to-[rgba(91,155,213,0.2)] w-full">
          <div aria-hidden="true" className="absolute border-[#5b9bd5] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start pl-[28px] pr-[24px] py-[24px] relative w-full">
              <p className="font-['Inter',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1e2939] text-[14px] w-full" style={{ fontWeight: 500 }}>Responde unas pocas preguntas sobre la tarea que quieres analizar y te diremos qué metodología oficial debes usar (ISO 11228, OCRA, REBA, RULA, PVD, etc.). Al final podrás recibir una guía PDF con recomendaciones personalizadas.</p>
            </div>
          </div>
        </div>

        {/* Three Steps */}
        <div className="h-[210px] relative shrink-0 w-full">
          {/* Step 1 */}
          <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-0 p-[24px] rounded-[10px] top-0 w-[282.656px]" style={{ backgroundImage: "linear-gradient(128.916deg, rgb(249, 250, 251) 0%, rgb(242, 247, 253) 100.08%)" }}>
            <div aria-hidden="true" className="absolute border-[#eff6ff] border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <IconStep1 />
            <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[25px] shrink-0">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px]" />
              <p className="font-['Inter_Tight',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#61a4d7] text-[24px] text-center text-nowrap" style={{ fontWeight: 400 }}>· Paso 1</p>
            </div>
            <div className="h-[48px] relative shrink-0 w-full">
              <p className="absolute font-['Inter_Tight',sans-serif] leading-[22px] left-[50%] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[212px]" style={{ fontWeight: 400 }}>Describa las condiciones de trabajo y tipo de tarea</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[306.66px] p-[24px] rounded-[10px] top-0 w-[282.672px]" style={{ backgroundImage: "linear-gradient(126.937deg, rgb(249, 250, 251) 0%, rgb(242, 247, 253) 99.925%)" }}>
            <div aria-hidden="true" className="absolute border-[#eff6ff] border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <IconStep2 />
            <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[25px] shrink-0">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px]" />
              <p className="font-['Inter_Tight',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#61a4d7] text-[24px] text-center text-nowrap" style={{ fontWeight: 400 }}>· Paso 2</p>
            </div>
            <div className="h-[48px] relative shrink-0 w-full">
              <p className="absolute font-['Inter_Tight',sans-serif] leading-[22px] left-[50%] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[224px]" style={{ fontWeight: 400 }}>Indique la carga física y áreas corporales afectadas</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="absolute content-stretch flex flex-col gap-[12px] items-center justify-center left-[613.33px] p-[24px] rounded-[10px] top-0 w-[282.656px]" style={{ backgroundImage: "linear-gradient(126.315deg, rgb(249, 250, 251) 0%, rgb(242, 247, 253) 100%)" }}>
            <div aria-hidden="true" className="absolute border-[#eff6ff] border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <IconStep3 />
            <div className="bg-[rgba(255,255,255,0.5)] content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[25px] shrink-0">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px]" />
              <p className="font-['Inter_Tight',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#61a4d7] text-[24px] text-center text-nowrap" style={{ fontWeight: 400 }}>· Paso 3</p>
            </div>
            <div className="h-[48px] relative shrink-0 w-full">
              <p className="absolute font-['Inter_Tight',sans-serif] leading-[22px] left-[50%] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[198px]" style={{ fontWeight: 400 }}>Obtenga las metodologías recomendadas</p>
            </div>
          </div>
        </div>

        {/* ¿Cómo funciona? Section */}
        <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
              {/* Heading */}
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                <InfoIcon />
                <p className="font-['Inter_Tight',sans-serif] leading-[42px] not-italic relative shrink-0 text-[#61a4d7] text-[28px] text-nowrap" style={{ fontWeight: 400 }}>¿Cómo funciona?</p>
              </div>
              
              {/* Features */}
              <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
                <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
                  <CheckIcon />
                  <p className="font-['Inter',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap" style={{ fontWeight: 400 }}>Basado en criterios técnicos y normativa reconocida</p>
                </div>
                
                <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
                  <CheckIcon />
                  <p className="font-['Inter',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap" style={{ fontWeight: 400 }}>Pensado para técnicos de PRL y ergonomía</p>
                </div>
                
                <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
                  <CheckIcon />
                  <p className="font-['Inter',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap" style={{ fontWeight: 400 }}>Resultado en menos de 2 minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NOTA Section */}
        <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <div className="size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start p-[32px] relative w-full">
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <p className="font-['Inter',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[14px] text-center text-nowrap" style={{ fontWeight: 800 }}>NOTA:</p>
              </div>
              <p className="font-['Inter',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#364153] text-[14px] w-full" style={{ fontWeight: 500 }}>Las metodologías recomendadas son orientativas. Se recomienda consultar con un especialista en ergonomía para una evaluación completa y personalizada.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Button */}
      <button 
        onClick={onStart}
        className="bg-[#5b9bd5] h-[48px] relative rounded-[6.8px] shrink-0 w-[208.578px] hover:bg-[#4a8ac4] transition-colors cursor-pointer"
      >
        <p className="absolute font-['Inter',sans-serif] leading-[20px] left-[50%] not-italic text-[14px] text-center text-nowrap text-white top-[14px] translate-x-[-50%]" style={{ fontWeight: 500 }}>Comenzar Evaluación</p>
      </button>

    </div>
  );
}