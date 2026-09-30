/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Channels_TitleInputs */

const en_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`By channel`)
};

const es_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por canal`)
};

const de_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Kanal`)
};

const fr_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Par canal`)
};

const it_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per canale`)
};

const nl_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per kanaal`)
};

const pl_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Według kanału`)
};

const pt_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Por canal`)
};

const ru_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`По каналам`)
};

const sv_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per kanal`)
};

const tr_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanala göre`)
};

const zh_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按渠道`)
};

const ja_basecamp_analytics_channels_title = /** @type {(inputs: Basecamp_Analytics_Channels_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャネル別`)
};

/**
* | output |
* | --- |
* | "By channel" |
*
* @param {Basecamp_Analytics_Channels_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_channels_title = /** @type {((inputs?: Basecamp_Analytics_Channels_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Channels_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_channels_title(inputs)
	if (locale === "de") return de_basecamp_analytics_channels_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_channels_title(inputs)
	if (locale === "it") return it_basecamp_analytics_channels_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_channels_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_channels_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_channels_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_channels_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_channels_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_channels_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_channels_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_channels_title(inputs)
	return en_basecamp_analytics_channels_title(inputs)
});
