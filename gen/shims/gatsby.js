import React, { createContext, useContext } from "react";
export const PathContext = createContext("/");
export const graphql = () => null;
const SITE = { site: { siteMetadata: { title: "Journal of Discourses", description: "Public sermons by Mormon leaders from 1851-1886", author: "@mrmdotorg", siteUrl: "https://jod.mrm.org" } } };
export const useStaticQuery = () => SITE;
export const slash = to => {
  const m = /^([^#?]*)(.*)$/.exec(to);
  let p = m[1];
  if (p && !p.endsWith("/") && !/\.[a-z0-9]+$/i.test(p)) p += "/";
  return p + m[2];
};
export const Link = React.forwardRef(function Link({ to, activeClassName, partiallyActive, className, ...rest }, ref) {
  const path = useContext(PathContext);
  const href = slash(to);
  const exact = path === href;
  const partial = partiallyActive && path.startsWith(href);
  const cls = [className, (exact || partial) && activeClassName].filter(Boolean).join(" ") || undefined;
  return <a ref={ref} {...rest} className={cls} href={href} aria-current={exact ? "page" : undefined} />;
});
export default { Link, graphql, useStaticQuery };
