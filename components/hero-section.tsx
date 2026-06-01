import Image from "next/image";
import Button from "@/components/_ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative z-0">
      <div className="px-global">
        <div className="max-w-global mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0 pt-8 pb-2 md:py-0">
          <div className="flex flex-col items-start gap-5 sm:gap-6 flex-1 w-full md:py-20 text-left">
            <div className="flex flex-col gap-3 sm:gap-4 w-full">
              <h1 className="max-w-[10em]">
                Run your{" "}
                <span className="text-[#635BFF]">security operations</span>{" "}
                from one platform.
              </h1>
              <p className="max-w-[30em] md:text-[20px] leading-[30px] text-black/60">
                DFNDR gives security companies real-time guard tracking,
                automated shift management, and instant reporting everything
                your team needs, in one place.
              </p>
            </div>
            <Button
              variant="brand"
              size="navbar"
              rounded="xl"
              className="!px-6 !py-3 !text-[15px] sm:!px-8 sm:!py-4 sm:!text-[18px]"
            >
              Start Free Trial
            </Button>
          </div>

          <div className="flex-1 w-full flex justify-center md:justify-end self-end">
            <Image
              src="/mobile.png"
              alt="DFNDR mobile app showing guard tracking dashboard"
              width={610}
              height={700}
              className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[480px] lg:max-w-[560px] object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
