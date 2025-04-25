import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const CardSection = () => {
  return (
    <section className="relative w-full bg-[#121212] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16">
          {/* Fixed Image Section */}
          <div className="w-[300px] h-[600px] md:w-[300px] md:h-[500px] relative ml-10 sm:ml-19 md:sticky md:ml-0">
            <Image
              src="/single-card.png"
              alt="Card"
              fill
              className="object-cover mix-blend-lighten"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-[600px]">
            {/* Text Content */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-medium text-white tracking-[-1.44px] leading-[48px] [font-family:'Geist-Medium',Helvetica] mb-4">
                Backed by
                <br />a first-class team.
              </h2>
              <p className="text-lg md:text-xl text-[#616161] tracking-[-0.60px] leading-[30px] [font-family:'Geist-Regular',Helvetica]">
                We offer expert services backed by a team of real estate
                specialists dedicated to helping you scale your business.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {/* Portfolio Management - Always visible */}
              <Card className="relative bg-neutral-900 border-medium-gray rounded-none p-5 aspect-square">
                <Image
                  src="/portofolio.svg"
                  alt="Portfolio"
                  width={24}
                  height={24}
                  className="absolute top-5 left-5"
                />
                <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-[-0.54px] leading-[24px] [font-family:'Geist-Medium',Helvetica]">
                  Portfolio Management
                </h3>
              </Card>

              {/* Risk Analysis - Always visible */}
              <Card className="relative bg-neutral-900 border-medium-gray rounded-none p-5 aspect-square">
                <Image
                  src="/risk-analysis.svg"
                  alt="Risk Analysis"
                  width={24}
                  height={24}
                  className="absolute top-5 left-5"
                />
                <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-[-0.54px] leading-[24px] [font-family:'Geist-Medium',Helvetica]">
                  Risk Analysis
                </h3>
              </Card>

              {/* Finding Opportunities - Desktop Only */}
              <Card className="relative bg-neutral-900 border-medium-gray rounded-none p-5 aspect-square md:block hidden">
                <Image
                  src="/opportunities.svg"
                  alt="Opportunities"
                  width={24}
                  height={24}
                  className="absolute top-5 left-5"
                />
                <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-[-0.54px] leading-[24px] [font-family:'Geist-Medium',Helvetica]">
                  Finding Opportunities
                </h3>
              </Card>

              {/* AVM Customization */}
              <Card className="relative bg-neutral-900 border-medium-gray rounded-none p-5 aspect-square order-3 md:order-none">
                <Image
                  src="/avm.svg"
                  alt="AVM"
                  width={24}
                  height={24}
                  className="absolute top-5 left-5"
                />
                <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-[-0.54px] leading-[24px] [font-family:'Geist-Medium',Helvetica]">
                  AVM Customization
                </h3>
              </Card>

              {/* Finding Opportunities - Mobile Only */}
              <Card className="relative bg-neutral-900 border-medium-gray rounded-none p-5 aspect-square md:hidden order-4">
                <Image
                  src="/opportunities.svg"
                  alt="Opportunities"
                  width={24}
                  height={24}
                  className="absolute top-5 left-5"
                />
                <h3 className="absolute bottom-5 left-5 text-white text-lg font-medium tracking-[-0.54px] leading-[24px] [font-family:'Geist-Medium',Helvetica]">
                  Finding Opportunities
                </h3>
              </Card>

              {/* Data Observatories */}
              <Card className="relative bg-neutral-900 border-medium-gray rounded-none p-5 col-span-2 flex flex-col items-center justify-center h-[200px] order-5 md:order-none">
                <Image
                  src="/data-observatories.svg"
                  alt="Data Observatories"
                  width={24}
                  height={24}
                  className="mb-3"
                />
                <h3 className="text-white text-lg font-medium tracking-[-0.54px] leading-[24px] [font-family:'Geist-Medium',Helvetica] text-center">
                  Data Observatories
                </h3>
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
        </div>
      </div>
    </section>
  );
};

export default CardSection;
