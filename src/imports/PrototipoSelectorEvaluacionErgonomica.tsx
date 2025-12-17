import svgPaths from "./svg-3b7lvx1b5q";
import imgImageLogoIbvInstitutoDeBiomecanicaDeValencia from "figma:asset/746fd544d01074bf19880b77406c2a0d9504b480.png";
import imgImageLogoErgoIbv from "figma:asset/8724d0bd6c29b247ac4b11e29df549b26b5a4354.png";

function ImageLogoIbvInstitutoDeBiomecanicaDeValencia() {
  return (
    <div className="h-[42px] relative shrink-0 w-[153px]" data-name="Image (Logo IBV - Instituto de Biomecánica de Valencia)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogoIbvInstitutoDeBiomecanicaDeValencia} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] w-[153px]" />
    </div>
  );
}

function ImageLogoErgoIbv() {
  return (
    <div className="h-[42px] relative shrink-0 w-[161px]" data-name="Image (Logo Ergo/IBV)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogoErgoIbv} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[42px] w-[161px]" />
    </div>
  );
}

function Header() {
  return (
    <div className="box-border content-stretch flex gap-[48px] h-[64px] items-center justify-center px-[32px] py-0 relative rounded-[32px] shrink-0" data-name="Header">
      <ImageLogoIbvInstitutoDeBiomecanicaDeValencia />
      <ImageLogoErgoIbv />
    </div>
  );
}

function WandStars() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="wand_stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="wand_stars">
          <mask height="16" id="mask0_23_88" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_23_88)">
            <path d={svgPaths.p21bfec70} fill="var(--fill-0, #1C1B1F)" id="wand_stars_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="bg-blue-50 box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[25px] shrink-0" data-name="Heading 4">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px] shadow-[0px_3px_8px_0px_rgba(29,29,27,0.1)]" />
      <WandStars />
      <p className="font-['Inter_Tight:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1d1d1b] text-[16px] text-center text-nowrap whitespace-pre">Cuestionario y recomendador</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Heading 1">
      <p className="basis-0 font-['Inter_Tight:Regular',sans-serif] grow leading-[48px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d1d1b] text-[0px] text-[42px] text-center">
        <span>{`Selector de Metodologías de `}</span>
        <span className="font-['Inter_Tight:Medium',sans-serif]">Evaluación Ergonómica</span>
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#364153] text-[16px] text-center">Esta herramienta le ayudará a seleccionar la metodología de evaluación ergonómica más adecuada para su puesto de trabajo, basándose en las condiciones laborales y los factores de riesgo identificados.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[654px]">
      <Heading2 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-gradient-to-r from-[rgba(123,181,227,0.2)] relative rounded-[10px] shrink-0 to-[rgba(91,155,213,0.2)] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#5b9bd5] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[28px] pr-[24px] py-[24px] relative w-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#1e2939] text-[14px] w-full">Responde unas pocas preguntas sobre la tarea que quieres analizar y te diremos qué metodología oficial debes usar (ISO 11228, OCRA, REBA, RULA, PVD, etc.). Al final podrás recibir una guía PDF con recomendaciones personalizadas.</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p179cd100} fill="var(--fill-0, #61A4D7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[25px] shrink-0" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px]" />
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#61a4d7] text-[24px] text-center text-nowrap whitespace-pre">· Paso 1</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[117.5px] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[212px]">Describa las condiciones de trabajo y tipo de tarea</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-center justify-center left-0 p-[24px] rounded-[10px] top-0 w-[282.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-blue-50 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon />
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p13bbfd00} fill="var(--fill-0, #61A4D7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[25px] shrink-0" data-name="Heading 4">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px]" />
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#61a4d7] text-[24px] text-center text-nowrap whitespace-pre">· Paso 2</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[117.63px] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[224px]">Indique la carga física y áreas corporales afectadas</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-center justify-center left-[306.66px] p-[24px] rounded-[10px] top-0 w-[282.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-blue-50 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon1 />
      <Heading3 />
      <Paragraph2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p4ea4300} fill="var(--fill-0, #61A4D7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[25px] shrink-0" data-name="Heading 4">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px]" />
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#61a4d7] text-[24px] text-center text-nowrap whitespace-pre">· Paso 3</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[117.45px] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[198px]">Obtenga las metodologías recomendadas</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-center justify-center left-[613.33px] p-[24px] rounded-[10px] top-0 w-[282.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[3px] border-blue-50 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon2 />
      <Heading4 />
      <Paragraph3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[210px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="info">
          <mask height="24" id="mask0_17_684" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_17_684)">
            <path d={svgPaths.p3a2cd080} fill="var(--fill-0, #61A4D7)" id="info_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Info />
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[42px] not-italic relative shrink-0 text-[#61a4d7] text-[28px] text-nowrap whitespace-pre">¿Cómo funciona?</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_98)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_98">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">Basado en criterios técnicos y normativa reconocida</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_98)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_98">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">Pensado para técnicos de PRL y ergonomía</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_23_98)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_23_98">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">Resultado en menos de 2 minutos</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-blue-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
          <Heading5 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function BoldText() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Bold Text">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[14px] not-italic relative shrink-0 text-[#1d1d1b] text-[14px] text-center text-nowrap whitespace-pre">NOTA:</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-blue-50 relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-blue-100 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[32px] relative w-full">
          <BoldText />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#364153] text-[14px] w-full">Las metodologías recomendadas son orientativas. Se recomienda consultar con un especialista en ergonomía para una evaluación completa y personalizada.</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[896px]">
      <Container />
      <Container4 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5b9bd5] h-[48px] relative rounded-[6.8px] shrink-0 w-[208.578px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[104.5px] not-italic text-[14px] text-center text-nowrap text-white top-[14px] translate-x-[-50%] whitespace-pre">Comenzar Evaluación</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[48px] items-center justify-center px-[112px] py-[88px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[1120px]" data-name="Main Content">
      <Frame />
      <Frame1 />
      <Button />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[691.64px] top-[2px] w-[135.094px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5b9bd5] text-[16px] text-center text-nowrap whitespace-pre">www.ergoibv.com</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[1120px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[492.25px] not-italic text-[#4a5565] text-[16px] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">© 2025 Instituto de Biomecánica de Valencia (IBV) -</p>
      <Link />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-50 relative shrink-0 w-full" data-name="App">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[41px] items-center px-[16px] py-[32px] relative w-full">
          <Header />
          <MainContent />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

export default function PrototipoSelectorEvaluacionErgonomica() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Prototipo Selector Evaluación Ergonómica">
      <App />
    </div>
  );
}