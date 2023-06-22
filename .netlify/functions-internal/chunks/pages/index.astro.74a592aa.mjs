/* empty css                              */ import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, b as addAttribute } from "../astro.80953456.mjs";
import { Tags } from "tabler-icons-react";
import { g as getBlogs, $ as $$Layout } from "./_blogId_.astro.7f1adcd0.mjs";
import "microcms-js-sdk";

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await getBlogs({ fields: ["id", "title", "eyecatch", "category"] });
  return renderTemplate`${renderComponent(
    $$result,
    "Layout",
    $$Layout,
    { title: "ASAHI NO NIWA" },
    {
      default: ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<section class="grid grid-cols-postCard gap-x-5 gap-y-3.5 sm:grid-cols-15 sm:gap-12">
    ${response.contents.map(
      (blog) => renderTemplate`<article class="flex flex-col gap-1 sm:gap-2">
          <figure>
            <a${addAttribute(blog.id, "href")}>
              <img${addAttribute(blog.eyecatch.url, "src")} class="rounded-sm w-full h-full object-cover shadow-md aspect-[16/9]">
            </a>
          </figure>
          <div class="flex items-center gap-2">
            ${renderComponent($$result2, "Tags", Tags, { size: "1.2rem", color: "#9CA3AF" })}
            <a href="/" class="text-gray-400 text-sm">
              ${blog.category.name}
            </a>
          </div>
          <a${addAttribute(blog.id, "href")}>
            <h2 class="font-bold text-lg">${blog.title}</h2>
          </a>
        </article>`
    )}
  </section>
`,
    }
  )}`;
}, "/Users/todaasahi/Desktop/blog/src/pages/index.astro");

const $$file = "/Users/todaasahi/Desktop/blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
