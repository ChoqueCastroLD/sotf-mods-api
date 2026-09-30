/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Uptime_MediaInputs */

const en_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads and media`)
};

const es_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas y medios`)
};

const de_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads und Medien`)
};

const fr_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements et médias`)
};

const it_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download e media`)
};

const nl_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads en media`)
};

const pl_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobieranie i media`)
};

const pt_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads e mídia`)
};

const ru_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки и медиа`)
};

const sv_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar och media`)
};

const tr_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler ve medya`)
};

const zh_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载与媒体`)
};

const ja_content_radar_uptime_media = /** @type {(inputs: Content_Radar_Uptime_MediaInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードとメディア`)
};

/**
* | output |
* | --- |
* | "Downloads and media" |
*
* @param {Content_Radar_Uptime_MediaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_media = /** @type {((inputs?: Content_Radar_Uptime_MediaInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_MediaInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_media(inputs)
	if (locale === "de") return de_content_radar_uptime_media(inputs)
	if (locale === "fr") return fr_content_radar_uptime_media(inputs)
	if (locale === "it") return it_content_radar_uptime_media(inputs)
	if (locale === "nl") return nl_content_radar_uptime_media(inputs)
	if (locale === "pl") return pl_content_radar_uptime_media(inputs)
	if (locale === "pt") return pt_content_radar_uptime_media(inputs)
	if (locale === "ru") return ru_content_radar_uptime_media(inputs)
	if (locale === "sv") return sv_content_radar_uptime_media(inputs)
	if (locale === "tr") return tr_content_radar_uptime_media(inputs)
	if (locale === "zh") return zh_content_radar_uptime_media(inputs)
	if (locale === "ja") return ja_content_radar_uptime_media(inputs)
	return en_content_radar_uptime_media(inputs)
});
