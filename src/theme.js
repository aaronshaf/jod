// https://www.npmjs.com/package/polished

const sizes = [640, 960].map(n => `${n}px`);

const space = [0, 2, 4, 8, 16, 32].map(n => `${n}px`);

const fontSizes = [0.86, 0.92, 1, 1.06, 1.8, 2.2].map(n => `${n}rem`);

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
      "#fefdfa", // bianca (unused)
      "#faf9f3", // ecru white
      "#f8f8f8" // alabaster
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
    ],
    greens: [
      "#b3cd6b", // wild willow 1
      "#b1cc68", // wild willow 2,
      "#a6c452", // celery,
      "#9db362", // olivine
      "#99af5b", // chelsea cucumber
      "#8ba546" // sushi
    ]
  }
};

export default theme;
