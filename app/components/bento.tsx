import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Bento = () => {
  return (
    <section className="w-full bg-[#121212] py-20">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Title with inline image */}
          <h2 className="flex items-center gap-3 text-4xl md:text-5xl font-medium text-white tracking-[-1.44px] leading-[48px] [font-family:'Geist-Medium',Helvetica] mb-4">
            Powered by
            <span className="inline-flex items-center gap-3">
              an
              <Image
                src="/ai-engine.png"
                alt="AI Engine"
                width={50}
                height={50}
                className="object-contain"
              />
              AI
            </span>
            engine
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#616161] tracking-[-0.60px] leading-[30px] [font-family:'Geist-Regular',Helvetica]">
            We&apos;re creating the future of real estate management.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* First Row - First Column */}
          <Card className="bg-neutral-900 border-medium-gray rounded-none p-5 flex flex-col">
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/prospections.png"
                alt="Prospections"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-white text-2xl font-medium tracking-[-0.72px] leading-[30px] [font-family:'Geist-Medium',Helvetica] mb-2">
              Prospections
            </h3>
            <p className="text-[#616161] text-base tracking-[-0.48px] leading-[24px] [font-family:'Geist-Regular',Helvetica]">
              Advanced Property Insights Powered by External Data Integration.
            </p>
          </Card>

          {/* First Row - Second & Third Column */}
          <Card className="bg-neutral-900 border-medium-gray rounded-none p-5 md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:max-w-[50%]">
              <h3 className="text-white text-2xl font-medium tracking-[-0.72px] leading-[30px] [font-family:'Geist-Medium',Helvetica] mb-2">
                Lead Generation
              </h3>
              <p className="text-[#616161] text-base tracking-[-0.48px] leading-[24px] [font-family:'Geist-Regular',Helvetica]">
                Work from anywhere. We prioritize a remote-friendly environment,
                giving you the flexibility to choose where you&apos;re most
                productive.
              </p>
            </div>
            <div className="relative w-full md:w-[45%] h-48 mt-4 md:mt-0">
              <Image
                src="/lead-generation.png"
                alt="Lead Generation"
                fill
                className="object-cover"
              />
            </div>
          </Card>

          {/* Second Row - First & Second Column */}
          <Card className="bg-neutral-900 border-medium-gray rounded-none p-5 md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:w-[45%] h-48 mb-4 md:mb-0">
              <Image
                src="/valuation.png"
                alt="Automated Valuation Model"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:max-w-[50%]">
              <h3 className="text-white text-2xl font-medium tracking-[-0.72px] leading-[30px] [font-family:'Geist-Medium',Helvetica] mb-2">
                Automated Valuation Model
              </h3>
              <p className="text-[#616161] text-base tracking-[-0.48px] leading-[24px] [font-family:'Geist-Regular',Helvetica]">
                Work from anywhere. We prioritize a remote-friendly environment,
                giving you the flexibility to choose where you&apos;re most
                productive.
              </p>
            </div>
          </Card>

          {/* Second Row - Third Column */}
          <Card className="bg-neutral-900 border-medium-gray rounded-none p-5 flex flex-col">
            <div className="mb-4">
              <h3 className="text-white text-2xl font-medium tracking-[-0.72px] leading-[30px] [font-family:'Geist-Medium',Helvetica] mb-2">
                Insights
              </h3>
              <p className="text-[#616161] text-base tracking-[-0.48px] leading-[24px] [font-family:'Geist-Regular',Helvetica]">
                Work from anywhere. We prioritize a remote-friendly environment,
                giving you the flexibility to choose where you&apos;re most
                productive.
              </p>
            </div>
            <div className="relative w-full h-48 mt-auto">
              <Image
                src="/insights.png"
                alt="Insights"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>

        {/* Discover More Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="h-10 px-5 py-1.5 rounded-none border-white bg-transparent w-fit"
          >
            <span className="font-medium text-white text-xs text-center tracking-[-0.36px] leading-[14px] [font-family:'Geist-Medium',Helvetica]">
              Discover more
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Bento;
