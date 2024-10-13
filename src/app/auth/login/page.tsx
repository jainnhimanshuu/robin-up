"use client";
import React from "react";
import { AnimatedTooltip } from "@rbu/components/tooltips";
import { Input } from "@rbu/components";
import { cn } from "@rbu/helpers";
import Label from "@rbu/components/form/Label";
import { Button } from "@nextui-org/react";

export default function Login() {
  const tooltipData = [
    {
      id: 0,
      name: "Dnyaneshwari Bagekar",
      username: "@dnyaneshwari_bagekar30",
      image:
        "https://instagram.fbom3-1.fna.fbcdn.net/v/t51.2885-19/395826892_785159500037828_8961014008698155994_n.jpg?_nc_ht=instagram.fbom3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=zDqGlAsvHeUQ7kNvgGKK428&_nc_gid=38ff51db23074d5e9479ad9c61ad939f&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYBOAd6G1MMRSP6WdaZohMMlUdksR3xte44DC-VOpELS3g&oe=67117FA5&_nc_sid=7a9f4b",
    },
    {
      id: 1,
      name: "Himanshu Jain",
      username: "@himansh47",
      image:
        "https://instagram.fbom3-1.fna.fbcdn.net/v/t51.2885-19/461809134_850490693868918_533252623569482231_n.jpg?_nc_ht=instagram.fbom3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=PBz9jOvs_bAQ7kNvgFQE0CB&_nc_gid=0f1a27436a2a4b8389a78475e0627a38&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDqRdERUNRHqw5wOrHuK9nfjjq8A4Qnt3mVHxLnrmqZkw&oe=67116AEC&_nc_sid=7a9f4b",
    },
    {
      id: 2,
      name: "Akhilesh Singh",
      username: "@s__akhilesh",
      image:
        "https://instagram.fbom3-1.fna.fbcdn.net/v/t51.2885-19/457744786_483773731097970_2594624856962045227_n.jpg?_nc_ht=instagram.fbom3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Lys3PLWwIYkQ7kNvgEwuSXj&_nc_gid=923e6cace6364d3989e3da87145e335a&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYBaLggBcEHyakaiwv-Hhd-t1znIGcJ4DIsJ-GfZ-2q_Tg&oe=6711B7D7&_nc_sid=7a9f4b",
    },
    {
      id: 3,
      name: "Mayuri Tanpatil",
      username: "@mayu_tanpatil",
      image:
        "https://instagram.fbom3-2.fna.fbcdn.net/v/t51.2885-19/431176236_927864325405337_2967014259325318044_n.jpg?_nc_ht=instagram.fbom3-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=GKAQB2dtvV0Q7kNvgFqg9CY&_nc_gid=d7be58f14c154261a63b024de60a4bc9&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AYDmX0rODvW0kjSCD7zbYoEVHILj9tAP1Oc5Fa2BHgp2EQ&oe=6711865A&_nc_sid=22de04",
    },
    {
      id: 4,
      name: "Ritesh Shetty",
      username: "@shetty_ritesh",
      image:
        "https://instagram.fbom3-2.fna.fbcdn.net/v/t51.2885-19/57181877_2140383522914177_2079500689435787264_n.jpg?_nc_ht=instagram.fbom3-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=-02MpQ6KoU8Q7kNvgEgpq-b&_nc_gid=814655ca3a2440a0bd29971ce835d7e5&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYAh_7pE1KTkBnxuzw9uuRk4PUcfnnU5glHwPjVpwQ8BAQ&oe=6711AB7F&_nc_sid=7a9f4b",
    },
    {
      id: 5,
      name: "Rohan Salunke",
      username: "@ikuzo_rohan",
      image:
        "https://instagram.fbom3-2.fna.fbcdn.net/v/t51.2885-19/412643892_669559292011334_5272974791092008153_n.jpg?_nc_ht=instagram.fbom3-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=PZez25fM8XcQ7kNvgGCnBQr&_nc_gid=f605ea6c85234c0da0c5a4df54462e8a&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDTMcDR5GsZ2rwruOvGvnFAnj5Uge-lj8sNpIcQV51b4A&oe=6711A877&_nc_sid=7a9f4b",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="w-full mx-auto p-4 md:p-8 shadow-input bg-white dark:bg-black flex flex-col justify-center">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to RobinUp
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Log in to RobinUp and unlock the power of influencer marketing.
          Connect with top creators, build partnerships, and elevate your
          brand—because great collaborations start here.
        </p>
        <form className="mt-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="hi@robinup.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>

          <Button radius="sm" fullWidth className="bg-slate-900 text-slate-50">
            Login
          </Button>
        </form>
      </div>
      <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative w-full z-20 hidden md:flex  overflow-hidden bg-white dark:bg-neutral-900 items-center justify-center">
        <div className="max-w-sm mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
              <AnimatedTooltip items={tooltipData} />
            </div>
          </div>
          <p className="font-semibold text-xl text-center text-neutral-600 dark:text-neutral-400">
            Connect. Collaborate. Create.
          </p>
          <p className="font-normal text-base text-center text-neutral-500 dark:text-neutral-400 mt-8">
            Join a thriving community of influencers offering their services and
            brands ready to collaborate. Together, we are shaping the future of
            influencer marketing.
          </p>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
