# D-E — ведущий праздников

Маркетинговый сайт на [Astro](https://astro.build) для русскоязычного ведущего праздников. Контент в Markdown и JSON — без CMS.

## Страницы

| URL | Страница |
|-----|----------|
| `/` | Главная |
| `/uslugi/` | Услуги |
| `/obo-mne/` | Обо мне |
| `/galereya/` | Галерея |
| `/otzyvy/` | Отзывы |
| `/ceny/` | Цены и пакеты |
| `/kontakty/` | Контакты |

## Как править контент

- **Тексты страниц:** `src/content/*.md` (заголовки, лиды, абзацы)
- **Контакты и бренд:** `src/data/site.ts`
- **Услуги:** `src/data/services.json`
- **Пакеты/цены:** `src/data/packages.json`
- **Отзывы:** `src/data/reviews.json`
- **Галерея (плейсхолдеры):** `src/data/gallery.json` — позже положите фото в `public/gallery/` и подключите пути

## Команды

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

Требуется Node.js 22+.
