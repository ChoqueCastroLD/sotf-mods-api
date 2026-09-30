/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown>, state: NonNullable<unknown> }} Content_Radar_Uptime_DayInputs */

const en_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

const es_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

const de_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

const fr_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} : ${i?.state}`)
};

const it_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

const nl_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

const pl_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

const pt_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

const ru_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

const sv_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

const tr_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

const zh_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}：${i?.state}`)
};

const ja_content_radar_uptime_day = /** @type {(inputs: Content_Radar_Uptime_DayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date}: ${i?.state}`)
};

/**
* | output |
* | --- |
* | "{date}: {state}" |
*
* @param {Content_Radar_Uptime_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_day = /** @type {((inputs: Content_Radar_Uptime_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_day(inputs)
	if (locale === "de") return de_content_radar_uptime_day(inputs)
	if (locale === "fr") return fr_content_radar_uptime_day(inputs)
	if (locale === "it") return it_content_radar_uptime_day(inputs)
	if (locale === "nl") return nl_content_radar_uptime_day(inputs)
	if (locale === "pl") return pl_content_radar_uptime_day(inputs)
	if (locale === "pt") return pt_content_radar_uptime_day(inputs)
	if (locale === "ru") return ru_content_radar_uptime_day(inputs)
	if (locale === "sv") return sv_content_radar_uptime_day(inputs)
	if (locale === "tr") return tr_content_radar_uptime_day(inputs)
	if (locale === "zh") return zh_content_radar_uptime_day(inputs)
	if (locale === "ja") return ja_content_radar_uptime_day(inputs)
	return en_content_radar_uptime_day(inputs)
});
