import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden -mt-[82px]">
      {/* Dark overlay for mobile - moved outside the Card */}
      <div className="md:hidden absolute inset-0 bg-black/30 z-[1]" />

      <Card className="w-full h-full border-0">
        <CardContent className="p-0 h-full">
          <AspectRatio ratio={16 / 9} className="h-full">
            {/* Background Images */}
            <div className="absolute inset-0">
              {/* Main background ellipse */}
              <Image
                src="/hero-ellipse.png"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
              />
              {/* Logo overlay for mobile */}
              <div className="mt-30 md:hidden absolute inset-0 flex items-center justify-center">
                <video
                  src="/hero-video.mp4"
                  autoPlay
                  muted
                  playsInline
                  className="w-[500px] h-[500px] mix-blend-lighten"
                />
              </div>
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 mt-150 md:mt-0">
                <div className="relative flex flex-col md:flex-row items-center justify-between">
                  <section className="relative w-full max-w-[612px] ml-0 md:ml-[10%] z-10">
                    <div className="flex flex-col gap-6">
                      {/* Product update badge */}
                      <Button
                        variant="outline"
                        className="w-fit h-9 px-4 py-2 rounded-none border border-solid border-white bg-transparent hover:bg-white/10 flex items-center gap-2 cursor-pointer"
                      >
                        <span className="font-normal text-white text-xs tracking-[-0.36px] leading-3 whitespace-nowrap [font-family:'Geist_Mono-Regular',Helvetica]">
                          August Product Updates
                        </span>
                        <ArrowRight className="w-3 h-3 text-white" />
                      </Button>

                      {/* Main heading */}
                      <h1 className="w-full [font-family:'Geist-Medium',Helvetica] font-medium text-white text-[42px] md:text-[64px] tracking-[-1.92px] leading-[1.1] md:leading-[64px]">
                        New horizons for your property data.
                      </h1>

                      {/* Subtitle */}
                      <p className="w-full max-w-[460px] [font-family:'Geist-Regular',Helvetica] font-normal text-light-gray text-lg md:text-xl tracking-[-0.60px] leading-[1.6] md:leading-[30px]">
                        AI-powered solutions for real estate experts.
                      </p>

                      {/* CTA buttons */}
                      <div className="flex items-center gap-4 mt-6">
                        <Link href="/contactus">
                          <Button
                            variant="outline"
                            className="h-12 px-6 py-2 rounded-none border border-solid border-white bg-transparent hover:bg-white/10 cursor-pointer"
                          >
                            <span className="[font-family:'Geist-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[-0.42px] leading-[14.7px]">
                              Contact us
                            </span>
                          </Button>
                        </Link>

                        <Button className="h-12 px-6 py-2 rounded-none bg-white border border-solid border-white hover:bg-white/90 cursor-pointer">
                          <span className="[font-family:'Geist-Medium',Helvetica] font-medium text-black text-sm text-center tracking-[-0.42px] leading-[14.7px]">
                            Get Started
                          </span>
                        </Button>
                      </div>

                      {/* Footer text */}
                      <p className="mt-10 [font-family:'Geist_Mono-Regular',Helvetica] font-normal text-xs tracking-[-0.36px] leading-3 whitespace-nowrap">
                        <span className="text-[#616161] tracking-[-0.04px]">
                          Join{" "}
                        </span>
                        <span className="text-neutral-50 tracking-[-0.04px] underline">
                          40.000+
                        </span>
                        <span className="text-[#616161] tracking-[-0.04px]">
                          {" "}
                          business professionals.
                        </span>
                      </p>
                    </div>
                  </section>

                  {/* Hero Logo - Desktop Only */}
                  <div className="hidden md:block w-[400px] h-[400px] relative">
                    <video
                      src="/hero-video.mp4"
                      autoPlay
                      muted
                      playsInline
                      className="w-full h-full object-cover mix-blend-lighten"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AspectRatio>
        </CardContent>
      </Card>
    </div>
  );
}
