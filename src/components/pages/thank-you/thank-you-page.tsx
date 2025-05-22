import Link from "next/link";
import { Suspense } from "react";
import { Routes } from "@/constants/navigation";
import { BeatLoader } from "react-spinners";
import DynamicText from "@/components/pages/thank-you/components/dynamic-text";

const ThankYouPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 animate-fade-in">
          Thank you for submitting your assignment!
        </h1>
        <Suspense
          fallback={
            <BeatLoader
              margin={3}
              size={10}
              color="#71717b"
              className="py-2"
            />
          }
        >
          <DynamicText/>
        </Suspense>
        <Link
          href={Routes.Assignment}
          className="hover:opacity-70 text-primary opacity-50 font-medium transition-opacity"
        >
          Return to assignment form
        </Link>
      </div>
    </main>
  );
}

export default ThankYouPage;
