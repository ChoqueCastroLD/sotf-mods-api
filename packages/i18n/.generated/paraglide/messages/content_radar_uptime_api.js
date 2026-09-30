/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Uptime_ApiInputs */

const en_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const es_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const de_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const fr_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const it_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const nl_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const pl_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const pt_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const ru_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const sv_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const tr_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const zh_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const ja_content_radar_uptime_api = /** @type {(inputs: Content_Radar_Uptime_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

/**
* | output |
* | --- |
* | "API" |
*
* @param {Content_Radar_Uptime_ApiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_api = /** @type {((inputs?: Content_Radar_Uptime_ApiInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_ApiInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_api(inputs)
	if (locale === "de") return de_content_radar_uptime_api(inputs)
	if (locale === "fr") return fr_content_radar_uptime_api(inputs)
	if (locale === "it") return it_content_radar_uptime_api(inputs)
	if (locale === "nl") return nl_content_radar_uptime_api(inputs)
	if (locale === "pl") return pl_content_radar_uptime_api(inputs)
	if (locale === "pt") return pt_content_radar_uptime_api(inputs)
	if (locale === "ru") return ru_content_radar_uptime_api(inputs)
	if (locale === "sv") return sv_content_radar_uptime_api(inputs)
	if (locale === "tr") return tr_content_radar_uptime_api(inputs)
	if (locale === "zh") return zh_content_radar_uptime_api(inputs)
	if (locale === "ja") return ja_content_radar_uptime_api(inputs)
	return en_content_radar_uptime_api(inputs)
});
