/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Do_ContrastInputs */

const en_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use the Night files on dark backgrounds and the Day files on light ones.`)
};

const es_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa los archivos Noche sobre fondos oscuros y los Día sobre fondos claros.`)
};

const de_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutze die Night-Dateien auf dunklen und die Day-Dateien auf hellen Hintergründen.`)
};

const fr_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez les fichiers Nuit sur fond sombre et les fichiers Jour sur fond clair.`)
};

const it_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa i file Notte su sfondi scuri e i file Giorno su sfondi chiari.`)
};

const nl_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik de Night-bestanden op donkere en de Day-bestanden op lichte achtergronden.`)
};

const pl_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pliki Noc stosuj na ciemnych tłach, a pliki Dzień na jasnych.`)
};

const pt_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use os arquivos Noite em fundos escuros e os arquivos Dia em fundos claros.`)
};

const ru_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файлы «Ночь» — на тёмном фоне, файлы «День» — на светлом.`)
};

const sv_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd Night-filerna på mörka och Day-filerna på ljusa bakgrunder.`)
};

const tr_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koyu arka planlarda Night, açık arka planlarda Day dosyalarını kullan.`)
};

const zh_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`深色背景用夜间版文件，浅色背景用日间版文件。`)
};

const ja_content_brand_do_contrast = /** @type {(inputs: Content_Brand_Do_ContrastInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暗い背景には Night 版、明るい背景には Day 版のファイルを使ってください。`)
};

/**
* | output |
* | --- |
* | "Use the Night files on dark backgrounds and the Day files on light ones." |
*
* @param {Content_Brand_Do_ContrastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_do_contrast = /** @type {((inputs?: Content_Brand_Do_ContrastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Do_ContrastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_do_contrast(inputs)
	if (locale === "de") return de_content_brand_do_contrast(inputs)
	if (locale === "fr") return fr_content_brand_do_contrast(inputs)
	if (locale === "it") return it_content_brand_do_contrast(inputs)
	if (locale === "nl") return nl_content_brand_do_contrast(inputs)
	if (locale === "pl") return pl_content_brand_do_contrast(inputs)
	if (locale === "pt") return pt_content_brand_do_contrast(inputs)
	if (locale === "ru") return ru_content_brand_do_contrast(inputs)
	if (locale === "sv") return sv_content_brand_do_contrast(inputs)
	if (locale === "tr") return tr_content_brand_do_contrast(inputs)
	if (locale === "zh") return zh_content_brand_do_contrast(inputs)
	if (locale === "ja") return ja_content_brand_do_contrast(inputs)
	return en_content_brand_do_contrast(inputs)
});
