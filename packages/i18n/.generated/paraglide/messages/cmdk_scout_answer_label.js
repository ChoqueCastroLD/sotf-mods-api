/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_Answer_LabelInputs */

const en_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const es_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const de_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const fr_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const it_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const nl_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const pl_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const pt_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const ru_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const sv_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const tr_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const zh_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

const ja_cmdk_scout_answer_label = /** @type {(inputs: Cmdk_Scout_Answer_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scout`)
};

/**
* | output |
* | --- |
* | "Scout" |
*
* @param {Cmdk_Scout_Answer_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_answer_label = /** @type {((inputs?: Cmdk_Scout_Answer_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_Answer_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_answer_label(inputs)
	if (locale === "de") return de_cmdk_scout_answer_label(inputs)
	if (locale === "fr") return fr_cmdk_scout_answer_label(inputs)
	if (locale === "it") return it_cmdk_scout_answer_label(inputs)
	if (locale === "nl") return nl_cmdk_scout_answer_label(inputs)
	if (locale === "pl") return pl_cmdk_scout_answer_label(inputs)
	if (locale === "pt") return pt_cmdk_scout_answer_label(inputs)
	if (locale === "ru") return ru_cmdk_scout_answer_label(inputs)
	if (locale === "sv") return sv_cmdk_scout_answer_label(inputs)
	if (locale === "tr") return tr_cmdk_scout_answer_label(inputs)
	if (locale === "zh") return zh_cmdk_scout_answer_label(inputs)
	if (locale === "ja") return ja_cmdk_scout_answer_label(inputs)
	return en_cmdk_scout_answer_label(inputs)
});
