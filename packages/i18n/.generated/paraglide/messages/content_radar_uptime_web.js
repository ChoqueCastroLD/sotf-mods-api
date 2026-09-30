/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Uptime_WebInputs */

const en_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const es_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sitio web`)
};

const de_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const fr_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site web`)
};

const it_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sito web`)
};

const nl_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Website`)
};

const pl_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strona`)
};

const pt_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site`)
};

const ru_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сайт`)
};

const sv_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webbplats`)
};

const tr_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Web sitesi`)
};

const zh_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`网站`)
};

const ja_content_radar_uptime_web = /** @type {(inputs: Content_Radar_Uptime_WebInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ウェブサイト`)
};

/**
* | output |
* | --- |
* | "Website" |
*
* @param {Content_Radar_Uptime_WebInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_web = /** @type {((inputs?: Content_Radar_Uptime_WebInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_WebInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_web(inputs)
	if (locale === "de") return de_content_radar_uptime_web(inputs)
	if (locale === "fr") return fr_content_radar_uptime_web(inputs)
	if (locale === "it") return it_content_radar_uptime_web(inputs)
	if (locale === "nl") return nl_content_radar_uptime_web(inputs)
	if (locale === "pl") return pl_content_radar_uptime_web(inputs)
	if (locale === "pt") return pt_content_radar_uptime_web(inputs)
	if (locale === "ru") return ru_content_radar_uptime_web(inputs)
	if (locale === "sv") return sv_content_radar_uptime_web(inputs)
	if (locale === "tr") return tr_content_radar_uptime_web(inputs)
	if (locale === "zh") return zh_content_radar_uptime_web(inputs)
	if (locale === "ja") return ja_content_radar_uptime_web(inputs)
	return en_content_radar_uptime_web(inputs)
});
