import svgPaths from "./svg-x0ynkxvu1h";
import imgImageLogoIbvInstitutoDeBiomecanicaDeValencia from "figma:asset/746fd544d01074bf19880b77406c2a0d9504b480.png";
import imgImageLogoErgoIbv from "figma:asset/8724d0bd6c29b247ac4b11e29df549b26b5a4354.png";

function ImageLogoIbvInstitutoDeBiomecanicaDeValencia() {
  return (
    <div className="h-[42px] relative shrink-0 w-[152.328px]" data-name="Image (Logo IBV - Instituto de Biomecánica de Valencia)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogoIbvInstitutoDeBiomecanicaDeValencia} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function ImageLogoErgoIbv() {
  return (
    <div className="h-[42px] relative shrink-0 w-[161px]" data-name="Image (Logo Ergo/IBV)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogoErgoIbv} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[48px] h-[42px] items-center justify-center relative shrink-0 w-[361.328px]" data-name="Header">
      <ImageLogoIbvInstitutoDeBiomecanicaDeValencia />
      <ImageLogoErgoIbv />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[69.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px]">Progreso</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[34.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#5b9bd5] text-[16px] top-[-1px] w-[35px]">75%</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container1() {
  return <div className="bg-[#5b9bd5] h-[12px] rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="bg-[#e5e7eb] h-[12px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[280px] py-0 relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[61.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-[-1px]">Persona</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[42.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-[-1px]">Tarea</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[83.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-[-1px]">Formulario</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[83.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#6a7282] text-[16px] text-nowrap top-[-1px]">Resultados</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-[1120px]" data-name="ProgressBar">
      <Container />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Verified() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="verified">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="verified">
          <mask height="16" id="mask0_38_159" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_38_159)">
            <path d={svgPaths.p2c087200} fill="var(--fill-0, #1C1B1F)" id="verified_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="bg-[#eff6ff] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative rounded-[25px] shrink-0" data-name="Heading 4">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px] shadow-[0px_3px_8px_0px_rgba(29,29,27,0.1)]" />
      <Verified />
      <p className="font-['Inter_Tight:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1d1d1b] text-[16px] text-center text-nowrap">La importancia de las metodologías científicamente validadas</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[234px] py-0 relative w-full">
          <p className="font-['Inter_Tight:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#1d1d1b] text-[42px] text-center text-nowrap">Evaluación de Riesgos Ergonómicos</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Heading />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] w-[896px]">
        <span>{`Los `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">trastornos musculoesqueléticos (TME)</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold"> </span>representan el problema de salud laboral más común en Europa, afectando a millones de trabajadores y generando importantes costes económicos y sociales.
      </p>
    </div>
  );
}

function Swords() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="swords">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="swords">
          <mask height="24" id="mask0_38_155" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_38_155)">
            <path d={svgPaths.peed0a00} fill="var(--fill-0, #61A4D7)" id="swords_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Swords />
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#61a4d7] text-[28px] text-nowrap">El desafío de la evaluación ergonómica</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0">La prevención de TME requiere evaluar múltiples factores de riesgo:</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_32_79)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap">Manipulación manual de cargas</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_32_79)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap">Posturas forzadas y mantenidas</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_32_79)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap">Movimientos repetitivos</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_32_79)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap">Aplicación de fuerzas</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_32_79)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #5B9BD5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function Container9() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap">Vibraciones y condiciones ambientales</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
          <Frame />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] w-[896px]">
        <span>{`Para realizar evaluaciones rigurosas y sistemáticas, es fundamental utilizar `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">metodologías científicamente validadas y reconocidas técnicamente</span>
        <span>{` que permiten:`}</span>
      </p>
    </div>
  );
}

