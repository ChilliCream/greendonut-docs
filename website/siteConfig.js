/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible

const repoUrl = "https://github.com/ChilliCream/greendonut";
const organizationUrl = "https://chillicream.com";
const blogUrl = organizationUrl + "/blog";
const shopUrl = "https://shop.chillicream.com";

const siteConfig = {
  title: "Green Donut",
  tagline: "A port of facebook's DataLoader utility, written in C# for .NET Core and .NET Framework.",
  url: "https://greendonut.io",
  cname: "greendonut.io",
  baseUrl: "/",
  blogUrl,
  repoUrl,
  shopUrl,
  gaTrackingId: "UA-72800164-4",
  projectName: "greendonut-docs",
  realProjectName: "greendonut",
  organizationName: "chillicream",
  organizationTitle: "ChilliCream",
  organizationUrl,
  headerLinks: [{
      doc: "introduction",
      href: "/docs",
      label: "Docs"
    },
    {
      href: blogUrl,
      label: "Blog",
      external: true
    },
    {
      href: shopUrl,
      label: "Shop",
      external: true
    },
    {
      href: repoUrl,
      label: "GitHub",
      external: true
    },
    {
      search: false
    }
  ],
  headerIcon: "img/signet.svg",
  footerIcon: "img/signet.svg",
  favicon: "img/favicon.png",
  colors: {
    primaryColor: "#e7e1c9",
    secondaryColor: "#e7e1c9"
  },
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Luckiest+Guy:700,400",
    "/css/code-block-buttons.css"
  ],
  copyright: `Copyright © ${new Date().getFullYear()}`,
  editUrl: "https://github.com/ChilliCream/greendonut-docs/edit/master/docs/",
  algolia: {
    apiKey: "f0ea26f0ddddbae1dde6deb9213b0bb1",
    indexName: "greendonut",
    algoliaOptions: {
      facetFilters: ["language:LANGUAGE", "version:VERSION"],
    },
  },
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "atelier-dune-light"
  },
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js",
  ],
  onPageNav: "separate",
  twitter: true,
  twitterUsername: "Chilli_Cream",
  twitterImage: "img/cupcake.png",
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  enableUpdateTime: true,
  enableUpdateBy: true
};

module.exports = siteConfig;
