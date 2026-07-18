import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import ToolsEducation from "@/components/ToolsEducation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <Introduction />
        <SectionDivider />
        <SelectedWork />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <ToolsEducation />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
