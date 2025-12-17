function Frame() {
  return (
    <div className="bg-[rgba(97,164,215,0.2)] box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] relative rounded-[30px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#61a4d7] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <p className="font-bold leading-[normal] not-italic relative shrink-0 text-[#61a4d7] text-[16px] whitespace-nowrap">PASO 1 DE 2</p>
    </div>
  );
}

function Hail() {
  return (
    <div className="relative shrink-0 size-[36px] flex items-center justify-center" data-name="hail">
      <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#61A4D7">
        <path d="M160-80v-240h120v240H160Zm200 0v-476q-50 17-65 62.5T280-400h-80q0-128 75-204t205-76q100 0 150-49.5T680-880h80q0 88-37.5 157.5T600-624v544h-80v-240h-80v240h-80Zm120-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Hail />
      <p className="leading-[54px] not-italic relative shrink-0 text-[#5b9bd5] text-[36px] whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Condiciones de la persona y del puesto</p>
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