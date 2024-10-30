import { AnimatedTooltip, AuroraBackground } from "@rbu/components";
import { AnimatedGradientText } from "@rbu/components/textAnimations";
import { tooltipData } from "@rbu/constants/instausers";
import { cn } from "@rbu/helpers";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import DummyImg1 from "@rbu/public/images/dummy-logo-1.png";
import DummyImg2 from "@rbu/public/images/dummy-logo-2.png";
import DummyImg3 from "@rbu/public/images/dummy-logo-3.png";
import DummyImg4 from "@rbu/public/images/dummy-logo-4.png";

const buttonStyles =
  "px-4 py-2 rounded-md button text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] block w-full md:w-40";

export function HomeLanding() {
  return (
    <AuroraBackground>
      <div className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
        <div className="z-10 flex items-center justify-center">
          <AnimatedGradientText>
            🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Introducing RobinUp
            </span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText>
        </div>
        <h1 className="tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white relative z-20 mx-auto max-w-7xl py-6 text-center text-4xl font-semibold [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)] md:text-4xl lg:text-7xl">
          Empower Your Brand with Influencer Marketing
        </h1>
        <p className="mt-4 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          Connect, Collaborate, and Grow Your Business with the Right
          Influencers
        </p>
        <div className="mb-8 mt-2 flex w-full flex-col items-center justify-center md:gap-4 px-2 md:px-8 sm:flex-row">
          <a
            className={`${buttonStyles} bg-black text-white text-center md:mb-0 mb-2`}
            href="/auth/signup"
          >
            Join the Platform
          </a>
          <button className={`${buttonStyles} bg-white text-black text-center`}>
            Find Influencers
          </button>
        </div>
        <div className="mb-8 mt-4 md:mt-12 flex flex-col md:flex-row md:gap-10 md:px-8">
          <div>
            <h2 className="text-neutral-500 text-center mb-4 relative z-10 text-xs">
              Trusted by Influencer and Brands from all over the world
            </h2>
            <div className="flex flex-row items-center justify-center mb-10">
              <AnimatedTooltip items={tooltipData} />
            </div>
          </div>
          <div className="relative mt-2 md:mt-10">
            <div className="absolute right-0 z-40 block h-full w-20 bg-white [mask-image:linear-gradient(to_left,white,transparent)] dark:bg-black sm:hidden"></div>
            <div className="no-visible-scrollbar relative z-20 mb-4 flex flex-wrap items-center justify-center gap-4">
              {[DummyImg1, DummyImg2, DummyImg3, DummyImg4].map(
                (img, index) => (
                  <div key={index} className="mr-4 flex items-center space-x-2">
                    <Image
                      src={img}
                      alt={`Dummy Logo ${index + 1}`}
                      width="100"
                      height="50"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
