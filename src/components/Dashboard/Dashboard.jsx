import React from "react";
import { StatsGrid } from "./StatsGrid";
import { Chart } from "./Chart";
import { TableSection } from "./TableSection";
import { ActivityFeed } from "./ActivityFeed";

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <StatsGrid />

      <Chart />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>

        <div className="ps-4">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};
