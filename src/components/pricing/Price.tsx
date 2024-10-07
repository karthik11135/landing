import React from "react";
import { TickIcon } from "../ui/Icons";
import { AddIcon } from "../ui/Icons";

const Price = () => {
  return (
    <div className="mb-20 w-5/6 mx-auto">
      <div className="w-3/6 mb-10 mx-auto text-center">
        <h1 className="text-4xl text-transparent font-bold bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 mb-4">
          Intuitive Pricing available
        </h1>
        <p className="font-light text-zinc-500">
          Our pricing is way better compared to the market price. Probably the
          best
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <PriceCard purchaseType="Personal" price={400} />
        <PriceCard purchaseType="Medium" price={800} />
        <PriceCard purchaseType="Company" price={1200} />
      </div>
    </div>
  );
};

export default Price;

const PriceCard = ({
  purchaseType,
  price,
}: {
  purchaseType: "Personal" | "Medium" | "Company";
  price: number;
}) => {
  const benefits: Record<string, string[]> = {
    Personal: [
      "Early access to all tools",
      "Best of the class in market",
      "Upto 10,000 calls allowed per day",
      "Stunning marketing strategies provided ",
    ],
    Medium: [
      "Advanced analytics dashboar",
      "Customizable reports and charts",
      "Real-time data tracking",
      "Integration with third-party tools",
    ],
    Company: [
      "Unlimited data storage",
      "Best of the class in market",
      "Customizable dashboards",
      "Advanced data segmentation",
      "Real-time data processing",
      "AI-powered insights and recommendations",
    ],
  };

  return (
    <div className="col-span-1 border-t border-zinc-700 h-[44rem] py-2.5 bg-neutral-900 text-slate-50 rounded-2xl  ">
      <div className="bg-zinc-700 border-t border-neutral-500 mx-3 mb-12 px-3 rounded-2xl">
        <div className="flex mb-10 pt-5">
          <h4 className="font-semibold text-lg ">{purchaseType}</h4>
        </div>
        <div className="mb-10">
          <span className="font-extrabold">$</span>
          <span className="text-8xl font-extrabold text-cyan-500">{price}</span>
          /month
        </div>
        <div className="">
          <button className="w-full my-2 mb-4 rounded-xl  py-1 border-2 hover:-translate-y-1 transition border-zinc-600 bg-slate-100 text-slate-700 font-bold shadow">
            Get {purchaseType}
          </button>
        </div>
      </div>
      <div className="px-3 mb-16">
        {benefits[purchaseType].map((text, id) => (
          <BenefitPoint key={id} text={text} />
        ))}
      </div>

      {(purchaseType === "Medium" || purchaseType === "Company") && (
        <>
          <div className=" mx-5 relative border border-zinc-800">
            <div className="absolute -top-3 right-1/2">
              <AddIcon />
            </div>
          </div>
          <div className="mb-10 pt-4 my-4 mx-5 gap-3 w-fit flex">
            <TickIcon color={"#06b6d4"} />
            Everything in {purchaseType === "Medium" ? "Hobby" : "Medium"} plan
          </div>
        </>
      )}
    </div>
  );
};

const BenefitPoint = ({ text }: { text: string }) => (
  <div className="flex px-2 gap-3 mb-1.5">
    <TickIcon color={"rgb(150, 150, 150)"} />
    <p className="font-light tracking-wide text-neutral-400">{text}</p>
  </div>
);
