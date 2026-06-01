import Button from "@/components/_ui/button";
import Image from "next/image";



export default function CtaSection() {
  return (
    <section id="solution" className="relative z-0">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="  relative overflow-hidden rounded-[24px] sm:rounded-[32px] border sm:border-2 border-white/10 [background:linear-gradient(65deg,#635BFF_25.5%,#ACA8FF_78.44%)]   lg:max-w-[1074px] mx-auto">

            <div className="solution-bg-glow hidden lg:block absolute right-[-69px] bottom-[-47px] w-[703px] h-[658px] mix-blend-overlay pointer-events-none select-none">
              
              <Image
                src="/dotted-bg.svg"
                alt=""
                fill
                sizes="703px"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-6 sm:gap-8 px-5 py-8 sm:px-[50px] sm:py-[60px] lg:py-[90px] ">
              <div className="flex flex-col gap-[10px]">
                <p className="text-white font-bold uppercase tracking-[0.36px] text-[13px] sm:text-base">The solution</p>
                <h2 className="text-white max-w-[8.875em]">
                Ready to take control of your operations?
                </h2>
                <p className="text-white text-[18px] leading-[30px] max-w-[29.75em]">
                Join with security companies already running on DFNDR. Start your free trial today  no credit card required.
                </p>
              </div>


              <Button
                size="navbar"
                rounded="xl"
                className="!bg-white flex items-center gap-2 !text-[#635BFF] !border-2 !border-[#C3C3C3] shadow-[inset_0_-2px_1px_0_rgba(0,0,0,0.25)] !font-semibold self-start !px-6 !py-2.5 !text-[14px] sm:!px-[32px] sm:!py-4 sm:!text-[18px]"
              >
                Start Free Trial
                <Image src="/right-arrow.svg" alt="arrow right" width={24} height={24} />
              </Button>
            </div>

            <div className="hidden lg:block absolute right-[-538px] top-20 w-full pointer-events-none">
            <Image
                src="/mobile-cta.png"
                alt="App screenshot"
                width={1200}
                height={900}
                className="absolute w-[553px] h-auto object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
