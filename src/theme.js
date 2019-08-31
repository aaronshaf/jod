// https://www.npmjs.com/package/polished

const space = [0, 2, 4, 8, 16, 32].map(n => `${n}px`);

const sizes = ["960px"];

const fontSizes = ["0.86rem", "0.92rem", "1rem", "1.06rem", "1.8rem", "2.2rem"];

const theme = {
  sizes,
  fontSizes,
  space,
  colors: {
    // text
    // border
    // background
    // button
    // link
    // state
    // brand, brand-secondary
    background: "#333",
    black: "#000e1a",
    whites: [
      "#fff",
      "#f0eeE2", // white rock,
      "#e3e1ce", // satin linin
      "#fefdfa" // bianca (unused)
    ],
    blues: [
      "#0066cc", // mariner
      "#052f54" // blue whale
    ],
    oranges: [
      "#f1ae46" // porsche
    ],
    greys: [
      "#b7c5d7" // casper
    ]
  }
};

export default theme;
