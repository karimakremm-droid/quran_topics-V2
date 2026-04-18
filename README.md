# مواضيع القرآن الكريم — GitHub Pages

## 3 ملفات على GitHub Pages:
- `index.html` (6MB - كل شيء inline)
- `manifest.json`
- `sw.js`
- `icon-192.png` / `icon-512.png`

## مجلد `tafsir/` → ارفعه على repo منفصل واستخدم jsDelivr:

1. ارفع مجلد `tafsir/` على repo GitHub
2. عدّل السطر الأول في `index.html`:
```js
var __TAFSIR_BASE__ = 'https://cdn.jsdelivr.net/gh/USERNAME/REPO@main/tafsir';
```
