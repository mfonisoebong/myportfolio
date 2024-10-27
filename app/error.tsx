"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const { theme } = useTheme();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const image =
    theme === "dark" ? "/bug-fixing-dark.svg" : "/bug-fixing-light.svg";

  return (
    <div className="flex flex-col gap-8 items-center">
      <Image
        src={image}
        className="object-cover w-8/12 md:w-72"
        alt="Error"
        width={400}
        height={400}
      />
      <div className="space-y-3 text-center">
        <h1 className="text-2xl lg:text-3xl font-semibold">
          An error occcured
        </h1>
        <p className="text-sm md:text-base">
          Oops! Something went wrong... maybe try refreshing? If you're the
          developer you might want to check the browser console for the error
        </p>
        <button
          onClick={reset}
          className="md:text-lg border-b-2 hover:border-black active:opacity-50 duration-200"
        >
          Click here to reset
        </button>
      </div>
    </div>
  );
}
