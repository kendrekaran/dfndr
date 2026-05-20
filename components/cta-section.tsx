import Button from "@/components/_ui/button";

export default function CtaSection() {
  return (
    <section id="cta" className="relative z-0">
      <div className="px-global pb-section-md">
        <div className="max-w-global mx-auto">
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-gradient-to-r from-[#635BFF] to-[#9B96FF] px-6 py-10 sm:px-16 sm:py-16">
            <div className="cta-dot-grid" />
            <div className="relative z-10 flex flex-col items-start gap-5 sm:gap-6 max-w-[520px]">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h2 className="text-white max-w-[10em]">
                  Ready to take control of your operations?
                </h2>
                <p className="text-white/80 max-w-[30em]">
                  Join with security companies already running on DFNDR. Start your free trial today &nbsp; no credit card required.
                </p>
              </div>
              <Button
                variant="ghost"
                size="navbar"
                rounded="full"
                className="bg-white border-white/30 text-[#635BFF] font-semibold flex items-center gap-2 !px-6 !py-3 !text-[15px] sm:!px-8 sm:!py-4 sm:!text-[18px]"
              >
                Start Free Trial
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
