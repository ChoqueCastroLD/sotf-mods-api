/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_TaxonomyInputs */

const en_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taxonomy`)
};

const es_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taxonomía`)
};

const de_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taxonomie`)
};

const fr_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taxonomie`)
};

const it_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tassonomia`)
};

const nl_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taxonomie`)
};

const pl_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taksonomia`)
};

const pt_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taxonomia`)
};

const ru_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Таксономия`)
};

const sv_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taxonomi`)
};

const tr_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sınıflandırma`)
};

const zh_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类体系`)
};

const ja_console_nav_taxonomy = /** @type {(inputs: Console_Nav_TaxonomyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分類`)
};

/**
* | output |
* | --- |
* | "Taxonomy" |
*
* @param {Console_Nav_TaxonomyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_taxonomy = /** @type {((inputs?: Console_Nav_TaxonomyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_TaxonomyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_taxonomy(inputs)
	if (locale === "de") return de_console_nav_taxonomy(inputs)
	if (locale === "fr") return fr_console_nav_taxonomy(inputs)
	if (locale === "it") return it_console_nav_taxonomy(inputs)
	if (locale === "nl") return nl_console_nav_taxonomy(inputs)
	if (locale === "pl") return pl_console_nav_taxonomy(inputs)
	if (locale === "pt") return pt_console_nav_taxonomy(inputs)
	if (locale === "ru") return ru_console_nav_taxonomy(inputs)
	if (locale === "sv") return sv_console_nav_taxonomy(inputs)
	if (locale === "tr") return tr_console_nav_taxonomy(inputs)
	if (locale === "zh") return zh_console_nav_taxonomy(inputs)
	if (locale === "ja") return ja_console_nav_taxonomy(inputs)
	return en_console_nav_taxonomy(inputs)
});
