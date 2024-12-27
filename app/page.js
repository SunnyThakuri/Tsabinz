import ClassicFit from "./components/ClassicFit";
import ExpressYourIdentity from "./components/ExpressYourIdentity";
import FashionInsights from "./components/FashionInsights";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InstagramHighlights from "./components/InstagramHighlights";
import MenAndWomenCollections from "./components/MenAndWomenCollections";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import NewWinterCollections from "./components/NewWinterCollections";
import OurStory from "./components/OurStory";
import RefinedStyle from "./components/RefinedStyle";
import SpecialOutfit from "./components/SpecialOutfit";
import SwimWear from "./components/SwimWear";
import Y2kAesthetic from "./components/Y2kAesthetic";

export default function Home() {
  return (
    <div>
      <Hero />
      <MenAndWomenCollections />
      <NewArrivals />
      <RefinedStyle />
      <SpecialOutfit />
      <NewWinterCollections />
      <ClassicFit />
      <SwimWear />
      <Y2kAesthetic />
      <OurStory />
      <ExpressYourIdentity />
      <FashionInsights />
      <InstagramHighlights />
    </div>
  );
}
