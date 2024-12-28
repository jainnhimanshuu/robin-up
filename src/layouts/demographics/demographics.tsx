"use client";

import { Button } from "@nextui-org/react";
import { IDemographics } from "@rbu/types/instagram";
import { useState } from "react";
import BarChart from "@rbu/components/charts/barChart/barChart";

interface IDemographicsProps {
  label: string;
  audienceData: IDemographics;
}

type TDemographics = "gender" | "country" | "age" | "city";

const demographicsType = {
  gender: "Gender",
  country: "Country",
  age: "Age",
  city: "City",
};

const Demographics = (props: IDemographicsProps) => {
  const { audienceData, label } = props;
  const [activeTab, setActiveTab] = useState<TDemographics>("gender");
  const genderData = audienceData.gender;
  const countryData = audienceData.country;
  const ageData = audienceData.age;
  const cityData = audienceData.city;

  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-bold">{label}</div>
      <div className="bg-slate-100 flex gap-4 p-2 rounded-lg">
        {Object.keys(demographicsType).map((key) => (
          <Button
            key={key}
            className="flex-1 rounded-lg p-0"
            onClick={() => setActiveTab(key as TDemographics)}
            color={activeTab === key ? "primary" : "default"}
          >
            {demographicsType[key as TDemographics]}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {activeTab === "gender" && (
          <div>
            <BarChart
              data={{
                labels: Object.keys(genderData)
                  .filter((key) => key)
                  .map((key) => key.toUpperCase()),
                datasets: [
                  {
                    label: "Gender",
                    data: Object.values(genderData),
                    backgroundColor: ["#4Ffffd", "#818CF8"],
                  },
                ],
              }}
              horizontal={true}
            />
          </div>
        )}
        {activeTab === "country" && (
          <BarChart
            data={{
              labels: Object.keys(countryData),
              datasets: [
                {
                  label: "Country",
                  data: Object.values(countryData),
                  backgroundColor: ["#4Ffffd", "#818CF8"],
                },
              ],
            }}
          />
        )}
        {activeTab === "age" && (
          <BarChart
            data={{
              labels: Object.keys(ageData),
              datasets: [
                {
                  label: "Age",
                  data: Object.values(ageData),
                  backgroundColor: ["#4Ffffd", "#818CF8"],
                },
              ],
            }}
          />
        )}
        {activeTab === "city" && (
          <BarChart
            data={{
              labels: Object.keys(cityData),
              datasets: [
                {
                  label: "City",
                  data: Object.values(cityData),
                  backgroundColor: ["#4Ffffd", "#818CF8"],
                },
              ],
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Demographics;
