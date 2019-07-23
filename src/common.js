export const prepareTitle = title =>
  title.replace(/\\'/g, "'").replace(/\\n/g, " ");

export const prepareContent = title =>
  title
    .replace(/\\'/g, "'")
    .replace(/\\n/g, " ")
    .replace(/&amp;/g, "&");

export const slugify = text =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
