import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Carousel from "../components/CustomCarousel";
import ConceptMusic from "../components/ConceptMusic";
import Benefit from "../components/Benefit";
import HealMusic from "../components/HealMusic";
import EmotionSurvey from "../components/EmotionSurvey";
import Footer from "../components/Footer";
import RequestInfo from "../components/requestInfo";
export default function Home() {
  return (
    <Container>
      <Header />
      <Carousel />
      <ConceptMusic />
      <Benefit />
      <HealMusic />
      <EmotionSurvey />
      <RequestInfo/>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
