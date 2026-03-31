---
{"dg-publish":true,"dg-path":"Технологии/Obsidian/Альтернативные чекбоксы в Obsidian.md","permalink":"/Технологии/Obsidian/Альтернативные чекбоксы в Obsidian/","tags":["Obsidian","css","checkboxes"],"created":"2026-03-30T22:02:00","dg-note-properties":{"date":"2023-09-08","Класс":"[[24. Страница на сайт|Страница]]","published":"2026-03-30T22:02:00","Статус страницы":["закончено"],"tags":["Obsidian","css","checkboxes"]}}
---


По умолчанию [[Сайт/Технологии/Obsidian/Obsidian\|Obsidian]] поддерживает стандартные чекбоксы в формате Markdown:

```
- [ ] задача
- [x] выполненная задача
```

- [ ] задача
- [x] выполненная задача

Однако, при помощи CSS можно создавать свои собственные дополнительные чекбоксы с альтернативными значками, например, такие: 

![Скриншот кастомные чекбоксы.jpg\|Скриншот кастомные чекбоксы.jpg](/img/user/_/attachments/%D1%81%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%D1%8B/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%20%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%BD%D1%8B%D0%B5%20%D1%87%D0%B5%D0%BA%D0%B1%D0%BE%D0%BA%D1%81%D1%8B.jpg)

Некоторые темы для Обсидиана уже содержат встроенные альтернативные чекбоксы, однако можно прописать свои собственные правила для альтернативных чекбоксов, назначив им собственные цвета и иконки. Например, такой CSS-сниппет превращает чекбокс `- [h]` в красное сердечко: 

```css
input[data-task="h"]:checked,
li[data-task="h"] > input:checked,
li[data-task="h"] > p > input:checked {
  --checkbox-marker-color: transparent;
  border: none;
  border-radius: 0;
  background-image: none;
  background-color: currentColor;
  -webkit-mask-size: var(--checkbox-icon);
  -webkit-mask-position: 50% 50%;

  color: var(--color-red);
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='18' height='18' %3E%3Cpath fill='none' d='M0 0H24V24H0z'/%3E%3Cpath d='M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z'/%3E%3C/svg%3E");
}
```
Чтобы прописать правило для другого чекбокса, заменяем `"h"` на другой символ, `--color-red` на другой цвет, `-webkit-mask-image`указываем url нужной иконки. Url иконок можно найти на сайтах с бесплатными иконками, например, [Remix Icon](https://remixicon.com/) или [Lucide](https://lucide.dev/icons/).

Если надо сделать так, чтобы при клике на чекбокс он не менялся:

```css
.HyperMD-task-line[data-task="h"] > .task-list-label, 
input[data-task="h"],
li[data-task="h"] > input, 
li[data-task="h"] > p > input
 {
  pointer-events: none;
}
```

Внутри чекбокса безопаснее использовать букву, а не символ, так как некоторые символы могут конфликтовать с разметкой Markdown. 