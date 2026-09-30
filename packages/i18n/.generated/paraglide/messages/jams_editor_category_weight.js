/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Category_WeightInputs */

const en_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weight`)
};

const es_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peso`)
};

const de_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gewicht`)
};

const fr_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poids`)
};

const it_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peso`)
};

const nl_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gewicht`)
};

const pl_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waga`)
};

const pt_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peso`)
};

const ru_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вес`)
};

const sv_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vikt`)
};

const tr_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ağırlık`)
};

const zh_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`权重`)
};

const ja_jams_editor_category_weight = /** @type {(inputs: Jams_Editor_Category_WeightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重み`)
};

/**
* | output |
* | --- |
* | "Weight" |
*
* @param {Jams_Editor_Category_WeightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_category_weight = /** @type {((inputs?: Jams_Editor_Category_WeightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Category_WeightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_category_weight(inputs)
	if (locale === "de") return de_jams_editor_category_weight(inputs)
	if (locale === "fr") return fr_jams_editor_category_weight(inputs)
	if (locale === "it") return it_jams_editor_category_weight(inputs)
	if (locale === "nl") return nl_jams_editor_category_weight(inputs)
	if (locale === "pl") return pl_jams_editor_category_weight(inputs)
	if (locale === "pt") return pt_jams_editor_category_weight(inputs)
	if (locale === "ru") return ru_jams_editor_category_weight(inputs)
	if (locale === "sv") return sv_jams_editor_category_weight(inputs)
	if (locale === "tr") return tr_jams_editor_category_weight(inputs)
	if (locale === "zh") return zh_jams_editor_category_weight(inputs)
	if (locale === "ja") return ja_jams_editor_category_weight(inputs)
	return en_jams_editor_category_weight(inputs)
});
