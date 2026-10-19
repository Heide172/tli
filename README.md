# tli

Справочник по Torchlight Infinite: характеристики и формулы, механики эндгейма, фарм, крафт. Публикуется на https://tli.atonyan.dev через GitHub Pages (workflow `.github/workflows/pages.yml`).

Стек: Vite, React 19 с React Compiler, TypeScript, TanStack Router и Query, jotai, Tailwind 4, Base UI, react-hook-form, dayjs, reactuse. Контент лежит в `src/data/*.ts`, к рендеру его готовят query-функции в `src/queries/content.ts`.

```
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ (+ 404.html для SPA-роутов на Pages)
npm run lint       # oxlint
npm run format     # prettier
npm run typecheck
```
