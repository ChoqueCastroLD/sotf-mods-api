/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Kind_RedloaderInputs */

const en_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const es_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const de_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const fr_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const it_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const nl_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const pl_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const pt_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const ru_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const sv_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const tr_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const zh_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

const ja_logs_kind_redloader = /** @type {(inputs: Logs_Kind_RedloaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedLoader`)
};

/**
* | output |
* | --- |
* | "RedLoader" |
*
* @param {Logs_Kind_RedloaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_kind_redloader = /** @type {((inputs?: Logs_Kind_RedloaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Kind_RedloaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_kind_redloader(inputs)
	if (locale === "de") return de_logs_kind_redloader(inputs)
	if (locale === "fr") return fr_logs_kind_redloader(inputs)
	if (locale === "it") return it_logs_kind_redloader(inputs)
	if (locale === "nl") return nl_logs_kind_redloader(inputs)
	if (locale === "pl") return pl_logs_kind_redloader(inputs)
	if (locale === "pt") return pt_logs_kind_redloader(inputs)
	if (locale === "ru") return ru_logs_kind_redloader(inputs)
	if (locale === "sv") return sv_logs_kind_redloader(inputs)
	if (locale === "tr") return tr_logs_kind_redloader(inputs)
	if (locale === "zh") return zh_logs_kind_redloader(inputs)
	if (locale === "ja") return ja_logs_kind_redloader(inputs)
	return en_logs_kind_redloader(inputs)
});
