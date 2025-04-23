import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <section className="w-full h-[352px] relative overflow-hidden">
      <Card className="w-full h-full bg-transparent border-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] to-[#2b2b2b]" />

        <div className="relative h-full container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-[-1.44px] leading-[36px] md:leading-[48px] [font-family:'Geist-Medium',Helvetica] text-center md:text-left">
            Unveil new horizons
            <br />
            See the future.
          </h2>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="h-10 px-5 py-1.5 rounded-none border-white bg-transparent"
            >
              <span className="font-medium text-white text-xs text-center tracking-[-0.36px] leading-[14px] [font-family:'Geist-Medium',Helvetica]">
                Contact us
              </span>
            </Button>
            <Button className="h-10 px-5 py-1.5 rounded-none bg-white hover:bg-white/90">
              <span className="font-medium text-black text-xs text-center tracking-[-0.36px] leading-[14px] [font-family:'Geist-Medium',Helvetica]">
                Get Started
              </span>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default FooterCTA;
