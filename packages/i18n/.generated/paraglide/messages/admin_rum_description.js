/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_DescriptionInputs */

const en_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core Web Vitals from real visitors: the 75th percentile per page template.`)
};

const es_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core Web Vitals de visitantes reales: el percentil 75 por plantilla de página.`)
};

const de_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core Web Vitals echter Besucher: das 75. Perzentil pro Seitenvorlage.`)
};

const fr_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core Web Vitals des vrais visiteurs : le 75e centile par modèle de page.`)
};

const it_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core Web Vitals dei visitatori reali: il 75° percentile per modello di pagina.`)
};

const nl_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core Web Vitals van echte bezoekers: het 75e percentiel per paginasjabloon.`)
};

const pl_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core Web Vitals od prawdziwych odwiedzających: 75. percentyl dla każdego szablonu strony.`)
};

const pt_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core Web Vitals de visitantes reais: o percentil 75 por modelo de página.`)
};

const ru_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core Web Vitals от реальных посетителей: 75-й перцентиль по шаблонам страниц.`)
};

const sv_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Core Web Vitals från riktiga besökare: 75:e percentilen per sidmall.`)
};

const tr_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerçek ziyaretçilerden Core Web Vitals: sayfa şablonu başına 75. yüzdelik.`)
};

const zh_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`来自真实访客的 Core Web Vitals：各页面模板的第 75 百分位。`)
};

const ja_admin_rum_description = /** @type {(inputs: Admin_Rum_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実際の訪問者の Core Web Vitals：ページテンプレートごとの 75 パーセンタイル。`)
};

/**
* | output |
* | --- |
* | "Core Web Vitals from real visitors: the 75th percentile per page template." |
*
* @param {Admin_Rum_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_description = /** @type {((inputs?: Admin_Rum_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_description(inputs)
	if (locale === "de") return de_admin_rum_description(inputs)
	if (locale === "fr") return fr_admin_rum_description(inputs)
	if (locale === "it") return it_admin_rum_description(inputs)
	if (locale === "nl") return nl_admin_rum_description(inputs)
	if (locale === "pl") return pl_admin_rum_description(inputs)
	if (locale === "pt") return pt_admin_rum_description(inputs)
	if (locale === "ru") return ru_admin_rum_description(inputs)
	if (locale === "sv") return sv_admin_rum_description(inputs)
	if (locale === "tr") return tr_admin_rum_description(inputs)
	if (locale === "zh") return zh_admin_rum_description(inputs)
	if (locale === "ja") return ja_admin_rum_description(inputs)
	return en_admin_rum_description(inputs)
});
