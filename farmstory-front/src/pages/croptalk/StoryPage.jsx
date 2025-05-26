import React from "react";
import { MainLayout } from "../../layouts/MainLayout";
import { SubLayout } from "../../layouts/SubLayout";

export const StoryPage = () => {
  return (
    <MainLayout>
      <SubLayout>
        <div>
          <h3>농작물이야기</h3>
        </div>
      </SubLayout>
    </MainLayout>
  );
};
