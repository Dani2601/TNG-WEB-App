import React, { useRef } from "react";
import Container from "../../components/Container";
import { CarouselBanner } from "../../components/Carousel/CarouselBanner";
import { PromoBanner } from "../../components/Promo/PromoBanner";
import { PartnerSection } from "../../components/Partner/PartnerSection";
import { DesertFeatures } from "../../components/Features/DesertFeatures";
import BookOnline from "../../components/Features/BookOnline";
import CertifiedSection from "../../components/Features/CertifiedSection";
import { ImageSection } from "../../components/Features/ImageSection";
import FAQ from "../../components/Features/FAQ";
import { Instagram } from "../../components/Embed";
import { PromoDiscountSection } from "../PromoDiscountSection/PromoDiscountSection";
const dessert = process.env.REACT_APP_DESSERT_KEY;

const carouselData = [
  {
    id: 1,
    imageSrc:
      "https://static.wixstatic.com/media/00f21d_4a136b3eacb742d885773da074778f65~mv2.png/v1/fill/w_1899,h_640,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/00f21d_4a136b3eacb742d885773da074778f65~mv2.png",
    type: "img",
  },
  {
    id: 2,
    imageSrc:
      "https://static.wixstatic.com/media/00f21d_4dc2250d4a424c9a9e74964d927a51aa~mv2.png/v1/fill/w_1640,h_553,al_c,q_90,enc_auto/00f21d_4dc2250d4a424c9a9e74964d927a51aa~mv2.png",
    type: "img",
  },
  {
    id: 3,
    imageSrc:
      "https://static.wixstatic.com/media/00f21d_4800607160a84c5aa0208217b5386649~mv2.png/v1/fill/w_1640,h_553,al_c,q_90,enc_auto/00f21d_4800607160a84c5aa0208217b5386649~mv2.png",
    type: "img",
  },
  {
    id: 4,
    imageSrc:
      "https://static.wixstatic.com/media/00f21d_45ac337952e048f29c34e7fd669aadf1~mv2.png/v1/fill/w_1640,h_553,al_c,q_90,enc_auto/00f21d_45ac337952e048f29c34e7fd669aadf1~mv2.png",
    type: "img",
  },
];

function LandingDesert() {
  const faq = useRef(null);

  const handleScroll = () => {
    faq.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container scroll={handleScroll}>
      <CarouselBanner items={carouselData} />
      <PromoBanner />
      <PartnerSection />
      <div className="bg-tdm-pink py-10 font-poppins">
        <PromoDiscountSection businessUnitId={dessert} />
      </div>
      <DesertFeatures />
      <BookOnline />
      <CertifiedSection />
      <ImageSection />
      <FAQ setRef={faq} />
      {/* <Instagram/> */}
    </Container>
  );
}

export default LandingDesert;
