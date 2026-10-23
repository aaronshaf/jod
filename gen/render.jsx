import React from "react";
import { renderToString } from "react-dom/server";
import Helmet from "react-helmet";
import { PathContext } from "gatsby";
import Volume from "../src/templates/volume.js";
import Discourse from "../src/templates/discourse.js";
import NotFound from "../src/pages/404.js";
const T = { volume: Volume, discourse: Discourse, notfound: NotFound };
export function render(kind, path, props) {
  const C = T[kind];
  const body = renderToString(<PathContext.Provider value={path}><C {...props} /></PathContext.Provider>);
  const h = Helmet.renderStatic();
  return { body, head: h.title.toString() + h.meta.toString() + h.link.toString(), htmlAttrs: h.htmlAttributes.toString() };
}
