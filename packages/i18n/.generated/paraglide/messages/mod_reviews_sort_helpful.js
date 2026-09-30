/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Reviews_Sort_HelpfulInputs */

const en_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most helpful`)
};

const es_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más útiles`)
};

const de_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hilfreichste`)
};

const fr_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus utiles`)
};

const it_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più utili`)
};

const nl_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuttigst`)
};

const pl_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najbardziej pomocne`)
};

const pt_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais úteis`)
};

const ru_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Самые полезные`)
};

const sv_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest hjälpsamma`)
};

const tr_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En faydalı`)
};

const zh_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最有帮助`)
};

const ja_mod_reviews_sort_helpful = /** @type {(inputs: Mod_Reviews_Sort_HelpfulInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参考になった順`)
};

/**
* | output |
* | --- |
* | "Most helpful" |
*
* @param {Mod_Reviews_Sort_HelpfulInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_reviews_sort_helpful = /** @type {((inputs?: Mod_Reviews_Sort_HelpfulInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Reviews_Sort_HelpfulInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_reviews_sort_helpful(inputs)
	if (locale === "de") return de_mod_reviews_sort_helpful(inputs)
	if (locale === "fr") return fr_mod_reviews_sort_helpful(inputs)
	if (locale === "it") return it_mod_reviews_sort_helpful(inputs)
	if (locale === "nl") return nl_mod_reviews_sort_helpful(inputs)
	if (locale === "pl") return pl_mod_reviews_sort_helpful(inputs)
	if (locale === "pt") return pt_mod_reviews_sort_helpful(inputs)
	if (locale === "ru") return ru_mod_reviews_sort_helpful(inputs)
	if (locale === "sv") return sv_mod_reviews_sort_helpful(inputs)
	if (locale === "tr") return tr_mod_reviews_sort_helpful(inputs)
	if (locale === "zh") return zh_mod_reviews_sort_helpful(inputs)
	if (locale === "ja") return ja_mod_reviews_sort_helpful(inputs)
	return en_mod_reviews_sort_helpful(inputs)
});
