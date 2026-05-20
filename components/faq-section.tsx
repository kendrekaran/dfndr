"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Guards download the app",
    answer:
      "DFNDR is currently available on iOS, with Android coming soon. Your team can start using DFNDR immediately on iPhones. We're actively rolling out Android support next, so mixed-device teams will be fully supported.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "Most teams are up and running within a day. You create your account, invite your guards, and they download the app. No lengthy onboarding or training required — the interface is built to be intuitive from the first shift.",
  },
  {
    question: "Can my clients see what's happening on-site?",
    answer:
      "Yes. You can give clients a read-only view of their site activity, including patrol logs, incident reports, and real-time guard locations. It's a great way to build trust and keep clients informed without extra admin work.",
  },
  {
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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

            <div className="flex flex-col w-full max-w-[700px]">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-3 sm:gap-4 py-4 sm:py-5 px-2 sm:px-5 rounded-[16px] sm:rounded-[20px]">
                    <button
                      className="flex justify-between items-start w-full text-left gap-3 sm:gap-4"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                      <span className="text-[16px] sm:text-[20px] font-semibold leading-snug">{faq.question}</span>
                      <span className="shrink-0 mt-0.5">
                        {openIndex === index ? <CloseIcon /> : <PlusIcon />}
                      </span>
                    </button>
                    {openIndex === index && (
                      <p className="text-black/60 text-[14px] sm:text-[1em] leading-[1.5] tracking-[0.01em] max-w-[35.67em]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <div className="h-[2px] bg-[#EFEFEF] w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
