"use client";

import type { Metadata } from "next";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  const { theme } = useTheme();

  const image = `/404-${theme}.svg`;

  return (
    <div className="flex flex-col gap-8 items-center">
      <Image
        src={image}
        className="object-cover w-8/12 md:w-72"
        alt="404"
        width={400}
        height={400}
      />
      <div className="space-y-3 text-center">
        <h1 className="text-2xl lg:text-3xl font-semibold">
          404 - Page not found
        </h1>
        <p className="text-sm md:text-base">
          Oops! Looks like you're in the wrong page or the link for this page is
          broken
        </p>
        <Link
          href={"/"}
          className="md:text-lg border-b-2 hover:border-black active:opacity-50 duration-200"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
}
