/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Kind_MelonloaderInputs */

const en_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const es_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const de_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const fr_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const it_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const nl_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const pl_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const pt_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const ru_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const sv_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const tr_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const zh_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

const ja_logs_kind_melonloader = /** @type {(inputs: Logs_Kind_MelonloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MelonLoader`)
};

/**
* | output |
* | --- |
* | "MelonLoader" |
*
* @param {Logs_Kind_MelonloaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_kind_melonloader = /** @type {((inputs?: Logs_Kind_MelonloaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Kind_MelonloaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_kind_melonloader(inputs)
	if (locale === "de") return de_logs_kind_melonloader(inputs)
	if (locale === "fr") return fr_logs_kind_melonloader(inputs)
	if (locale === "it") return it_logs_kind_melonloader(inputs)
	if (locale === "nl") return nl_logs_kind_melonloader(inputs)
	if (locale === "pl") return pl_logs_kind_melonloader(inputs)
	if (locale === "pt") return pt_logs_kind_melonloader(inputs)
	if (locale === "ru") return ru_logs_kind_melonloader(inputs)
	if (locale === "sv") return sv_logs_kind_melonloader(inputs)
	if (locale === "tr") return tr_logs_kind_melonloader(inputs)
	if (locale === "zh") return zh_logs_kind_melonloader(inputs)
	if (locale === "ja") return ja_logs_kind_melonloader(inputs)
	return en_logs_kind_melonloader(inputs)
});
