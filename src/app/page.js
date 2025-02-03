import HeroSection from "./components/HeroSection";
import BalanceMeal from "./components/BalanceMeal";
import AppComingSoon from "./components/AppComingSoon";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MealPlans from "./components/MealPlans";
import Quality from "./components/Quality";
import Features from "./components/Features";
import TiffinDetails from "./components/TiffinDetails";
import TIffinApp from "./components/TIffinApp";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-items-center">
      <div className="w-full flex flex-col items-center justify-items-center" style={{backgroundImage : "url('/BACKGROUND_2.png')"}}>
        <Header />
        <HeroSection />
      </div>
      <Features />
      <MealPlans />
      <BalanceMeal />
      <AppComingSoon />
      <TiffinDetails />
      {/* <TIffinApp /> */}
      <Quality />
      <Footer />
    </div>
  );
}
