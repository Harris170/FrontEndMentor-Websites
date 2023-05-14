import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index2.js";
const card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap");:root{--Light-Cyan:hsl(193, 38%, 86%);--Neon-Green:hsl(150, 100%, 66%);--Grayish-Blue:hsl(217, 19%, 38%);--Dark-Grayish-Blue:hsl(217, 19%, 24%);--Dark-Blue:hsl(218, 23%, 16%);--fs-quote:28px;--ff:"Manrope", sans-serif}span.svelte-h1e97a::selection,p.svelte-h1e97a::selection{background-color:var(--Neon-Green);color:var(--Dark-Blue)}img.svelte-h1e97a{user-select:none}div.svelte-h1e97a{display:flex;flex-direction:column;justify-content:center;align-items:center}.card.svelte-h1e97a{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:var(--ff);background-color:var(--Dark-Grayish-Blue);border-radius:1rem;padding:3rem;padding-bottom:4.25rem;width:min-content;box-shadow:0.5rem 0.5rem 3.125rem hsl(215, 23%, 14%)}span.svelte-h1e97a{color:var(--Neon-Green);font-size:0.75rem;letter-spacing:0.375rem;text-transform:uppercase;text-align:center}p.svelte-h1e97a,.marks.svelte-h1e97a{font-size:var(--fs-quote);font-weight:800;color:var(--Light-Cyan);text-align:center}.marks.svelte-h1e97a{color:var(--Neon-Green)}.dice-btn.svelte-h1e97a{margin-top:-1.875rem;border:none;border-radius:50%;background:var(--Neon-Green);width:3.75rem;height:3.75rem;transition:0.15s ease}.dice-btn.svelte-h1e97a:hover{cursor:pointer;box-shadow:0 2px 16px 2px var(--Neon-Green)}.img-mobile.svelte-h1e97a{display:none}@media(max-width: 768px){.img-desktop.svelte-h1e97a{display:none}.img-mobile.svelte-h1e97a{display:block}}',
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let advice_number = 0;
  let quote = "Click the dice, get an advice";
  $$result.css.add(css$1);
  return `<div class="svelte-h1e97a"><div class="card svelte-h1e97a"><span class="svelte-h1e97a">Advice #${escape(advice_number)}</span>
    <p class="svelte-h1e97a"><span class="marks svelte-h1e97a">&quot;</span>${escape(quote)}<span class="marks svelte-h1e97a">&quot;</span></p>
    <img class="img-desktop svelte-h1e97a" src="/src/images/pattern-divider-desktop.svg" alt="pattern-divider">
    <img class="img-mobile svelte-h1e97a" src="/src/images/pattern-divider-mobile.svg" alt="pattern-divider"></div>
  <button class="dice-btn svelte-h1e97a"><img src="/src/images/icon-dice.svg" alt="dice-icon" class="svelte-h1e97a"></button>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1ff3rsw{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:90vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="svelte-1ff3rsw">${validate_component(Card, "Card").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
