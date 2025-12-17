import svgPaths from "./svg-77zh9z3w9b";

function WandStars() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="wand_stars">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="wand_stars">
          <mask height="16" id="mask0_32_86" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_32_86)">
            <path d={svgPaths.p21bfec70} fill="var(--fill-0, #1C1B1F)" id="wand_stars_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Heading() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[25px] size-full" data-name="Heading 4">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[25px] shadow-[0px_3px_8px_0px_rgba(29,29,27,0.1)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <WandStars />
          <p className="font-['Inter_Tight:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1d1d1b] text-[16px] text-center text-nowrap">Cuestionario y recomendador</p>
        </div>
      </div>
    </div>
  );
}