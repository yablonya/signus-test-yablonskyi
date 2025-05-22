import { Metadata } from "next";
import ThankYouPage from "@/components/pages/thank-you/thank-you-page";

export const metadata: Metadata = {
  title: "Thank you",
}

const ThankYou = () => {
  return <ThankYouPage/>
}

export default ThankYou;
