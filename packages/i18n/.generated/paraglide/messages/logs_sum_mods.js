/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Logs_Sum_ModsInputs */

const en_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods (${i?.count})`)
};

const es_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods (${i?.count})`)
};

const de_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods (${i?.count})`)
};

const fr_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods (${i?.count})`)
};

const it_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod (${i?.count})`)
};

const nl_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods (${i?.count})`)
};

const pl_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mody (${i?.count})`)
};

const pt_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods (${i?.count})`)
};

const ru_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Моды (${i?.count})`)
};

const sv_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Moddar (${i?.count})`)
};

const tr_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modlar (${i?.count})`)
};

const zh_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`模组（${i?.count}）`)
};

const ja_logs_sum_mods = /** @type {(inputs: Logs_Sum_ModsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`MOD（${i?.count}）`)
};

/**
* | output |
* | --- |
* | "Mods ({count})" |
*
* @param {Logs_Sum_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_sum_mods = /** @type {((inputs: Logs_Sum_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_sum_mods(inputs)
	if (locale === "de") return de_logs_sum_mods(inputs)
	if (locale === "fr") return fr_logs_sum_mods(inputs)
	if (locale === "it") return it_logs_sum_mods(inputs)
	if (locale === "nl") return nl_logs_sum_mods(inputs)
	if (locale === "pl") return pl_logs_sum_mods(inputs)
	if (locale === "pt") return pt_logs_sum_mods(inputs)
	if (locale === "ru") return ru_logs_sum_mods(inputs)
	if (locale === "sv") return sv_logs_sum_mods(inputs)
	if (locale === "tr") return tr_logs_sum_mods(inputs)
	if (locale === "zh") return zh_logs_sum_mods(inputs)
	if (locale === "ja") return ja_logs_sum_mods(inputs)
	return en_logs_sum_mods(inputs)
});
