"use client";

import { FC } from "react";
import NextTopLoader from "nextjs-toploader";
import { useTheme } from "next-themes";

export const TopLoader: FC = () => {
  const { theme } = useTheme();

  const color = theme === "dark" ? "#ffffff" : "#000000";

  return <NextTopLoader color={color} />;
};
