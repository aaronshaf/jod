const cheerio = require("cheerio");

const prepareContent = content =>
  unescape(
    content
      .replace(/\\n/g, " ")
      .replace(/\\r/g, " ")
      .replace(/\\'/g, "'")
      .replace(/\\/g, "")
  );

const allPreviousChildren = node => {
  // including text nodes
  const previousChildren = [];
  do {
    previousChildren.unshift(node);
  } while ((node = node.previousSibling));
  return previousChildren;
};

const parseDiscourseContent = content => {
  const $ = cheerio.load(
    `<div class="unsorted-pages">${content}</div><div class="sorted-pages" />`,
    {
      normalizeWhitespace: true,
      xmlMode: false,
      decodeEntities: false
    }
  );

  $("a").remove();

  // Split paragraphs by page breaks
  $("p > .pagebreak").each(function() {
    const parentP = $(this).parent("p");
    const newP = cheerio.load("<p>");
    if (parentP.hasClass("continued")) {
      newP("p").addClass("continued");
    }
    newP("p").append(...allPreviousChildren(this));
    newP("p").insertBefore(parentP);
    $(parentP).addClass("continued");
  });

  // Split paragraphs by column breaks
  $("p > .columnbreak").each(function() {
    const parentP = $(this).parent("p");
    const newP = cheerio.load("<p>");
    if (parentP.hasClass("continued")) {
      newP("p").addClass("continued");
    }
    newP("p").append(allPreviousChildren(this));
    newP("p").insertBefore(parentP);
    $(parentP).addClass("continued");
  });

  // Sort paragraphs by column and page breaks
  $(".unsorted-pages .pagebreak,.unsorted-pages .columnbreak").each(function() {
    let _break = this;
    const div = cheerio.load("<div>");
    div("div").addClass("column");

    if (this.parentNode.tagName.toLowerCase() == "p") {
      _break = this.parentNode;
    }

    div("div").append(allPreviousChildren(_break));
    $(".sorted-pages").append(div("div"));
  });

  // Sort any remaining unsorted paragraphs
  if ($(".unsorted-pages p").length) {
    const column = cheerio.load("<div>");
    column("div").addClass("column");
    $(".unsorted-pages p").appendTo(column("div"));
    column("div").appendTo($(".sorted-pages"));
  }

  // Sort columns in to pages
  let columns = 0;
  $(".sorted-pages > .column").each(function() {
    columns++;
    if (columns % 2 == 1) {
      $(".sorted-pages").append(`<div class="page"></div>`);
    }
    $(".sorted-pages > .page")
      .last()
      .append(this);
  });

  $(".sorted-pages > .page > .column:first-child").each(function() {
    $(this).addClass("left");
  });

  return $.html(".sorted-pages");
};

module.exports = content => parseDiscourseContent(prepareContent(content));