function EmergencyHome() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="emergency_home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="emergency_home">
          <mask height="24" id="mask0_39_150" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_39_150)">
            <path d={svgPaths.pffc7c00} fill="var(--fill-0, white)" id="emergency_home_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[32px] relative rounded-[3.35544e+07px] shrink-0" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 88 88\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(2.6942e-16 4.4 -4.4 2.6942e-16 44 44)\\\'><stop stop-color=\\\'rgba(91,155,213,0.7)\\\' offset=\\\'0.24038\\\'/><stop stop-color=\\\'rgba(173,205,234,0.35)\\\' offset=\\\'0.62019\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <EmergencyHome />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter_Tight:Regular',sans-serif] leading-[24px] left-[117.36px] not-italic text-[#101828] text-[24px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Objetivar el riesgo</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[117.77px] not-italic text-[#4a5565] text-[14px] text-center top-0 translate-x-[-50%] w-[224px]">Cuantificar niveles de exposición con criterios estandarizados (ISO, EN, etc.)</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow h-[242.016px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(139.43deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#eff6ff] border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative size-full">
          <Container12 />
          <Heading3 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function ZonePersonUrgent() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="zone_person_urgent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="zone_person_urgent">
          <mask height="24" id="mask0_39_146" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_39_146)">
            <path d={svgPaths.p3d98e280} fill="var(--fill-0, white)" id="zone_person_urgent_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[32px] relative rounded-[3.35544e+07px] shrink-0" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 88 88\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(2.6942e-16 4.4 -4.4 2.6942e-16 44 44)\\\'><stop stop-color=\\\'rgba(91,155,213,0.7)\\\' offset=\\\'0.24038\\\'/><stop stop-color=\\\'rgba(173,205,234,0.35)\\\' offset=\\\'0.62019\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <ZonePersonUrgent />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter_Tight:Regular',sans-serif] leading-[24px] left-[117.45px] not-italic text-[#101828] text-[24px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Priorizar acciones</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[117.39px] not-italic text-[#4a5565] text-[14px] text-center top-0 translate-x-[-50%] w-[231px]">Identificar qué puestos requieren intervención urgente según el nivel de riesgo</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(139.199deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#eff6ff] border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative w-full">
          <Container14 />
          <Heading4 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function FactCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fact_check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fact_check">
          <mask height="24" id="mask0_39_142" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_39_142)">
            <path d={svgPaths.p381bac80} fill="var(--fill-0, white)" id="fact_check_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[32px] relative rounded-[3.35544e+07px] shrink-0" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 88 88\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(2.6942e-16 4.4 -4.4 2.6942e-16 44 44)\\\'><stop stop-color=\\\'rgba(91,155,213,0.7)\\\' offset=\\\'0.24038\\\'/><stop stop-color=\\\'rgba(173,205,234,0.35)\\\' offset=\\\'0.62019\\\'/><stop stop-color=\\\'rgba(255,255,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <FactCheck />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter_Tight:Regular',sans-serif] leading-[24px] left-[117px] not-italic text-[#101828] text-[24px] text-center text-nowrap top-[-1px] translate-x-[-50%]">Cumplir normativa</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[117.7px] not-italic text-[#4a5565] text-[14px] text-center top-0 translate-x-[-50%] w-[231px]">Demostrar cumplimiento legal ante inspecciones y auditorías</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow h-[244px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(139.199deg, rgb(239, 246, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#eff6ff] border-[3px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center p-[24px] relative size-full">
          <Container16 />
          <Heading5 />
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container15 />
      <Container17 />
    </div>
  );
}

function Automation() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="automation">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="automation">
          <mask height="24" id="mask0_38_151" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_38_151)">
            <path d={svgPaths.p9c968f0} fill="var(--fill-0, white)" id="automation_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <Automation />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[72px] relative shrink-0 w-[768px]" data-name="Heading 3">
      <p className="absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-0 not-italic text-[28px] text-white top-[-1px] w-[759px]">¿Quieres aplicar estas metodologías de forma guiada y generar informes automáticos?</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative">
        <Container19 />
        <Heading6 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[12px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#eff6ff] text-[16px]">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold">Ergo/IBV</span>
            <span>{` integra estas metodologías (ISO 11228, OCRA, REBA, RULA, etc.) en una única herramienta de software. Te guía paso a paso en la recogida de datos y calcula automáticamente los índices de riesgo, reduciendo errores y acelerando el proceso.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#eff6ff] text-[16px] top-[-1.33px] w-[832px]">Genera informes profesionales listos para auditoría y planificación preventiva, facilitando la toma de decisiones técnicas fundamentadas.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame1 />
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-gradient-to-b from-[#5b9bd5] relative rounded-[10px] shrink-0 to-[#4682b4] w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter_Tight:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#5b9bd5] text-[28px] text-nowrap top-[-1px]">¿Qué metodologías son apropiadas para tu evaluación?</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1px] w-[846px]">Basándonos en las características del puesto de trabajo que has descrito, hemos identificado las metodologías más adecuadas para tu caso.</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-1px]">Para acceder a los resultados personalizados, por favor completa el siguiente formulario:</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#eff6ff] h-[186px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading7 />
          <Paragraph8 />
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p39fed580} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#5b9bd5] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b9bd5] text-[28px] text-nowrap">Accede a tu recomendación personalizada</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[12px] h-[42px] items-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Heading8 />
    </div>
  );
}

function Iframe() {
  return <div className="h-[418px] shrink-0 w-full" data-name="Iframe" />;
}

function Container25() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#5b9bd5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
          <Container24 />
          <Iframe />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container11 />
      <Paragraph2 />
      <Container18 />
      <Container21 />
      <Container22 />
      <Container25 />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[52px] relative rounded-[6.8px] shrink-0 w-[111.219px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#5b9bd5] border-solid inset-0 pointer-events-none rounded-[6.8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[26px] py-[14px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5b9bd5] text-[16px] text-center text-nowrap">← Atrás</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[49px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

function Step2TmeIntroduction() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Step2TMEIntroduction">
      <Container4 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[112px] py-[88px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[1120px]" data-name="Main Content">
      <Step2TmeIntroduction />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap" data-name="links">
      <p className="relative shrink-0 text-[#4a5565]">© 2025 Instituto de Biomecánica de Valencia (IBV) -</p>
      <p className="relative shrink-0 text-[#5b9bd5]">www.ergoibv.com</p>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="App">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[42px] items-center px-[48px] py-[32px] relative w-full">
          <Header />
          <ProgressBar />
          <MainContent />
          <Links />
        </div>
      </div>
    </div>
  );
}

export default function PrototipoSelectorEvaluacionErgonomica() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center justify-center relative size-full" data-name="Prototipo Selector Evaluación Ergonómica">
      <App />
    </div>
  );
}