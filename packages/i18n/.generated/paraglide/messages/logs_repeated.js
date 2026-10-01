/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Logs_RepeatedInputs */

const en_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} repeated`)
};

const es_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} repetidas`)
};

const de_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} wiederholt`)
};

const fr_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} répétées`)
};

const it_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} ripetute`)
};

const nl_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} herhaald`)
};

const pl_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} powtórzeń`)
};

const pt_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} repetidas`)
};

const ru_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} повторов`)
};

const sv_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} upprepningar`)
};

const tr_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} tekrar`)
};

const zh_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`重复 ×${i?.count}`)
};

const ja_logs_repeated = /** @type {(inputs: Logs_RepeatedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`×${i?.count} 回繰り返し`)
};

/**
* | output |
* | --- |
* | "×{count} repeated" |
*
* @param {Logs_RepeatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_repeated = /** @type {((inputs: Logs_RepeatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_RepeatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_repeated(inputs)
	if (locale === "de") return de_logs_repeated(inputs)
	if (locale === "fr") return fr_logs_repeated(inputs)
	if (locale === "it") return it_logs_repeated(inputs)
	if (locale === "nl") return nl_logs_repeated(inputs)
	if (locale === "pl") return pl_logs_repeated(inputs)
	if (locale === "pt") return pt_logs_repeated(inputs)
	if (locale === "ru") return ru_logs_repeated(inputs)
	if (locale === "sv") return sv_logs_repeated(inputs)
	if (locale === "tr") return tr_logs_repeated(inputs)
	if (locale === "zh") return zh_logs_repeated(inputs)
	if (locale === "ja") return ja_logs_repeated(inputs)
	return en_logs_repeated(inputs)
});
