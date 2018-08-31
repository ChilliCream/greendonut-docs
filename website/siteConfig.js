/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible

const repoUrl = "https://github.com/ChilliCream/greendonut";

const siteConfig = {
  title: "Green Donut",
  tagline: "A DataLoader implementation for .net core and classic",
  url: "https://greendonut.io",
  cname: "greendonut.io",
  baseUrl: "/",
  gaTrackingId: "UA-72800164-4",
  projectName: "greendonut-docs",
  organizationName: "chillicream",
  repoUrl,
  headerLinks: [{
      doc: "introduction",
      label: "Docs"
    },
    {
      blog: true,
      label: "Blog"
    },
    //{ search: false },
    {
      href: repoUrl,
      label: "GitHub"
    }
  ],
  headerIcon: "img/signet.svg",
  footerIcon: "img/signet.svg",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#e7e1c9",
    secondaryColor: "#e7e1c9"
  },
  stylesheets: ["https://fonts.googleapis.com/css?family=Luckiest+Guy:700,400"],
  copyright: "Copyright © " + new Date().getFullYear() + " ChilliCream",
  editUrl: "https://github.com/ChilliCream/greendonut-docs/edit/master/docs/",
  /*algolia: {
    apiKey: "bf33c17016c2932f4993e27c5d3aba72",
    indexName: "..."
  },*/
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "atelier-dune-light"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  onPageNav: "separate",
  cleanUrl: true
};

module.exports = siteConfig;