import React from "react";
export default function Img({ fixed }) {
  if (!fixed) return null;
  return <img src={fixed.src} width={fixed.width} height={fixed.height} alt="" loading="lazy" style={{ objectFit: "cover", display: "block" }} />;
}
