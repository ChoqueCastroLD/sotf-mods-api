/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Channel_RedmanagerInputs */

const en_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const es_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const de_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const fr_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const it_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const nl_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const pl_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const pt_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const ru_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const sv_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const tr_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const zh_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

const ja_basecamp_channel_redmanager = /** @type {(inputs: Basecamp_Channel_RedmanagerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RedManager`)
};

/**
* | output |
* | --- |
* | "RedManager" |
*
* @param {Basecamp_Channel_RedmanagerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_channel_redmanager = /** @type {((inputs?: Basecamp_Channel_RedmanagerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Channel_RedmanagerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_channel_redmanager(inputs)
	if (locale === "de") return de_basecamp_channel_redmanager(inputs)
	if (locale === "fr") return fr_basecamp_channel_redmanager(inputs)
	if (locale === "it") return it_basecamp_channel_redmanager(inputs)
	if (locale === "nl") return nl_basecamp_channel_redmanager(inputs)
	if (locale === "pl") return pl_basecamp_channel_redmanager(inputs)
	if (locale === "pt") return pt_basecamp_channel_redmanager(inputs)
	if (locale === "ru") return ru_basecamp_channel_redmanager(inputs)
	if (locale === "sv") return sv_basecamp_channel_redmanager(inputs)
	if (locale === "tr") return tr_basecamp_channel_redmanager(inputs)
	if (locale === "zh") return zh_basecamp_channel_redmanager(inputs)
	if (locale === "ja") return ja_basecamp_channel_redmanager(inputs)
	return en_basecamp_channel_redmanager(inputs)
});
