import Image from "next/image";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import CardSection from "./component/CardSection";
import Vote from "./component/Vote";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#262c38]">
      <Navbar />
      <Dashboard />
      <div className=" mt-32 px-8 py-6 mx-auto">
        <CardSection />
      </div>
      <Vote />
      <Footer />
    </main>
  );
}
