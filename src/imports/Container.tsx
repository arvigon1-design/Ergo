import svgPaths from "./svg-xyxna4x5bk";

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

function Heading() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[8px] relative rounded-[25px] shrink-0" data-name="Heading 3">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px]" />
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#61a4d7] text-[24px] text-center text-nowrap whitespace-pre">· Paso 1</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[117.5px] not-italic text-[#4a5565] text-[16px] text-center top-[-1px] translate-x-[-50%] w-[212px]">Describa las condiciones de trabajo y tipo de tarea</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative rounded-[10px] size-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[24px] relative size-full">
          <Icon />
          <Heading />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}