"use client";

import React from "react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQCard: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div 
      className="w-full bg-white border border-[#E5E7EB]/60 rounded-[24px] p-8 md:p-10 shadow-[0_10px_35px_-12px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-4"
    >
      <h3 
        className="text-lg md:text-xl text-[#000000] text-left leading-[28px] font-bold"
      >
        {question}
      </h3>
      <div 
        className="text-left text-[#4B5563] text-base leading-[26px] font-normal"
      >
        {answer}
      </div>
    </div>
  );
};

interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  position?: number;
}

interface HireFAQProps {
  data?: FAQItem[];
}

export const HireFAQ: React.FC<HireFAQProps> = ({ data }) => {
  const defaultFaqData = [
    {
      question: "How can I hire React developer for 15 days Risk free trial?",
      answer: (
        <p>
          You can hire React developer from Krazio for a 15-day risk-free trial in 3 easy steps: 
          connect with our experts, share your requirements, and get a vetted developer according 
          to your specific needs. You can evaluate the work done by the hired resource, and after 
          15 days, if you are unsatisfied, you can cancel without any charges.No upfront commitment 
          is required.
        </p>
      )
    },
    {
      question: "How much does it cost to hire Reactjs developer?",
      answer: (
        <p>
          We have simple and transparent pricing. We let you hire experienced React developers at a 
          rate of per hour with an average experience of 3+ years. However, the cost may vary 
          depending on your query and the expertise of our developer. If you want to hire a team of 
          React developers, we have customized rates for you; please contact us to know more details.
        </p>
      )
    },
    {
      question: "What are the hiring engagement options available at Krazio?",
      answer: (
        <div className="flex flex-col gap-1.5">
          <p>We provide three types of hiring engagement models:</p>
          <ul className="list-none flex flex-col gap-1 pl-0">
            <li>
              <span className="font-semibold text-[#1F2937]">1. Dedicated Developer (Monthly):</span> 160 Hours a Month. 8 hours a day, 5 days a week.
            </li>
            <li>
              <span className="font-semibold text-[#1F2937]">2. Hourly Basis:</span> We use time-tracking tools like time doctor and Hubstaff.
            </li>
            <li>
              <span className="font-semibold text-[#1F2937]">3. Fixed Based:</span> Share your requirements, and we'll evaluate and provide a detailed estimation of time and cost.
            </li>
          </ul>
        </div>
      )
    },
    {
      question: "Do you provide support and maintenance services after deployment?",
      answer: (
        <p>
          Yes, we do provide support and maintenance services after successful Reactjs project completion. 
          Our after services include bug fixes, framework upgrade, continuous monitoring, and technical 
          glitch resolution for the enhancements of your Reactjs product.
        </p>
      )
    },
    {
      question: "What if I am not satisfied with the hired Reactjs developer's work and would like to exit?",
      answer: (
        <p>
          We understand that every project requires different skills, so we can provide you with a free 
          replacement to continue our business relationship, and even after that if you are not satisfied, 
          we can terminate the contract with a 2-week notice. The termination invoice shall specify all 
          unpaid work and the remaining work done until the termination date.
        </p>
      )
    }
  ];

  const faqData = data && data.length > 0
    ? data.map(item => ({
        question: item.question,
        answer: (
          <div 
            className="flex flex-col gap-1.5"
            dangerouslySetInnerHTML={{ __html: item.answer.replace(/\n/g, '<br />') }}
          />
        )
      }))
    : defaultFaqData;

  return (
    <section 
      className="w-full bg-[#FAFAFA] min-h-[1526px]"
    >
      <div className="w-full max-w-[1358px] mx-auto py-24 px-6 md:px-[55px] flex flex-col items-center">
        <div className="w-full max-w-[896px] flex flex-col items-center gap-16">
        {/* FAQ Header */}
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl md:text-[44px] font-bold text-[#111827] tracking-tight mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-[16px] md:text-[18px] font-medium leading-[26px]">
            Everything you need to know about hiring ReactJS developers from Krazio.
          </p>
        </div>

        {/* FAQ Cards Stack */}
        <div className="w-full flex flex-col gap-6">
          {faqData.map((item, idx) => (
            <FAQCard key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
