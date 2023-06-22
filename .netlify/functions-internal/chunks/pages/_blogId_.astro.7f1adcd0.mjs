/* empty css                              */ import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, u as unescapeHTML } from "../astro.80953456.mjs";
import { createClient } from "microcms-js-sdk";

const $$Astro$2 = createAstro();
const $$SiteHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SiteHeader;
  return renderTemplate`${maybeRenderHead($$result)}<header class="w-full shadow-sm h-16 bg-white">
  <nav class="flex justify-between px-10 py-6 sm:w-11/12 sm:ms-auto sm:me-auto sm:max-w-5xl">
    <div>
      <h1 class="font-bold text-sm"><a href="/">ASAHI NO NIWA</a></h1>
    </div>
    <ui class="list-none flex font-bold text-sm items-center">
      <li class="h-12"><a class="ps-2 h-full" href="/">Work</a></li>
      <li class="h-12"><a class="ps-2 h-full" href="/">Blog</a></li>
    </ui>
  </nav>
</header>`;
}, "/Users/todaasahi/Desktop/blog/src/components/SiteHeader.astro");

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
  ${renderHead($$result)}</head>
  <body>
    ${renderComponent($$result, "SiteHeader", $$SiteHeader, {})}
    <main class="ps-2 pe-2 pt-8 w-full sm:w-11/12 sm:max-w-5xl sm:ms-auto sm:me-auto sm:pe-auto">
      ${renderSlot($$result, $$slots["default"])}
    </main>
  </body></html>`;
}, "/Users/todaasahi/Desktop/blog/src/layouts/Layout.astro");

const client = createClient({
  serviceDomain: "asahinoniwa",
  apiKey: "iIBKWjhHXjCtBaypnYGgFy4Y2MyMwyrrX19H",
});
const getBlogs = async (queries) => {
  return await client.get({ endpoint: "blogs", queries });
};
const getBlogDetail = async (contentId, queries) => {
  return await client.getListDetail({
    endpoint: "blogs",
    contentId,
    queries,
  });
};

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await getBlogs({ fields: "id" });
  return response.contents.map((path) => ({
    params: {
      blogId: path.id,
    },
  }));
}
const $$blogId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blogId;
  const { blogId } = Astro2.params;
  if (!blogId) {
    throw Error();
  }
  const blog = await getBlogDetail(blogId);
  return renderTemplate`${renderComponent(
    $$result,
    "Layout",
    $$Layout,
    { title: "ASAHI NO NIWA" },
    {
      default: ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<img${addAttribute(blog.eyecatch.url, "src")} class="rounded-sm w-full h-full object-cover shadow-md aspect-[16/9] sm:aspect-[2/1]">
  <div class="leading-relaxed tracking-widest">${unescapeHTML(blog.content)}</div>
`,
    }
  )}`;
}, "/Users/todaasahi/Desktop/blog/src/pages/[blogId].astro");

const $$file = "/Users/todaasahi/Desktop/blog/src/pages/[blogId].astro";
const $$url = "/[blogId]";

const _blogId_ = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$blogId,
      file: $$file,
      getStaticPaths,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

export { $$Layout as $, _blogId_ as _, getBlogs as g };
