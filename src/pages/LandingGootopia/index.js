import React from "react";
import Container from "../../components/Container";
import BannerImg from "../../assets/BEWITCHED2.png";
import { CarouselBanner } from "../../components/Carousel/CarouselBanner";
import { PromoBanner } from "../../components/Promo/PromoBanner";
import { PartnerSection } from "../../components/Partner/PartnerSection";
import { DesertFeatures } from "../../components/Features/DesertFeatures";
import BookOnline from "../../components/Features/BookOnline";
import CertifiedSection from "../../components/Features/CertifiedSection";
import { ImageSection } from "../../components/Features/ImageSection";
import FAQ from "../../components/Features/FAQ";
import GootopiaContainer from "../../components/Container/GootopiaContainter";
import { LandingPage } from "../../components/Gootopia/index";
import { Section2 } from "../../components/Gootopia/index";

function LandingGootopia() {
  return (
    <GootopiaContainer>
      <LandingPage />
    </GootopiaContainer>
  );
}

export default LandingGootopia;
