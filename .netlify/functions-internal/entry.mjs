import * as adapter from "@astrojs/netlify/netlify-functions.js";
import { renderers } from "./renderers.mjs";
import { g as deserializeManifest } from "./chunks/astro.80953456.mjs";
import "react";
import "react-dom/server";

const _page0 = () => import("./chunks/index@_@astro.c5385a4c.mjs");
const _page1 = () => import("./chunks/_blogId_@_@astro.ef500367.mjs");
const pageMap = new Map([
  ["src/pages/index.astro", _page0],
  ["src/pages/[blogId].astro", _page1],
]);
const _manifest = Object.assign(
  deserializeManifest({
    adapterName: "@astrojs/netlify/functions",
    routes: [
      { file: "", links: [], scripts: [], styles: [{ type: "external", src: "/_astro/_blogId_.a9535f06.css" }], routeData: { route: "/", type: "page", pattern: "^\\/$", segments: [], params: [], component: "src/pages/index.astro", pathname: "/", prerender: false, _meta: { trailingSlash: "ignore" } } },
      { file: "", links: [], scripts: [], styles: [{ type: "external", src: "/_astro/_blogId_.a9535f06.css" }], routeData: { route: "/[blogid]", type: "page", pattern: "^\\/([^/]+?)\\/?$", segments: [[{ content: "blogId", dynamic: true, spread: false }]], params: ["blogId"], component: "src/pages/[blogId].astro", prerender: false, _meta: { trailingSlash: "ignore" } } },
    ],
    base: "/",
    markdown: { drafts: false, syntaxHighlight: "shiki", shikiConfig: { langs: [], theme: "github-dark", wrap: false }, remarkPlugins: [], rehypePlugins: [], remarkRehype: {}, gfm: true, smartypants: true },
    pageMap: null,
    componentMetadata: [
      ["/Users/todaasahi/Desktop/blog/src/pages/[blogId].astro", { propagation: "none", containsHead: true }],
      ["/Users/todaasahi/Desktop/blog/src/pages/index.astro", { propagation: "none", containsHead: true }],
    ],
    renderers: [],
    clientDirectives: [
      ["idle", '(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();'],
      ["load", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'],
      ["media", '(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();'],
      ["only", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'],
      ["visible", '(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();'],
    ],
    entryModules: { "\u0000@astrojs-ssr-virtual-entry": "_@astrojs-ssr-virtual-entry.mjs", "\u0000@astro-renderers": "renderers.mjs", "/src/pages/index.astro": "chunks/pages/index.astro.94760fde.mjs", "\u0000@astro-page:src/pages/index@_@astro": "chunks/index@_@astro.c5385a4c.mjs", "\u0000@astro-page:src/pages/[blogId]@_@astro": "chunks/_blogId_@_@astro.ef500367.mjs", "@astrojs/react/client.js": "_astro/client.9291133d.js", "astro:scripts/before-hydration.js": "" },
    assets: ["/_astro/_blogId_.a9535f06.css", "/favicon.svg", "/_astro/client.9291133d.js"],
  }),
  {
    pageMap,
    renderers,
  }
);
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports["handler"];

const _start = "start";
if (_start in adapter) {
  adapter[_start](_manifest, _args);
}

export { handler, pageMap };
