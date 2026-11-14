/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_TitleInputs */

const en_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traffic`)
};

const es_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tráfico`)
};

const de_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traffic`)
};

const fr_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trafic`)
};

const it_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traffico`)
};

const nl_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verkeer`)
};

const pl_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruch`)
};

const pt_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tráfego`)
};

const ru_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Трафик`)
};

const sv_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trafik`)
};

const tr_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trafik`)
};

const zh_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`流量`)
};

const ja_admin_traffic_title = /** @type {(inputs: Admin_Traffic_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トラフィック`)
};

/**
* | output |
* | --- |
* | "Traffic" |
*
* @param {Admin_Traffic_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_title = /** @type {((inputs?: Admin_Traffic_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_title(inputs)
	if (locale === "de") return de_admin_traffic_title(inputs)
	if (locale === "fr") return fr_admin_traffic_title(inputs)
	if (locale === "it") return it_admin_traffic_title(inputs)
	if (locale === "nl") return nl_admin_traffic_title(inputs)
	if (locale === "pl") return pl_admin_traffic_title(inputs)
	if (locale === "pt") return pt_admin_traffic_title(inputs)
	if (locale === "ru") return ru_admin_traffic_title(inputs)
	if (locale === "sv") return sv_admin_traffic_title(inputs)
	if (locale === "tr") return tr_admin_traffic_title(inputs)
	if (locale === "zh") return zh_admin_traffic_title(inputs)
	if (locale === "ja") return ja_admin_traffic_title(inputs)
	return en_admin_traffic_title(inputs)
});
