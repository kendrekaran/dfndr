"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type KeyboardEvent } from "react";
import useMeasure from "react-use-measure";

const accordionTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const,
};

const iconTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1] as const,
};

const faqs = [
  {
    id: "guards-download",
    question: "Guards download the app",
    answer:
      "DFNDR is currently available on iOS, with Android coming soon. Your team can start using DFNDR immediately on iPhones. We're actively rolling out Android support next, so mixed-device teams will be fully supported.",
  },
  {
    id: "get-started",
    question: "How long does it take to get started?",
    answer:
      "Most teams are up and running within a day. You create your account, invite your guards, and they download the app. No lengthy onboarding or training required — the interface is built to be intuitive from the first shift.",
  },
  {
    id: "client-visibility",
    question: "Can my clients see what's happening on-site?",
    answer:
      "Yes. You can give clients a read-only view of their site activity, including patrol logs, incident reports, and real-time guard locations. It's a great way to build trust and keep clients informed without extra admin work.",
  },
  {
    id: "cancel-subscription",
    question: "Can I cancel my subscription anytime? Is there any contract?",
    answer:
      "There are no long-term contracts. You can cancel your subscription at any time from your account settings. If you cancel, you'll retain access until the end of your current billing period.",
  },
];

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0001 3.51472V12M12.0001 12V20.4853M12.0001 12H20.4853M12.0001 12H3.51477"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function FaqAnswer({ answer, isOpen }: { answer: string; isOpen: boolean }) {
  const [contentRef, { height }] = useMeasure();

  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? height : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        height: accordionTransition,
        opacity: { duration: 0.2, ease: accordionTransition.ease },
      }}
      className="overflow-hidden"
    >
      <div ref={contentRef}>
        <p className="max-w-[35.67em] pt-3 text-[14px] leading-normal tracking-[0.01em] text-black/60 sm:pt-4 sm:text-[1em]">
          {answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState<string>(faqs[0]?.id ?? "");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <section id="faq" className="relative z-0">
      <div className="px-global py-section-md">
        <div className="max-w-global mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2.5">
              <span className="text-[#635BFF] text-[16px] sm:text-[18px] font-bold tracking-[0.36px] uppercase">
                FAQ
              </span>
              <h2 className="max-w-[13.5em] text-center">Questions we get a lot.</h2>
            </div>

            <div className="flex w-full max-w-[700px] flex-col">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id}>
                    <div className="rounded-[16px] px-2 py-4 sm:rounded-[20px] sm:px-5 sm:py-5">
                      <button
                        type="button"
                        className="flex w-full cursor-pointer items-start justify-between gap-3 text-left sm:gap-4"
                        onClick={() => toggle(faq.id)}
                        onKeyDown={(e) => handleKeyDown(e, faq.id)}
                        aria-expanded={isOpen}
                      >
                        <span className="text-[16px] leading-snug font-semibold sm:text-[20px]">
                          {faq.question}
                        </span>

                        <span className="relative mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center">
                          <AnimatePresence mode="sync" initial={false}>
                            {isOpen ? (
                              <motion.span
                                key="close"
                                initial={{
                                  opacity: 0,
                                  rotate: -90,
                                  filter: "blur(3px)",
                                }}
                                animate={{
                                  opacity: 1,
                                  rotate: 0,
                                  filter: "blur(0px)",
                                }}
                                exit={{
                                  opacity: 0,
                                  rotate: 90,
                                  filter: "blur(3px)",
                                }}
                                transition={iconTransition}
                                className="absolute inset-0 flex items-center justify-center"
                              >
                                <CloseIcon />
                              </motion.span>
                            ) : (
                              <motion.span
                                key="plus"
                                initial={{
                                  opacity: 0,
                                  rotate: -90,
                                  filter: "blur(2px)",
                                }}
                                animate={{
                                  opacity: 1,
                                  rotate: 0,
                                  filter: "blur(0px)",
                                }}
                                exit={{
                                  opacity: 0,
                                  rotate: 90,
                                  filter: "blur(2px)",
                                }}
                                transition={iconTransition}
                                className="absolute inset-0 flex items-center justify-center"
                              >
                                <PlusIcon />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </span>
                      </button>

                      <FaqAnswer answer={faq.answer} isOpen={isOpen} />
                    </div>
                    <div className="h-[2px] w-full bg-[#EFEFEF]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
