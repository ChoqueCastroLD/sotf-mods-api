/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_ChannelInputs */

const en_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Channel`)
};

const es_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

const de_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanal`)
};

const fr_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

const it_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canale`)
};

const nl_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanaal`)
};

const pl_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanał`)
};

const pt_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canal`)
};

const ru_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Канал`)
};

const sv_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanal`)
};

const tr_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanal`)
};

const zh_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`渠道`)
};

const ja_basecamp_analytics_channel = /** @type {(inputs: Basecamp_Analytics_ChannelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャネル`)
};

/**
* | output |
* | --- |
* | "Channel" |
*
* @param {Basecamp_Analytics_ChannelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_channel = /** @type {((inputs?: Basecamp_Analytics_ChannelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_ChannelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_channel(inputs)
	if (locale === "de") return de_basecamp_analytics_channel(inputs)
	if (locale === "fr") return fr_basecamp_analytics_channel(inputs)
	if (locale === "it") return it_basecamp_analytics_channel(inputs)
	if (locale === "nl") return nl_basecamp_analytics_channel(inputs)
	if (locale === "pl") return pl_basecamp_analytics_channel(inputs)
	if (locale === "pt") return pt_basecamp_analytics_channel(inputs)
	if (locale === "ru") return ru_basecamp_analytics_channel(inputs)
	if (locale === "sv") return sv_basecamp_analytics_channel(inputs)
	if (locale === "tr") return tr_basecamp_analytics_channel(inputs)
	if (locale === "zh") return zh_basecamp_analytics_channel(inputs)
	if (locale === "ja") return ja_basecamp_analytics_channel(inputs)
	return en_basecamp_analytics_channel(inputs)
});
