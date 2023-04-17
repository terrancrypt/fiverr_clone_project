import React from "react";

const OutstandingItem = () => {
  const dataList = [
    {
      title: "The best for every budget",
      desc: "Find high-quality services at every price point. No hourly rates, just project-based pricing.",
    },
    {
      title: "Quality work done quickly",
      desc: "Find the right freelancer to begin working on your project within minutes.",
    },
    {
      title: "Protected payments, every time",
      desc: "Always know what you'll pay upfront. Your payment isn't released until you approve the work.",
    },
    {
      title: "24/7 support",
      desc: "Questions? Our round-the-clock support team is available to help anytime, anywhere.",
    },
  ];

  return (
    <>
      {dataList.map((item, index) => {
        return (
          <li key={index} className="pb-6">
            <div className="flex justify-start items-center pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#7a7d85"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h6 className="pl-2 ">{item.title}</h6>
            </div>
            <p>{item.desc}</p>
          </li>
        );
      })}
    </>
  );
};

export default OutstandingItem;
