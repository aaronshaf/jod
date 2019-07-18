export const prepareTitle = title => title.replace(/\\'/g, "'");

export const prepareContent = title =>
  title.replace(/\\'/g, "'").replace(/\\n/g, " ");
