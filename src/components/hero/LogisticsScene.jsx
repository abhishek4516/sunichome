import { useEffect } from "react";
import gsap from "gsap";

import yard from "../../assets/yard.png";
import rail from "../../assets/rail.png";

export default function LogisticsScene() {

  useEffect(() => {

    // YARD FLOAT
    gsap.to(".yard-scene", {
      y: -12,

      duration: 5,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

    // RAIL FLOAT
    gsap.to(".rail-scene", {
      y: -8,

      duration: 4,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

    // TRAIN MOVEMENT
    gsap.to(".rail-scene", {
      x: 20,

      duration: 6,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

  }, []);

  return (
    <div className="logistics-scene">

      {/* YARD */}
      <img
        src={yard}
        alt=""
        className="yard-scene"
      />

      {/* RAIL */}
      <img
        src={rail}
        alt=""
        className="rail-scene"
      />

      {/* OCR GLOW */}
      <div className="ocr-pulse"></div>

    </div>
  );
}