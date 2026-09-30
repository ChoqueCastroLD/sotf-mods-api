/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Category_LoreInputs */

const en_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lore and theme`)
};

const es_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lore y tema`)
};

const de_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lore und Thema`)
};

const fr_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lore et thème`)
};

const it_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lore e tema`)
};

const nl_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lore en thema`)
};

const pl_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lore i temat`)
};

const pt_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lore e tema`)
};

const ru_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лор и тема`)
};

const sv_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lore och tema`)
};

const tr_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hikâye ve tema`)
};

const zh_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`世界观与主题`)
};

const ja_jams_category_lore = /** @type {(inputs: Jams_Category_LoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`世界観とテーマ`)
};

/**
* | output |
* | --- |
* | "Lore and theme" |
*
* @param {Jams_Category_LoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_category_lore = /** @type {((inputs?: Jams_Category_LoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Category_LoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_category_lore(inputs)
	if (locale === "de") return de_jams_category_lore(inputs)
	if (locale === "fr") return fr_jams_category_lore(inputs)
	if (locale === "it") return it_jams_category_lore(inputs)
	if (locale === "nl") return nl_jams_category_lore(inputs)
	if (locale === "pl") return pl_jams_category_lore(inputs)
	if (locale === "pt") return pt_jams_category_lore(inputs)
	if (locale === "ru") return ru_jams_category_lore(inputs)
	if (locale === "sv") return sv_jams_category_lore(inputs)
	if (locale === "tr") return tr_jams_category_lore(inputs)
	if (locale === "zh") return zh_jams_category_lore(inputs)
	if (locale === "ja") return ja_jams_category_lore(inputs)
	return en_jams_category_lore(inputs)
});
