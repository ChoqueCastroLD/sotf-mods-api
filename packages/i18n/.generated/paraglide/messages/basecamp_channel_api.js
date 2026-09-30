/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Channel_ApiInputs */

const en_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const es_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const de_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const fr_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const it_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const nl_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const pl_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const pt_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const ru_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const sv_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const tr_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const zh_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const ja_basecamp_channel_api = /** @type {(inputs: Basecamp_Channel_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

/**
* | output |
* | --- |
* | "API" |
*
* @param {Basecamp_Channel_ApiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_channel_api = /** @type {((inputs?: Basecamp_Channel_ApiInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Channel_ApiInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_channel_api(inputs)
	if (locale === "de") return de_basecamp_channel_api(inputs)
	if (locale === "fr") return fr_basecamp_channel_api(inputs)
	if (locale === "it") return it_basecamp_channel_api(inputs)
	if (locale === "nl") return nl_basecamp_channel_api(inputs)
	if (locale === "pl") return pl_basecamp_channel_api(inputs)
	if (locale === "pt") return pt_basecamp_channel_api(inputs)
	if (locale === "ru") return ru_basecamp_channel_api(inputs)
	if (locale === "sv") return sv_basecamp_channel_api(inputs)
	if (locale === "tr") return tr_basecamp_channel_api(inputs)
	if (locale === "zh") return zh_basecamp_channel_api(inputs)
	if (locale === "ja") return ja_basecamp_channel_api(inputs)
	return en_basecamp_channel_api(inputs)
});
