/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Category_OverallInputs */

const en_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overall`)
};

const es_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`General`)
};

const de_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesamt`)
};

const fr_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Général`)
};

const it_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Complessivo`)
};

const nl_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Algemeen`)
};

const pl_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogółem`)
};

const pt_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geral`)
};

const ru_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Общий зачёт`)
};

const sv_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Totalt`)
};

const tr_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Genel`)
};

const zh_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`总评`)
};

const ja_jams_category_overall = /** @type {(inputs: Jams_Category_OverallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`総合`)
};

/**
* | output |
* | --- |
* | "Overall" |
*
* @param {Jams_Category_OverallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_category_overall = /** @type {((inputs?: Jams_Category_OverallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Category_OverallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_category_overall(inputs)
	if (locale === "de") return de_jams_category_overall(inputs)
	if (locale === "fr") return fr_jams_category_overall(inputs)
	if (locale === "it") return it_jams_category_overall(inputs)
	if (locale === "nl") return nl_jams_category_overall(inputs)
	if (locale === "pl") return pl_jams_category_overall(inputs)
	if (locale === "pt") return pt_jams_category_overall(inputs)
	if (locale === "ru") return ru_jams_category_overall(inputs)
	if (locale === "sv") return sv_jams_category_overall(inputs)
	if (locale === "tr") return tr_jams_category_overall(inputs)
	if (locale === "zh") return zh_jams_category_overall(inputs)
	if (locale === "ja") return ja_jams_category_overall(inputs)
	return en_jams_category_overall(inputs)
});
