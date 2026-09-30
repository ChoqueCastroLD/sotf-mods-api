/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Channels_ChartInputs */

const en_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads by channel`)
};

const es_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas por canal`)
};

const de_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads nach Kanal`)
};

const fr_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements par canal`)
};

const it_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download per canale`)
};

const nl_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads per kanaal`)
};

const pl_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania według kanału`)
};

const pt_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads por canal`)
};

const ru_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки по каналам`)
};

const sv_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar per kanal`)
};

const tr_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kanala göre indirmeler`)
};

const zh_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各渠道下载量`)
};

const ja_basecamp_analytics_channels_chart = /** @type {(inputs: Basecamp_Analytics_Channels_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャネル別のダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads by channel" |
*
* @param {Basecamp_Analytics_Channels_ChartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_channels_chart = /** @type {((inputs?: Basecamp_Analytics_Channels_ChartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Channels_ChartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_channels_chart(inputs)
	if (locale === "de") return de_basecamp_analytics_channels_chart(inputs)
	if (locale === "fr") return fr_basecamp_analytics_channels_chart(inputs)
	if (locale === "it") return it_basecamp_analytics_channels_chart(inputs)
	if (locale === "nl") return nl_basecamp_analytics_channels_chart(inputs)
	if (locale === "pl") return pl_basecamp_analytics_channels_chart(inputs)
	if (locale === "pt") return pt_basecamp_analytics_channels_chart(inputs)
	if (locale === "ru") return ru_basecamp_analytics_channels_chart(inputs)
	if (locale === "sv") return sv_basecamp_analytics_channels_chart(inputs)
	if (locale === "tr") return tr_basecamp_analytics_channels_chart(inputs)
	if (locale === "zh") return zh_basecamp_analytics_channels_chart(inputs)
	if (locale === "ja") return ja_basecamp_analytics_channels_chart(inputs)
	return en_basecamp_analytics_channels_chart(inputs)
});
