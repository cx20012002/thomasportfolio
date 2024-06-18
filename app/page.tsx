import AnimatedText from "@/components/home/AnimatedText";
import CaseStudy from "@/components/home/CaseStudy";
import HeadSection from "@/components/home/HeadSection";
import Intro from "@/components/home/Intro";
import WorkSection from "@/components/home/WorkSection";

export default function Home() {
  return (
    <>
      <HeadSection />
      <Intro />
      <AnimatedText />
      <WorkSection />
      <CaseStudy />
    </>
  );
}
