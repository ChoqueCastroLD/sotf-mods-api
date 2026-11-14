/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_TrafficInputs */

const en_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traffic`)
};

const es_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tráfico`)
};

const de_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traffic`)
};

const fr_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trafic`)
};

const it_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traffico`)
};

const nl_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verkeer`)
};

const pl_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruch`)
};

const pt_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tráfego`)
};

const ru_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Трафик`)
};

const sv_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trafik`)
};

const tr_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trafik`)
};

const zh_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`流量`)
};

const ja_console_nav_traffic = /** @type {(inputs: Console_Nav_TrafficInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トラフィック`)
};

/**
* | output |
* | --- |
* | "Traffic" |
*
* @param {Console_Nav_TrafficInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_traffic = /** @type {((inputs?: Console_Nav_TrafficInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_TrafficInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_traffic(inputs)
	if (locale === "de") return de_console_nav_traffic(inputs)
	if (locale === "fr") return fr_console_nav_traffic(inputs)
	if (locale === "it") return it_console_nav_traffic(inputs)
	if (locale === "nl") return nl_console_nav_traffic(inputs)
	if (locale === "pl") return pl_console_nav_traffic(inputs)
	if (locale === "pt") return pt_console_nav_traffic(inputs)
	if (locale === "ru") return ru_console_nav_traffic(inputs)
	if (locale === "sv") return sv_console_nav_traffic(inputs)
	if (locale === "tr") return tr_console_nav_traffic(inputs)
	if (locale === "zh") return zh_console_nav_traffic(inputs)
	if (locale === "ja") return ja_console_nav_traffic(inputs)
	return en_console_nav_traffic(inputs)
});
