/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Sum_UnityInputs */

const en_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const es_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const de_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const fr_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const it_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const nl_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const pl_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const pt_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const ru_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const sv_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const tr_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const zh_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

const ja_logs_sum_unity = /** @type {(inputs: Logs_Sum_UnityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unity`)
};

/**
* | output |
* | --- |
* | "Unity" |
*
* @param {Logs_Sum_UnityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_unity = /** @type {((inputs?: Logs_Sum_UnityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_UnityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_unity(inputs)
	if (locale === "de") return de_logs_sum_unity(inputs)
	if (locale === "fr") return fr_logs_sum_unity(inputs)
	if (locale === "it") return it_logs_sum_unity(inputs)
	if (locale === "nl") return nl_logs_sum_unity(inputs)
	if (locale === "pl") return pl_logs_sum_unity(inputs)
	if (locale === "pt") return pt_logs_sum_unity(inputs)
	if (locale === "ru") return ru_logs_sum_unity(inputs)
	if (locale === "sv") return sv_logs_sum_unity(inputs)
	if (locale === "tr") return tr_logs_sum_unity(inputs)
	if (locale === "zh") return zh_logs_sum_unity(inputs)
	if (locale === "ja") return ja_logs_sum_unity(inputs)
	return en_logs_sum_unity(inputs)
});
