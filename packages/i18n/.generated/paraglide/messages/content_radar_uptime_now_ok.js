/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Radar_Uptime_Now_OkInputs */

const en_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operational`)
};

const es_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operativo`)
};

const de_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Betrieb`)
};

const fr_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opérationnel`)
};

const it_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operativo`)
};

const nl_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operationeel`)
};

const pl_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Działa`)
};

const pt_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Operacional`)
};

const ru_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работает`)
};

const sv_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fungerar`)
};

const tr_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çalışıyor`)
};

const zh_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运行正常`)
};

const ja_content_radar_uptime_now_ok = /** @type {(inputs: Content_Radar_Uptime_Now_OkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正常稼働`)
};

/**
* | output |
* | --- |
* | "Operational" |
*
* @param {Content_Radar_Uptime_Now_OkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_uptime_now_ok = /** @type {((inputs?: Content_Radar_Uptime_Now_OkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Uptime_Now_OkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_uptime_now_ok(inputs)
	if (locale === "de") return de_content_radar_uptime_now_ok(inputs)
	if (locale === "fr") return fr_content_radar_uptime_now_ok(inputs)
	if (locale === "it") return it_content_radar_uptime_now_ok(inputs)
	if (locale === "nl") return nl_content_radar_uptime_now_ok(inputs)
	if (locale === "pl") return pl_content_radar_uptime_now_ok(inputs)
	if (locale === "pt") return pt_content_radar_uptime_now_ok(inputs)
	if (locale === "ru") return ru_content_radar_uptime_now_ok(inputs)
	if (locale === "sv") return sv_content_radar_uptime_now_ok(inputs)
	if (locale === "tr") return tr_content_radar_uptime_now_ok(inputs)
	if (locale === "zh") return zh_content_radar_uptime_now_ok(inputs)
	if (locale === "ja") return ja_content_radar_uptime_now_ok(inputs)
	return en_content_radar_uptime_now_ok(inputs)
});
