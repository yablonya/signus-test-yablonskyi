"use client"

import { useSearchParams } from "next/navigation";

const DynamicText = () => {
  const searchParams = useSearchParams()
  const name = searchParams.get("name") || ""

  return (
    <p className="text-md md:text-xl text-muted-foreground mb-8">
      {name
        ? `${name}, your assignment has been successfully submitted.`
        : "Your assignment has been successfully submitted."
      }
    </p>
  );
}

export default DynamicText;