import FitnessCenterIcon from "./FitnessCenter";

function Frame() {
  return (
    <div className="bg-[rgba(97,164,215,0.2)] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#61a4d7] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="font-bold leading-[normal] not-italic relative shrink-0 text-[#61a4d7] text-[16px] whitespace-nowrap">PASO 2 DE 2</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <FitnessCenterIcon />
      <p className="leading-[54px] not-italic relative shrink-0 text-[#61a4d7] text-[36px] whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Carga física y tipo de tarea</p>
    </div>
  );
}

export default function Heading() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full" data-name="Heading 2">
      <Frame />
      <Frame1 />
    </div>
  );
}