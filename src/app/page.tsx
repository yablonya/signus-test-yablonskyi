import { Metadata } from "next";
import AssignmentPage from "@/components/pages/assignment/assignment-page";

export const metadata: Metadata = {
  title: "Assignment form",
}

const Home = () => {
  return <AssignmentPage/>;
}

export default Home;
