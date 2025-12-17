import svgPaths from "./svg-r9t8f2785c";

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

function Heading() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Info />
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[42px] not-italic relative shrink-0 text-[#61a4d7] text-[28px] text-nowrap whitespace-pre">¿Cómo funciona?</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_17_680)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_17_680">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">Basado en criterios técnicos y normativa reconocida</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_17_680)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_17_680">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">Pensado para técnicos de PRL y ergonomía</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_17_680)" id="Icon">
          <path d={svgPaths.p15eed500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_17_680">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
      <Icon2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#364153] text-[16px] text-nowrap whitespace-pre">Resultado en menos de 2 minutos</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

export default function Container4() {
  return (
    <div className="bg-blue-50 relative rounded-[10px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <Heading />
          <Container3 />
        </div>
      </div>
    </div>
  );
}