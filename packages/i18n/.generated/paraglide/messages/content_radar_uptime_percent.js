/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ share: NonNullable<unknown> }} Content_Radar_Uptime_PercentInputs */

const en_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} uptime`)
};

const es_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} de disponibilidad`)
};

const de_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} Verfügbarkeit`)
};

const fr_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} de disponibilité`)
};

const it_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} di disponibilità`)
};

const nl_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} uptime`)
};

const pl_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} dostępności`)
};

const pt_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} de disponibilidade`)
};

const ru_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} доступности`)
};

const sv_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} drifttid`)
};

const tr_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.share} çalışma süresi`)
};

const zh_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`可用性 ${i?.share}`)
};

const ja_content_radar_uptime_percent = /** @type {(inputs: Content_Radar_Uptime_PercentInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`稼働率 ${i?.share}`)
};

/**
* | output |
* | --- |
* | "{share} uptime" |
*
* @param {Content_Radar_Uptime_PercentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_percent = /** @type {((inputs: Content_Radar_Uptime_PercentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_PercentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_percent(inputs)
	if (locale === "de") return de_content_radar_uptime_percent(inputs)
	if (locale === "fr") return fr_content_radar_uptime_percent(inputs)
	if (locale === "it") return it_content_radar_uptime_percent(inputs)
	if (locale === "nl") return nl_content_radar_uptime_percent(inputs)
	if (locale === "pl") return pl_content_radar_uptime_percent(inputs)
	if (locale === "pt") return pt_content_radar_uptime_percent(inputs)
	if (locale === "ru") return ru_content_radar_uptime_percent(inputs)
	if (locale === "sv") return sv_content_radar_uptime_percent(inputs)
	if (locale === "tr") return tr_content_radar_uptime_percent(inputs)
	if (locale === "zh") return zh_content_radar_uptime_percent(inputs)
	if (locale === "ja") return ja_content_radar_uptime_percent(inputs)
	return en_content_radar_uptime_percent(inputs)
});
