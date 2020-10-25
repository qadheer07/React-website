import React from "react";
import Card from "../Card";
import HeroSection from "../HeroSection";
import InfoCard from "../InfoCard";
import {homeObjOne, homeObjThree, homeObjTwo} from './HomeData'


function Home(props) {
  return (
    <>
      <HeroSection />
      <Card {...homeObjOne} />
      <Card {...homeObjTwo} />
      <Card {...homeObjThree} />
      <InfoCard />
      
    </>
  );
}

export default Home;
