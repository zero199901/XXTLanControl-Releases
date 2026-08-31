import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const locales = [
  { locale: 'zh-CN', slug: '', docs: 'https://xxtouch.app/docs/' },
  { locale: 'zh-TW', slug: 'zh-tw', docs: 'https://xxtouch.app/docs/zh-TW/' },
  { locale: 'en-US', slug: 'en', docs: 'https://xxtouch.app/docs/en/' },
  { locale: 'ja-JP', slug: 'ja', docs: 'https://xxtouch.app/docs/ja-JP/' },
  { locale: 'ko-KR', slug: 'ko', docs: 'https://xxtouch.app/docs/ko-KR/' },
  { locale: 'vi-VN', slug: 'vi', docs: 'https://xxtouch.app/docs/vi-VN/' },
  { locale: 'es-ES', slug: 'es', docs: 'https://xxtouch.app/docs/es-ES/' },
  { locale: 'pt-BR', slug: 'pt-br', docs: 'https://xxtouch.app/docs/pt-BR/' },
  { locale: 'ru-RU', slug: 'ru', docs: 'https://xxtouch.app/docs/ru-RU/' },
  { locale: 'fr-FR', slug: 'fr', docs: 'https://xxtouch.app/docs/fr-FR/' },
  { locale: 'de-DE', slug: 'de', docs: 'https://xxtouch.app/docs/de-DE/' }
];

const dist = new URL('../dist/', import.meta.url);
const publicDir = new URL('../public/', import.meta.url);
const rawBase = process.env.BASE_PATH?.trim() || '/';
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}/`;
const errors = [];

for (const entry of locales) {
  const pagePath = entry.slug ? join(entry.slug, 'index.html') : 'index.html';
  let html;
  try {
    html = await readFile(new URL(pagePath, dist), 'utf8');
  } catch (error) {
    errors.push(`${pagePath}: ${error.message}`);
    continue;
  }

  const expectations = [
    `<html lang="${entry.locale}"`,
    `href="${entry.docs}"`,
    `${base}screenshot-002.png`,
    `${base}screenshot-002-dark.png`,
    '<meta name="description"',
    '<title>'
  ];
  for (const expected of expectations) {
    if (!html.includes(expected)) {
      errors.push(`${pagePath}: missing ${expected}`);
    }
  }

  for (const alternate of locales) {
    if (!html.includes(`hreflang="${alternate.locale}"`)) {
      errors.push(`${pagePath}: missing hreflang ${alternate.locale}`);
    }
  }
  if (!html.includes('hreflang="x-default"')) {
    errors.push(`${pagePath}: missing hreflang x-default`);
  }

  const currentLanguageHref = entry.slug ? `${base}${entry.slug}/` : base;
  const currentLanguageLink = `<a href="${currentLanguageHref}" class="language-menu-active" lang="${entry.locale}" hreflang="${entry.locale}" aria-current="page">`;
  if (!html.includes('<nav class="language-menu"') || !html.includes('<summary class="language-menu-trigger">')) {
    errors.push(`${pagePath}: missing compact language menu`);
  }
  if (!html.includes(currentLanguageLink)) {
    errors.push(`${pagePath}: missing active language link for ${entry.locale}`);
  }
}

for (const screenshot of ['screenshot-002.png', 'screenshot-002-dark.png']) {
  try {
    await access(new URL(screenshot, publicDir));
  } catch {
    errors.push(`public/${screenshot}: missing screenshot asset`);
  }
}

if (errors.length > 0) {
  throw new Error(`Localized site verification failed:\n${errors.join('\n')}`);
}

console.log(`Verified ${locales.length} localized routes, metadata, documentation links, screenshots, and language menu states.`);
